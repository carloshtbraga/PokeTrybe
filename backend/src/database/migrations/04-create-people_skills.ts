import { DataTypes, Model, QueryInterface } from 'sequelize';
import { IPersonSkill } from '@interfaces';

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<IPersonSkill>>('people_skills', {
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

    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('people_skills');
    },
};
