import {
    DataTypes,
    Model,
    type InferAttributes,
    type InferCreationAttributes,
    type CreationOptional
} from 'sequelize';
import db from '.';

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
    timestamps: false,
    underscored: true
});

export default Class;
