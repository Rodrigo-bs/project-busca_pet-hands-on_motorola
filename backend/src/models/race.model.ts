import { Model, DataTypes } from 'sequelize';
import database from '../database';

export interface RaceInstance extends Model {
    id_race: number;
    race_name: string;
    id_category_fk: number;
};

export const Race = database.define<RaceInstance>('Race', {
    id_race: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.NUMBER
    },
    race_name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    id_category_fk: {
        allowNull: false,
        type: DataTypes.NUMBER
    }
}, {
    timestamps: false,
    tableName: 'race'
});