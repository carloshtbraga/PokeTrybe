import { type Request, type Response } from 'express';
import SkillsService from '../services/Skills.service';

export default class SkillsController {
    constructor(
        private readonly skills = new SkillsService()
    ) {}

    public getAll(_req: Request, res: Response): void {
        this.skills.getAll().then((skills) => {
            res.status(200).json(skills);
        }
        ).catch((err) => {
            res.status(500).json(err);
        });
    }

    public getSkillById(req: Request, res: Response): void {
        const id = Number(req.params.id);
        this.skills.getSkillById(id).then((skill) => {
            res.status(200).json(skill);
        }
        ).catch((err) => {
            res.status(500).json(err);
        });
    }
}
