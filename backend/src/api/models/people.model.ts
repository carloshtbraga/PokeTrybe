import Class from '../../database/models/Class';
import Person from '../../database/models/Person';
import { type IPerson } from '@interfaces';

export default class PeopleModel {
    private readonly person = Person;

    public async getall(): Promise<any> {
        const people = await this.person.findAll();
        return people;
    }
}
