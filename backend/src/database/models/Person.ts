import {
    DataTypes,
    Model,
    type InferAttributes,
    type InferCreationAttributes,
    type CreationOptional
} from 'sequelize';
import db from '.';
import Class from './Class';
import Skill from './Skill';

class Person extends Model<InferAttributes<Person>, InferCreationAttributes<Person>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare classId: number;
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
    classId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'class_id',
        references: {
            model: 'classes',
            key: 'id'
        }
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
    timestamps: false,
    underscored: true
});

Person.belongsTo(Class, {
    foreignKey: 'classId',
    as: 'class'
// crias a tabela de relacionamento entre as tabelas people e skills
Person.belongsToMany(Skill, {
    through: 'people_skills',
    as: 'skills',
    foreignKey: 'person_id',
    otherKey: 'skill_id'
});

Skill.belongsToMany(Person, {
    through: 'people_skills',
    as: 'people',
    foreignKey: 'skill_id',
    otherKey: 'person_id'
});

export default Person;
