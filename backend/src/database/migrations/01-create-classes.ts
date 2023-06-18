import { DataTypes, Model, QueryInterface } from 'sequelize';
import { IClass } from '@interfaces';

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<IClass>>('classes', {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            number: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            }
        });
    },

    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('classes');
    },
};
