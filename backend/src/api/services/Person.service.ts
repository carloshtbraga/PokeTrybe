import { type ServiceResponse } from '../../interfaces/ServiceResponse';
import { type IPersonModel, type IPersonWithSkills } from '../../interfaces/person';
import PersonModel from '../models/Person.model';

export default class PersonService {
    constructor(
        private readonly _personModel: IPersonModel = new PersonModel()
    ) {
    }

    public async getAll(): Promise<ServiceResponse<IPersonWithSkills[]>> {
        const people = await this._personModel.getAll();
        return { status: 'SUCCESSFUL', data: people };
    }

    public async insertPerson(person: any): Promise<ServiceResponse<IPersonWithSkills>> {
        person.classId = person.classNumber;
        delete person.classNumber; // ! remover essas 2 linhas assim que recever a chave correta
        const newPerson = await this._personModel.insertPerson(person);
        return { status: 'SUCCESSFUL', data: newPerson };
    }

    public async deletePerson(id: number): Promise<ServiceResponse<string>> {
        const deletedPerson = await this._personModel.deletePerson(id);
        if (deletedPerson === undefined) {
            return { status: 'NOT_FOUND', data: { message: 'Person not found' } };
        }
        return { status: 'SUCCESSFUL', data: `${deletedPerson} was deleted` };
    }
}
