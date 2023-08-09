import SkillsModel from '../models/Skills.model';

export default class SkillsService {
    constructor(
        private readonly skills = new SkillsModel()
    ) {}

    public async getAll(): Promise<any> {
        return await this.skills.getAll();
    }

    public async getSkillById(id: number): Promise<any> {
        return await this.skills.getSkillById(id);
    }
}
