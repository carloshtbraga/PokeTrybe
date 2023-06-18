import { DataTypes, type Model, type QueryInterface } from 'sequelize';
import { type IPersonSkill } from '@interfaces';

export default {
    async up(queryInterface: QueryInterface) {
        await queryInterface.createTable<Model<IPersonSkill>>('people_skills', {
            personId: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                references: {
                    model: 'people',
                    key: 'id'
                },
                field: 'person_id',
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },
            skillId: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                references: {
                    model: 'skills',
                    key: 'id'
                },
                field: 'skill_id',
                onDelete: 'cascade',
                onUpdate: 'cascade'
            }
        });
    },

    async down(queryInterface: QueryInterface) {
        await queryInterface.dropTable('people_skills');
    }
};
