import React, {useState, useEffect} from 'react';
import ToggleableExpenseForm from './toggleableExpenseForm';
import ExpenseList from './expenseList';
import {getExpenses, addExpense} from './api';
import {Alert} from 'reactstrap';
import './expenses.css';
import Spinnar from '../includes/spinner';

const Dashboard = () => {
    const[expenses, setExpenses] = useState([]);
    const[message, setMessage] = useState('');
    const[isVisible, setIsVisible] = useState(false);
    const[isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        getExpenses()
        .then(data => {
            if(data.status === 'success'){
                setExpenses(data.expenses);
                setIsLoading(false);
            }
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
            { isLoading ? <Spinnar /> : <ExpenseList expenses = {expenses} />}
        </div>
    )
}

export default Dashboard;