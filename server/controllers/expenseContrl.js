const Expense = require('../models').Expense;

module.exports = {
    async addExpense(req, res) {
      const{value, date, vat, reason} = req.body;

      try{
          const expense = await Expense.create({value, date, vat, reason});
          return res.status(201).send({status: 'success', message: 'Expense added successfully', expense});

      }catch(err){
          console.log(err)
        res.status(400).send(err)
      }
    },
    async getAllExpense(req, res) {
        try {
          const expenses =  await Expense.findAll();
          return res.status(200).send({status: 'success', expenses});

        } catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
      }
};