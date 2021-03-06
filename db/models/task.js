'use strict';
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('task', {
    name: DataTypes.STRING,
    date_due: DataTypes.DATE,
    priority: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN,
    notes: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    list_id: DataTypes.INTEGER
  }, {});
  task.associate = function (models) {
    // many to one list id to list.id
    task.belongsTo(models.list, { foreignKey: 'list_id' })
    task.belongsTo(models.user, { foreignKey: 'user_id' })
  };
  return task;
};
