import PeopleModel from '../models/people.model';

export default class PeopleService {
    constructor(
        private readonly people = new PeopleModel()
    ) {
    }

    public async getall(): Promise<any> {
        const people = await this.people.getall();
        return people;
    }
}
