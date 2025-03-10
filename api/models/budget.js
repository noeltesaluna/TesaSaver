const { DataTypes } = require('sequelize');
const db = require('../config/database')

const Budget = db.define(
  'Budget',
    {
        // Model attributes are defined here
        budget_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,   // Without this it will generate a random as id field which can mess up your sql code
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        budget_name: {
            type: DataTypes.STRING   
        },
        budget_amount: {
            type: DataTypes.NUMBER
        },
        start_date: {
            type: DataTypes.DATE
        },
        end_date: {
            type: DataTypes.DATE
        }
    },
    {
        tableName: 'budgets',  // Ensure the table name is correct
        timestamps: true,   // By default sequelize will create updatedAt and CreatedAt dates
        updatedAt: false,    // I don't want this
        createdAt: 'created_at'     // Instead of createdAt we want it to be created_at
    }
);

module.exports = Budget