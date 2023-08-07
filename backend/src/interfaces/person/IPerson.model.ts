import { type IPersonWithSkills } from './IPerson';

export interface IPersonModel {
    getAll: () => Promise<IPersonWithSkills[]>;
    insertPerson: (person: IPersonWithSkills) => Promise<IPersonWithSkills>;
    deletePerson: (id: number) => Promise<string | undefined>;
}
