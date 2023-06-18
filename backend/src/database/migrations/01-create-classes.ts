import { DataTypes, type Model, type QueryInterface } from 'sequelize';
import { type IClass } from '@interfaces';

export default {
    async up(queryInterface: QueryInterface) {
        await queryInterface.createTable<Model<IClass>>('classes', {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            number: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            }
        });
    },

    async down(queryInterface: QueryInterface) {
        await queryInterface.dropTable('classes');
    }
};
