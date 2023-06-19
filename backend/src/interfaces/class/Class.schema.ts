import { type IClass } from '@interfaces';

export default interface MClass {
    getAll: () => Promise<IClass[]>;
}
