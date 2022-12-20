import { Model, DataTypes } from 'sequelize';
import database from '../database';

export interface FurInstance extends Model {
    id_fur: number;
    fur_name: string;
};

export const Fur = database.define<FurInstance>('Fur', {
    id_fur: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.NUMBER
    },
    fur_name: {
        allowNull: false,
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    tableName: 'fur'
});