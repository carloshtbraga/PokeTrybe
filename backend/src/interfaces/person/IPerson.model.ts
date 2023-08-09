import { type IPersonWithSkills } from './IPerson';

export interface IPersonModel {
    getAll: () => Promise<IPersonWithSkills[]>;
    getPersonById: (id: number) => Promise<IPersonWithSkills | null>;
    insertPerson: (person: IPersonWithSkills) => Promise<IPersonWithSkills>;
    deletePerson: (id: number) => Promise<string | undefined>;
}
