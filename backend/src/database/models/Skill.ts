import {
    DataTypes,
    Model,
    type InferAttributes,
    type InferCreationAttributes,
    type CreationOptional
} from 'sequelize';
import db from '.';

class Skill extends Model<InferAttributes<Skill>, InferCreationAttributes<Skill>> {
    declare id: CreationOptional<number>;
    declare name: string;
}

Skill.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'skills',
    timestamps: false,
    underscored: true
});

export default Skill;
