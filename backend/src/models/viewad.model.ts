import { Model, DataTypes } from 'sequelize';
import database from '../database';

export interface ViewAD extends Model {
    id_ad: number;
    id_user_ad: number;
    id_pet_ad: number;
    title_ad: string;
    name_user_ad: string;
    name_pet_ad: string;
    email_user_ad: string;
    phone_user_ad: string;
    description_ad: string;
    description_pet_ad: string;
    photos_ad: string;
    photo_user_ad: string;
    photo_pet_ad: string;
    name_category_pet_ad: string;
    name_race_pet_ad: string;
    name_fur_pet_ad: string;
    name_color_pet_ad: string;
    hexadecimal_color_pet_ad: string;
    latitude_ad: string;
    longitude_ad: string;
    date_register_ad: string;
}

export const ViewAD = database.define<ViewAD>('ViewAD', {
    id_ad: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.NUMBER
    },
    id_user_ad: {
        type: DataTypes.NUMBER
    },
    id_pet_ad: {
        type: DataTypes.NUMBER
    },
    title_ad: {
        type: DataTypes.STRING
    },
    name_user_ad: {
        type: DataTypes.STRING
    },
    name_pet_ad: {
        type: DataTypes.STRING
    },
    email_user_ad: {
        type: DataTypes.STRING
    },
    phone_user_ad: {
        type: DataTypes.STRING
    },
    description_ad: {
        type: DataTypes.TEXT
    },
    description_pet_ad: {
        type: DataTypes.TEXT
    },
    photos_ad: {
        type: DataTypes.STRING
    },
    photo_user_ad: {
        type: DataTypes.STRING
    },
    photo_pet_ad: {
        type: DataTypes.STRING
    },
    name_category_pet_ad: {
        type: DataTypes.STRING
    },
    name_race_pet_ad: {
        type: DataTypes.STRING
    },
    name_fur_pet_ad: {
        type: DataTypes.STRING
    },
    name_color_pet_ad: {
        type: DataTypes.STRING
    },
    hexadecimal_color_pet_ad: {
        type: DataTypes.STRING
    },
    latitude_ad: {
        type: DataTypes.FLOAT
    },
    longitude_ad: {
        type: DataTypes.FLOAT
    },
    date_register_ad: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'Viewad',
    timestamps: false
});
