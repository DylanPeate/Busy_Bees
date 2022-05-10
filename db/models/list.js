'use strict';
module.exports = (sequelize, DataTypes) => {
  const list = sequelize.define('list', {
    name: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER
  }, {});
  list.associate = function (models) {
    //many to one from user id to users.id, many to one from id to tasks.list_id
    list.belongsTo(models.user, { foreignKey: 'user_id' })
    list.hasMany(models.task, { foreignKey: 'list_id' })
  };
  return list;
};
