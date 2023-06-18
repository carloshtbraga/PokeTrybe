import { DataTypes, Model, QueryInterface } from 'sequelize';
import { ISkill } from '@interfaces';

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<ISkill>>('skills', {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            }
        });
    },

    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('skills');
    },
};
