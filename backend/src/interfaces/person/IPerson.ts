import { type IClass, type ISkill } from '@interfaces';

export interface IPerson {
    id: number;
    name: string;
    city: string;
    classId?: number;
    alias?: string;
    picture?: string;
    phrase?: string;
    animal?: string;
}

export interface IPersonWithSkills extends IPerson {
    skills?: Partial<ISkill[]>;
    classNumber?: Partial<IClass>;
}
