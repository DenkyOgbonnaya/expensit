'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define('Expense', {
    value: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    vat: {
      type: Sequelize.INTEGER
    },
    reason: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  }, {});
  Expense.associate = function(models) {
    // associations can be defined here
  };
  return Expense;
};