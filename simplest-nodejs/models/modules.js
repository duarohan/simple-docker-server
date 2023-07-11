'use strict';
module.exports = (sequelize, DataTypes) => {
  const Modules = sequelize.define('Modules', {
    name: DataTypes.STRING,
    subject : DataTypes.STRING,
    author : DataTypes.STRING,
  }, {});
  return Modules;
};