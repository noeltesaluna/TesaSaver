const sequelize = require('../config/database');
const Budget = require('./budget');
const Bucket = require('./bucket');
const Reserve = require('./reserve');

// Budget has many Buckets
Budget.hasMany(Bucket, {
  foreignKey: 'budget_id',
  onDelete: 'CASCADE'
});
Bucket.belongsTo(Budget, {
  foreignKey: 'budget_id'
});

// Bucket has many Reserves
Bucket.hasMany(Reserve, {
  foreignKey: 'bucket_id',
  onDelete: 'CASCADE'
});
Reserve.belongsTo(Bucket, {
  foreignKey: 'bucket_id'
});

const models = { Budget, Bucket, Reserve, sequelize };

module.exports = models;