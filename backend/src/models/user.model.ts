import { Model, DataTypes } from 'sequelize';
import database from '../database';

export interface UserInstance extends Model {
    id_user: number;
    user_name: string;
    user_email: string;
    user_password: string;
    user_cpf: string;
    user_phone: string;
    user_photo: string;
};

export const User = database.define<UserInstance>('User', {
    id_user: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.NUMBER
    },
    user_name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    user_email: {
        allowNull: false,
        type: DataTypes.STRING
    },
    user_password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    user_cpf: {
        allowNull: false,
        type: DataTypes.NUMBER
    },
    user_phone: {
        allowNull: true,
        type: DataTypes.STRING
    },
    user_photo: {
        allowNull: true,
        type: DataTypes.STRING
    },
}, {
    tableName: 'user',
    timestamps: false
});