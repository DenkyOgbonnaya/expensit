import React from 'react';
import {Table} from 'reactstrap';
import {calculateVat} from './helper';
import './expenses.css';

const ExpenseList = ({expenses}) => {

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
                            <tr key={expense._id} > 
                                <td> {expense.date} </td>
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