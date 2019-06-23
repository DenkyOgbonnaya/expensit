const express = require('express');
const expenseController = require('../controllers/expenseContrl');

const{addExpense, getAllExpense} = expenseController;
const expenseRouter = express.Router();

expenseRouter.route('/expenses')
.post(addExpense)
.get(getAllExpense)

module.exports = expenseRouter;