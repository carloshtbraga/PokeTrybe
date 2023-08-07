import { Router, type Request, type Response } from 'express';
import PersonController from '../controllers/Person.controller';

const peopleController = new PersonController();

const router = Router();

router.get('/', (req: Request, res: Response) => {
    peopleController.getAll(req, res);
});

router.post('/', (req: Request, res: Response) => {
    peopleController.insertPerson(req, res);
});

router.delete('/:id', (req: Request, res: Response) => {
    peopleController.deletePerson(req, res);
});

export default router;
