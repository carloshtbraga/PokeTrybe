import {
    DataTypes,
    Model,
    type InferAttributes,
    type InferCreationAttributes,
    type CreationOptional
} from 'sequelize';
import db from '.';

class Person extends Model<InferAttributes<Person>, InferCreationAttributes<Person>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare city: string;
    declare alias?: string;
    declare picture?: string;
    declare phrase?: string;
    declare animal?: string;
}

Person.init({
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
}, {
    sequelize: db,
    modelName: 'people',
    timestamps: true,
    underscored: true
});

export default Person;
