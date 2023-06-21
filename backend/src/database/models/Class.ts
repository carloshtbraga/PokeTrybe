import {
    DataTypes,
    Model,
    type InferAttributes,
    type InferCreationAttributes,
    type CreationOptional
} from 'sequelize';
import db from '.';
import Person from './Person';

class Class extends Model<InferAttributes<Class>, InferCreationAttributes<Class>> {
    declare id: CreationOptional<number>;
    declare number: number;
}

Class.init({
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
}, {
    sequelize: db,
    modelName: 'classes',
    timestamps: true,
    underscored: true
});

Class.hasMany(Class, {
    foreignKey: 'id',
    as: 'class'
});

export default Class;
