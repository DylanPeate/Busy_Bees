'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hashed_password: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    //many to one id to list.user_id
    user.hasMany(models.list, {foreignKey: 'user_id'})
  };
  return user;
};
