import { type Request, type Response } from 'express';
import PersonService from '../services/Person.service';
import { log } from 'console';

export default class PersonController {
    constructor(
        private readonly _personService = new PersonService()
    ) {
    }

    public getAll(_req: Request, res: Response): void {
        this._personService.getAll()
            .then((data) => {
                res.status(200).json(data.data);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }

    public insert(req: Request, res: Response): void {
        log(req.body);
        this._personService.insert(req.body)
            .then((data) => {
                res.status(201).json(data.data);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }
}
