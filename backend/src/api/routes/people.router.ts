import { Router, type Request, type Response } from 'express';
import PersonController from '../controllers/Person.controller';

const peopleController = new PersonController();

const router = Router();

router.get('/', (req: Request, res: Response) => {
    peopleController.getAll(req, res);
});

router.post('/', (req: Request, res: Response) => {
    peopleController.insert(req, res);
});

export default router;
