'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define('Expense', {
    value: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    vat: {
      type: DataTypes.STRING
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Expense.associate = function(models) {
    // associations can be defined here
  };
  return Expense;
};