import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'
import { Users } from './Users.js'

export const Posts = sequelize.define('Posts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING,        
    },
    user_id: {
        type: DataTypes.INTEGER,
    }

},{
    timestamps: true,
})


