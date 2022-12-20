import { Model, DataTypes } from 'sequelize';
import database from '../database';

export interface PetInstance extends Model {
    id_pet: number;
    pet_name: string;
    pet_description: string;
    pet_photo: string;
    pet_date_register: string;
    pet_lost: number;
    pet_is_register_in_db: number;
    id_color_pelagem_fk: number;
    id_fur_fk: number;
    id_category_fk: number;
    id_race_fk: number;
    id_user_fk: number;
};

export const Pet = database.define<PetInstance>('Pet', {
    id_pet: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    pet_name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    pet_description: {
        allowNull: true,
        type: DataTypes.STRING
    },
    pet_photo: {
        allowNull: true,
        type: DataTypes.STRING
    },
    pet_date_register: {
        allowNull: false,
        type: DataTypes.DATE
    },
    pet_lost: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    pet_is_register_in_db: {
        defaultValue: 0,
        type: DataTypes.INTEGER
    },
    id_color_pelagem_fk: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    id_fur_fk: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    id_category_fk: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    id_race_fk: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    id_user_fk: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'pet',
    timestamps: false
});