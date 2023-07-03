import { ServiceResponse } from '../../interfaces/ServiceResponse';
import { IPersonModel, IPersonWithSkills } from '../../interfaces/person';
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
}
