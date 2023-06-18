import { DataTypes, type Model, type QueryInterface } from 'sequelize';
import { type IPerson } from '@interfaces';

export default {
    async up(queryInterface: QueryInterface) {
        await queryInterface.createTable<Model<IPerson>>('people', {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            classId: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'classes',
                    key: 'id'
                },
                field: 'class_id',
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false
            },
            alias: {
                type: DataTypes.STRING,
                allowNull: false
            },
            picture: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phrase: {
                type: DataTypes.STRING,
                allowNull: false
            },
            animal: {
                type: DataTypes.STRING,
                allowNull: false
            }
        });
    },

    async down(queryInterface: QueryInterface) {
        await queryInterface.dropTable('people');
    }
};
