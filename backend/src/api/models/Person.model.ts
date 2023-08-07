import { IPersonSkill, type IClass, type ISkill } from '@interfaces';
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
                {
                    model: Skill,
                    as: 'skills',
                    attributes: ['name']
                },
                {
                    model: Class,
                    as: 'classNumber',
                    attributes: ['number']
                }
            ]
        });

        return people.map(
            ({
                id,
                name,
                city,
                picture,
                classNumber,
                skills,
                alias,
                animal,
                phrase
            }) => {
                return {
                    id,
                    name,
                    city,
                    picture,
                    classNumber: classNumber?.number as Partial<IClass>,
                    skills: skills?.map((skill) => skill?.name) as Partial<
                    ISkill[]
                    >,
                    alias,
                    animal,
                    phrase
                };
            }
        );
    }

    public async insert(person: any): Promise<IPersonWithSkills> {
        const newPerson = await this._model.create(person);
        const skills = await Promise.all(
            person.skills.map(async(skill: any) => {
                console.log('skill aqui', skill);
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
}
