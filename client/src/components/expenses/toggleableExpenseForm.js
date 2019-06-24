import React, {useState} from 'react';
import {Button, Form, Input, Container, Row, Col} from 'reactstrap';
import {calculateVat, formatInput, formatCurrency, cleanInput} from './helper';
import './expenses.css';

const ToggleableExpenseForm = ({addNewExpense}) => {
    const[date, setDate] = useState('');
    const[value, setValue] = useState('');
    const[reason, setReason] = useState('');
    const[vat, setVat] = useState(0)

    const[isOpen, setIsOpen] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        const expense = {
            date,
            value: formatCurrency(cleanInput(value)),
            vat: formatCurrency(cleanInput(vat)),
            reason
        }
        addNewExpense(expense);
    }
    const handleValueChange = e => {
        let value = e.target.value;
        setValue(value);

        //calc and format vat
        let cleanedValue = cleanInput(value)
        setVat(formatInput(calculateVat(cleanedValue)));

    }
    if(!isOpen)
        return (
            <Button 
                size='sm'
                id='newBtn'
                onClick = {() => setIsOpen(true)} > 
                <img src='/icons/add_ic20.png' alt='add icon'/> Add New 
            </Button>
        )
    return(
        <div>
            <h4> New expense </h4>
            <Form onSubmit = {handleSubmit} >
                
                    <Row> 
                        <Col sm={5}> 
                            <Input 
                                type='date' 
                                name='date' 
                                value= {date} 
                                onChange = {e => setDate(e.target.value)}
                                required 
                            />
                        </Col>
                        <Col sm= {5} > 
                            <Input 
                                name='value'
                                value={value}
                                onChange = {handleValueChange}  
                                placeholder='expense value'
                                required 
                            />
                        </Col>
                        <Col sm={2} > 
                            VAT: {vat} EUR
                        <hr />
                        </Col>
                    </Row>
                    <Row> 
                        <Col sm={12}> 
                            <Input 
                                type='textarea' 
                                name='reason'  
                                value= {reason} 
                                onChange = { e => setReason(e.target.value)}
                                placeholder='expense reason'
                            required />
                        </Col>
                    </Row>
                 
                 
                    <Button color='success' id='addBtn' > Add </Button>
                    
            </Form>
            
            <Button color='warning' onClick = {() => setIsOpen(false)} > Cancel </Button>
        </div>
    )

}

export default ToggleableExpenseForm;