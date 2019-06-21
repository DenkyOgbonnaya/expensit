import React, {useState, useEffect} from 'react';
import ToggleableExpenseForm from './toggleableExpenseForm';
import ExpenseList from './expenseList';

const expenses = [
    {_id: 'yuruf', date: '3rdjune', value:'2000', vat:'20 EUR', reason:'Bought a google plasma'},
    {_id: 'uudjk', date: '7th aug', value:'5000', vat:'50 EUR', reason:'Gave judge for his tution'},
    {_id: 'uudnj', date: '2nd sept', value:'200', vat:'10 EUR', reason:'Paid a call girl'}
]
const Dashboard = () => {

    return(
        <div>
            <ToggleableExpenseForm />
            <hr />
            <h4> My Expenses </h4>
            <ExpenseList expenses = {expenses} />
        </div>
    )
}

export default Dashboard;