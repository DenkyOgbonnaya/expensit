import React from 'react';
import {Table} from 'reactstrap';
import {calculateVat} from './helper';
import './expenses.css';

const ExpenseList = ({expenses}) => {
    if(!expenses || expenses.length === 0)
        return <div>You have no expenses, add new to start tracking! </div>
    return(
        <div className ='expenseList'> 
            <Table responsive borderless > 
            <thead> 
                    <tr> 
                        <th className='thead'> Date </th>
                        <th className='thead'> Value </th>
                        <th className='thead'> VAT </th>
                        <th className='thead'> Reason </th>
                    </tr>
                </thead>
                <tbody> 
                    {
                        expenses.map(expense => 
                            <tr key={expense.id} > 
                                <td> {new Date(expense.date).toDateString()} </td>
                                <td> {expense.value} </td>
                                <td> {calculateVat(expense.value)} </td>
                                <td> {expense.reason} </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default ExpenseList