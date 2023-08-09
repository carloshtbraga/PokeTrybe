import { type IPersonSkill, type IClass, type ISkill } from '@interfaces';
import Class from '../../database/models/Class';
import Person from '../../database/models/Person';
import Skill from '../../database/models/Skill';
import PersonSkill from '../../database/models/PersonSkill';
import {
    type IPersonModel,
    type IPersonWithSkills
} from '../../interfaces/person';

export default class PersonModel implements IPersonModel {
    private readonly _model = Person;
    private readonly _skill = Skill;
    private readonly _personSkill = PersonSkill;

    public async getAll(): Promise<IPersonWithSkills[]> {
        const people = await this._model.findAll({
            include: [
                { model: Skill, as: 'skills', attributes: ['name'] },
                { model: Class, as: 'classNumber', attributes: ['number'] }
            ]
        });

        const formatedPeople = people.map((person) => {
            const {
                id,
                name,
                city,
                picture,
                classNumber,
                skills,
                alias,
                animal,
                phrase
            } = person;

            const formattedSkills = skills?.map((skill) => skill?.name) ?? [];
            const formattedClassNumber = classNumber?.number;

            return {
                id,
                name,
                city,
                picture,
                classNumber: formattedClassNumber,
                skills: formattedSkills,
                alias,
                animal,
                phrase
            };
        });

        return formatedPeople as IPersonWithSkills[];
    }

    public async getPersonById(id: number): Promise<IPersonWithSkills | null> {
        const person = await this._model.findByPk(id, {
            include: [
                { model: Skill, as: 'skills', attributes: ['name'] },
                { model: Class, as: 'classNumber', attributes: ['number'] }
            ]
        });

        if (person == null) {
            return null;
        }

        const {
            name,
            city,
            picture,
            classNumber,
            skills,
            alias,
            animal,
            phrase
        } = person;

        const formattedSkills = skills?.map((skill) => skill?.name) ?? [];
        const formattedClassNumber = classNumber?.number;

        return {
            id,
            name,
            city,
            picture,
            classNumber: formattedClassNumber as Partial<IClass>,
            skills: formattedSkills as Partial<ISkill[]>,
            alias,
            animal,
            phrase
        };
    }

    public async insertPerson(person: any): Promise<IPersonWithSkills> {
        const newPerson = await this._model.create(person);
        const skills = await Promise.all(
            person.skills.map(async(skill: any) => {
                const id = await this._skill.findOrCreate({
                    where: { name: skill }
                });
                return id[0].id;
            })
        );

        await Promise.all(
            skills.map(async(skill: IPersonSkill) => {
                await this._personSkill.create({
                    personId: newPerson.id,
                    skillId: Number(skill)
                });
            })
        );

        return {
            id: newPerson.id,
            name: newPerson.name,
            city: newPerson.city,
            picture: newPerson.picture,
            skills: person.skills,
            classNumber: newPerson.classId as Partial<IClass>,
            alias: newPerson.alias,
            animal: newPerson.animal,
            phrase: newPerson.phrase
        };
    }

    public async deletePerson(id: number): Promise<string | undefined> {
        const person = await this._model.findByPk(id);
        await this._model.destroy({ where: { id } });
        return person?.name;
    }
}
