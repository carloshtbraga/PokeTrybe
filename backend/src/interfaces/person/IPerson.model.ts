import { type IPersonWithSkills } from './IPerson';

export interface IPersonModel {
    getAll: () => Promise<IPersonWithSkills[]>;
    insert: (person: IPersonWithSkills) => Promise<IPersonWithSkills>;
}
