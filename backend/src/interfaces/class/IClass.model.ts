import { type IClass } from './IClass';

export interface IClassModel {
    getAll: () => Promise<IClass[]>;
    getOne: (id: string) => Promise<IClass>;
    create: (person: IClass) => Promise<IClass>;
    update?: (person: IClass) => Promise<string>;
    delete?: (id: string) => Promise<string>;
}
