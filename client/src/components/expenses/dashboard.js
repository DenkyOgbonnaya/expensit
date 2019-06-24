import React, {useState, useEffect} from 'react';
import ToggleableExpenseForm from './toggleableExpenseForm';
import ExpenseList from './expenseList';
import {getExpenses, addExpense} from './api';
import {Alert} from 'reactstrap';
import './expenses.css';

const Dashboard = () => {
    const[expenses, setExpenses] = useState([]);
    const[message, setMessage] = useState('');
    const[isVisible, setIsVisible] = useState(false)

    useEffect( () => {
        getExpenses()
        .then(data => {
            if(data.status === 'success')
                setExpenses(data.expenses);
                setIsVisible(true);
        })
    }, [])
    const addNewExpense = expense => {
        addExpense(expense)
        .then(data => {
            if(data.status === 'success'){
                setExpenses(expenses.concat(data.expense));
                setMessage(data.message);
                setIsVisible(true);
            }else
            alert(data.message)
        })
    }
    return(
        <div className='dashboard' >
        <Alert color='success' isOpen={isVisible} toggle={() => setIsVisible(!isVisible) } > {message} </Alert>
            <ToggleableExpenseForm addNewExpense = {addNewExpense} />
            <hr />
            <h4> My Expenses </h4>
            <ExpenseList expenses = {expenses} />
        </div>
    )
}

export default Dashboard;