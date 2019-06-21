import React from 'react';
import {Table} from 'reactstrap';
import {calculateVat} from './helper';

const ExpenseList = ({expenses}) => {

    return(
        <div> 
            <Table > 
            <thead> 
                    <tr> 
                        <th> Date </th>
                        <th> Value </th>
                        <th> VAT </th>
                        <th> Reason </th>
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