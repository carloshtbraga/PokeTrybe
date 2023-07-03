import { type IPersonWithSkills } from './IPerson';

export interface IPersonModel {
    getAll: () => Promise<IPersonWithSkills[]>;
}
