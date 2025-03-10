const { DataTypes } = require('sequelize');
const db = require('../config/database')
const Budget = require('./budget')

const Bucket = db.define(
  'Bucket',
    {
        // Model attributes are defined here
        bucket_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,   // Without this it will generate a random as id field
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        bucket_name: {
            type: DataTypes.STRING   
        },
    },
    {
        tableName: 'buckets',   // table name in neon
        timestamps: true,   // By default sequelize will create updatedAt and CreatedAt dates
        updatedAt: false,    // I don't want this
        createdAt: 'created_at'     // Instead of createdAt we want it to be created_at
    }
);

module.exports = Bucket