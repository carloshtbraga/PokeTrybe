import {
    DataTypes,
    Model,
    type InferAttributes,
    type InferCreationAttributes
} from 'sequelize';
import db from '.';

class PersonSkill extends Model<InferAttributes<PersonSkill>, InferCreationAttributes<PersonSkill>> {
    declare personId: number;
    declare skillId: number;
}

PersonSkill.init({
    personId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'people',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    skillId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'skills',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
}, {
    sequelize: db,
    modelName: 'people_skills',
    timestamps: false,
    underscored: true
});

export default PersonSkill;
