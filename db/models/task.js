'use strict';
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('task', {
    name: DataTypes.STRING,
    date_created: DataTypes.DATE,
    date_due: DataTypes.DATE,
    priority: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN,
    notes: DataTypes.STRING,
    list_id: DataTypes.INTEGER
  }, {});
  task.associate = function(models) {
    // associations can be defined here
  };
  return task;
};
