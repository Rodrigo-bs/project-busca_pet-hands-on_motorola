import { Model, DataTypes } from 'sequelize';
import database from '../database';

export interface ColorInstance extends Model {
    id_color: number;
    color_name: string;
    color_hexadecimal: string;
};

export const Color = database.define<ColorInstance>('Color', {
    id_color: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.NUMBER
    },
    color_name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    color_hexadecimal: {
        allowNull: false,
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    tableName: 'color'
});