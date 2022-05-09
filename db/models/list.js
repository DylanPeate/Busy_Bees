'use strict';
module.exports = (sequelize, DataTypes) => {
  const list = sequelize.define('list', {
    name: DataTypes.STRING,
    date_created: DataTypes.DATE,
    completed: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER
  }, {});
  list.associate = function(models) {
    // associations can be defined here
  };
  return list;
};