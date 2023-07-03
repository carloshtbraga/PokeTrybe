import { type IClass, type ISkill } from '@interfaces';
import Class from '../../database/models/Class';
import Person from '../../database/models/Person';
import Skill from '../../database/models/Skill';
import { type IPersonModel, type IPersonWithSkills } from '../../interfaces/person';

export default class PersonModel implements IPersonModel {
    private readonly _model = Person;

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

        return people.map(({
            id, name, city, picture, classNumber, skills, alias, animal, phrase
        }) => {
            return {
                id,
                name,
                city,
                picture,
                classNumber: classNumber?.number as Partial<IClass>,
                skills: skills?.map((skill) => skill?.name) as Partial<ISkill[]>,
                alias,
                animal,
                phrase
            };
        });
    }
}
