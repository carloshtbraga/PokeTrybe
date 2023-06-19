import { type IPerson } from './IPerson';

export interface IPersonModel {
    getAll: () => Promise<IPerson[]>;
    getOne: (id: string) => Promise<IPerson>;
    create: (person: IPerson) => Promise<IPerson>;
    update?: (id: string, person: IPerson) => Promise<IPerson>;
    delete?: (id: string) => Promise<IPerson>;
}
