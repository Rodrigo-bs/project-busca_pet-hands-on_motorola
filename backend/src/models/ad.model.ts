import { Model, DataTypes } from 'sequelize';
import database from '../database';

export interface ADModel extends Model {
    id_ad: number;
    ad_title: string;
    ad_description: string;
    ad_photos: string;
    ad_date_register: string;
    ad_address: string;
    ad_latitude: number;
    ad_longitude: number;
    ad_recompense: string;
    id_type_ad_fk: number;
    id_pet_fk: number;
    id_user_fk: number;
    ad_is_register_in_db: number;
};

export const AD = database.define<ADModel>('AD', {
    id_ad:{
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    ad_title:{
        allowNull: false,
        type: DataTypes.STRING
    },
    ad_description:{
        allowNull: true,
        type: DataTypes.TEXT
    },
    ad_photos:{
        allowNull: false,
        type: DataTypes.STRING
    },
    ad_date_register:{
        allowNull: false,
        type: DataTypes.DATE
    },
    ad_address: {
        allowNull: false,
        type: DataTypes.STRING
    },
    ad_latitude:{
        allowNull: false,
        type: DataTypes.NUMBER
    },
    ad_longitude:{
        allowNull: false,
        type: DataTypes.NUMBER
    },
    ad_recompense:{
        allowNull: false,
        type: DataTypes.STRING
    },
    id_type_ad_fk:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    id_pet_fk:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    id_user_fk:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    ad_is_register_in_db: {
        defaultValue: 0,
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'ad',
    timestamps: false
});