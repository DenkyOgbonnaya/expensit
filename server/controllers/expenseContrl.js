const Expense = require('../models').Expense;

module.exports = {
    async addExpense(req, res) {
      const{value, date, vat, reason} = req.body;

      try{
          const expense = await Expense.create({value, date: new Date(date), vat, reason});
          return res.status(201).send({status: 'success', message: 'Expense added successfully', expense});

      }catch(err){
          console.log(err)
        res.status(400).send(err)
      }
    },
    async getAllExpense(req, res) {
      const pageNum = Number(req.query.page) || 1;
      let offset = 0;
      let page;
      const limit = 10;
      if(pageNum === 0){
        offset = 0;
      }else if (pageNum > 0){
        page = pageNum;
        offset = (page - 1) * limit;
      }else offset = 0;

      try {
        const expenses =  await Expense.findAndCountAll({
          order: [['date','DESC']],
          limit,
          offset
        });
        if(expenses.count < 1)
          return res.status(404).send({message: 'There is no expenses'})
          
        return res.status(200).send({
          status: 'success', 
          expenses: expenses.rows,
          page: pageNum,
          pages: Math.ceil(expenses.count/limit)
        });

      } catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
      }
};