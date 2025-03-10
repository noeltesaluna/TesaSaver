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
            type: DataTypes.STRING,
            default: "Budget"
        },
        budget_amount: {
            type: DataTypes.DOUBLE,
            default: 0.00,
            get() { // Node-pg converts numeric to string, so we use a custom getter
                const value = this.getDataValue('budget_amount');
                return value === null ? null : parseFloat(value);
            }
        },
        start_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        end_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
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