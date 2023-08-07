import PersonModel from '../models/Person.model';

export default class PersonSkillsService {
    constructor(private readonly _personModel: any = new PersonModel()) {}

    async getPersonSkills(personId: number): Promise<any> {
        const person = await this._personModel.getPersonById(personId);
        return person.skills;
    }
}
