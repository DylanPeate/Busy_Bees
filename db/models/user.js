'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    user_name: DataTypes.STRING,
    email: DataTypes.STRING,
    hashed_password: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    //many to one id to list.user_id
    user.hasMany(models.list, {foreignKey: 'user_id'})
  };
  return user;
};
