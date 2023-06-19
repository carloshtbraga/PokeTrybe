import { DataTypes, type Model, type QueryInterface } from 'sequelize';
import { type ISkill } from '@interfaces';

export default {
    async up(queryInterface: QueryInterface) {
        await queryInterface.createTable<Model<ISkill>>('skills', {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            }
        });
    },

    async down(queryInterface: QueryInterface) {
        await queryInterface.dropTable('skills');
    }
};
