import React, {useState, useEffect} from 'react';
import ToggleableExpenseForm from './toggleableExpenseForm';
import ExpenseList from './expenseList';
import {getExpenses, addExpense} from './api';
import {Pagination, PaginationItem, PaginationLink, Alert} from 'reactstrap';
import './expenses.css';
import Spinnar from '../includes/spinner';

const Dashboard = () => {
    const[expenses, setExpenses] = useState([]);
    const[message, setMessage] = useState('');
    const[isVisible, setIsVisible] = useState(false);
    const[isLoading, setIsLoading] = useState(true);
    const[currentPage, setCurrentPage] = useState(1);
    const[pages, setPages] = useState(1);

    useEffect( () => {
        getExpenses(1)
        .then(data => {
            if(data.status === 'success'){
                setExpenses(data.expenses);
                setIsLoading(false);
                setCurrentPage(data.page);
                setPages(data.pages);
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
    const displayPageNums = () => {
        const pageNumbers = [];

        for(let number = 1; number <= pages; number++){
            pageNumbers.push(number);
        }
        if(pages > 1)
        return (
            <Pagination style = {{margin: '10px'}}>
                <PaginationItem disabled = {currentPage === 1 ? true : false }> 
                    <PaginationLink previous onClick = { () => handlePageChange(currentPage -1)} />
                </PaginationItem>
                {pageNumbers.map(number =>
                <PaginationItem key = {number} active = {currentPage === number ? true : false}  >
                    <PaginationLink  style={ currentPage === number ? {background: '#8bc34a'} : {background: '#fff'} }
                    onClick = { ()=> handlePageChange(number)}>   {number}  
                    </PaginationLink>
                </PaginationItem>
                )}
                <PaginationItem disabled = {currentPage === pages ? true : false }> 
                    <PaginationLink next onClick = { () => handlePageChange(currentPage +1)} />
                </PaginationItem>
            </Pagination>
        )
    }
    const handlePageChange = (pageNum) => {
        getExpenses(pageNum)
        .then(data => {
            setExpenses(data.expenses);
            setCurrentPage(data.page);
        })
    }
    return(
        <div className='dashboard' >
            <Alert color='success' isOpen={isVisible} toggle={() => setIsVisible(!isVisible) } > {message} </Alert>
            <ToggleableExpenseForm addNewExpense = {addNewExpense} />
            <hr />
            <h4> My Expenses </h4>
            { isLoading ? <Spinnar /> : <ExpenseList expenses = {expenses} />}
            {displayPageNums()}
            <br />
        </div>
    )
}

export default Dashboard;