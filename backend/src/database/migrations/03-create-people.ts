import { DataTypes, Model, QueryInterface } from 'sequelize';
import { IPerson } from '@interfaces';

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<IPerson>>('people', {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            classId: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'classes',
                    key: 'id',
                },
                field: 'class_id',
                onDelete: 'cascade',
                onUpdate: 'cascade',
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            alias: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            picture: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phrase: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            animal: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        });
    },

    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('people');
    },
};
