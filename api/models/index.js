const sequelize = require('../config/database');
const Budget = require('./budget');
const Bucket = require('./bucket');

// Budget has many Buckets
Budget.hasMany(Bucket, {
  foreignKey: 'budget_id',
  onDelete: 'CASCADE'
});
Bucket.belongsTo(Budget, {
  foreignKey: 'budget_id'
});

const models = { Budget, Bucket, sequelize };

module.exports = models;