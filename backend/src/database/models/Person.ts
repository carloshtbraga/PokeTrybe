import {
    DataTypes,
    Model,
    type InferAttributes,
    type InferCreationAttributes,
    type CreationOptional,
    type NonAttribute
} from 'sequelize';
import db from '.';
import { type IClass, type ISkill } from '@interfaces';
import Skill from './Skill';
import Class from './Class';
import PersonSkill from './PersonSkill';

class Person extends Model<InferAttributes<Person>, InferCreationAttributes<Person>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare city: string;
    declare alias?: string;
    declare picture?: string;
    declare phrase?: string;
    declare animal?: string;
    declare skills?: NonAttribute<Partial<ISkill[]>>;
    declare classNumber?: NonAttribute<Partial<IClass>>;
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
    timestamps: false,
    underscored: true
});

// crias a tabela de relacionamento entre as tabelas people e skills
Person.belongsToMany(Skill, {
    through: PersonSkill,
    as: 'skills',
    foreignKey: 'person_id',
    otherKey: 'skill_id'
});

Skill.belongsToMany(Person, {
    through: PersonSkill,
    as: 'people',
    foreignKey: 'skill_id',
    otherKey: 'person_id'
});

// cria o relacionamento entre as tabelas people e classes
Person.belongsTo(Class, {
    as: 'classNumber',
    foreignKey: 'class_id'
});

export default Person;
