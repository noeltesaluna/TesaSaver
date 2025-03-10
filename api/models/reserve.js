const { DataTypes } = require('sequelize');
const db = require('../config/database')

const Reserve = db.define(
  'Reserve',
    {
        // Model attributes are defined here
        reserve_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,   // Without this it will generate a random as id field
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        reserve_name: {
            type: DataTypes.STRING   
        },
        reserve_amount: {
            type: DataTypes.NUMBER
        },
    },
    {
        tableName: 'reserves',   // table name in neon
        timestamps: true,   // By default sequelize will create updatedAt and CreatedAt dates
        updatedAt: false,    // I don't want this
        createdAt: 'created_at'     // Instead of createdAt we want it to be created_at
    }
);

module.exports = Reserve