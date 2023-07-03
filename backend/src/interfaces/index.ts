import {
    type IPerson, type IPersonSkill, type IPersonModel, type IPersonSkillModel
} from './person';
import { type ISkill, type ISkillModel } from './skill';
import { type IClass, type IClassModel } from './class';
import { ServiceResponse, ServiceMessage, ServiceResponseError, ServiceResponseSuccess } from './ServiceResponse';

export type {
    IClass,
    IPerson,
    ISkill,
    IPersonSkill,
    IPersonModel,
    IClassModel,
    ISkillModel,
    IPersonSkillModel,
    ServiceResponse,
    ServiceMessage,
    ServiceResponseError,
    ServiceResponseSuccess
};
