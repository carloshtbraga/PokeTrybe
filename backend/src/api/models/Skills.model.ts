import Skill from '../../database/models/Skill';

export default class SkillsModel {
    constructor(
        private readonly _skill = Skill
    ) {}

    public async getAll(): Promise<any> {
        return await this._skill.findAll();
    }

    public async getSkillById(id: number): Promise<any> {
        return await this._skill.findByPk(id);
    }
}
