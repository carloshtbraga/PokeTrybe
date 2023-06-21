import {
    Router,
    type RequestHandler
} from 'express';
import PeopleController from '../api/controllers/people.controller';

const router = Router();
const peopleController = new PeopleController();

router.get('/p', peopleController.getAll as RequestHandler);

export default router;
