import { Model, DataTypes } from 'sequelize';
import database from '../database';

export interface CategoryInstance extends Model {
    id_category: number;
    category_name: string;
};

export const Category = database.define<CategoryInstance>('category', {
    id_category: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.NUMBER
    },
    category_name: {
        allowNull: false,
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    tableName: 'category'
});

