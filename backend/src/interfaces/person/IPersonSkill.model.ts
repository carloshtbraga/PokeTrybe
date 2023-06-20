import { type IPersonSkill } from './IPersonSkill';

export interface IPersonSkillModel {
    getPersonSkills: () => Promise<IPersonSkill[]>
    getPersonSkill: (id: string) => Promise<IPersonSkill>
    createPersonSkill: (personSkill: IPersonSkill) => Promise<IPersonSkill>
    updatePersonSkill: (personSkill: IPersonSkill) => Promise<IPersonSkill>
    deletePersonSkill: (id: string) => Promise<IPersonSkill>
}
