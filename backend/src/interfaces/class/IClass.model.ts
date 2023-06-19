import { type IClass } from '@interfaces';

export interface IClassModel {
    getAll: () => Promise<IClass[]>;
}
