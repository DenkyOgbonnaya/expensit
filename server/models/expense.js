'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define('Expense', {
    value: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    vat: {
      type: DataTypes.DOUBLE
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