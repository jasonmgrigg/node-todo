'use strict';
module.exports = function(sequelize, DataTypes) {
  var NewTodoList = sequelize.define('NewTodoList', {
    item: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return NewTodoList;
};