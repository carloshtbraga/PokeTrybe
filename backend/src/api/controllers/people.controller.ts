import { type Request, type Response } from 'express';
import PeopleService from '../services/people.service';

export default class PeopleController {
    private readonly peopleService: PeopleService;

    constructor() {
        this.peopleService = new PeopleService();
    }

    public async getAll(req: Request, res: Response): Promise<Response> {
        const people = await this.peopleService.getall();

        return res.status(200).json(people);
    }
}
