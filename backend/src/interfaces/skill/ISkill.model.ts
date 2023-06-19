import { type ISkill } from './ISkill';

export interface ISkillModel {
    getAll: () => Promise<ISkill[]>;
    getOne: (id: string) => Promise<ISkill>;
    create: (skill: ISkill) => Promise<ISkill>;
}
