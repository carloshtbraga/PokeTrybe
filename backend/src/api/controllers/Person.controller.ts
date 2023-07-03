import { type Request, type Response } from 'express';
import PersonService from '../services/Person.service';

export default class PersonController {
    constructor(
        private readonly _personService = new PersonService()
    ) {
    }

    public getAll(_req: Request, res: Response): void {
        this._personService.getAll()
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }
}
