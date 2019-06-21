import React, {useState} from 'react';
import {Button, Form, Input, Container, Row, Col} from 'reactstrap';
import {calculateVat, formatInput} from './helper';
import './expenses.css';

const ToggleableExpenseForm = () => {
    const[date, setDate] = useState('');
    const[value, setValue] = useState('');
    const[reason, setReason] = useState('');
    const[vat, setVat] = useState(0)

    const[isOpen, setIsOpen] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
    }
    if(!isOpen)
        return (
            <Button 
                id='addBtn'
                onClick = {() => setIsOpen(true)} > 
                <img src={require('./add_ic20.png')} alt='add icon'/> Add New 
            </Button>
        )

    const handleValueChange = e => {
        let value = e.target.value;

        //format number 100000 to 100,000
        let formatedValue = formatInput(value);
        setValue(formatedValue);

        //calc and format vat
        let formatedVat = formatInput(calculateVat(value).toString());
        setVat(formatedVat);

    }
    return(
        <div>
            <h3> New expense </h3>
            <Form onSubmit = {handleSubmit} >
                <Container>
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
                 
                </Container>
                 
                    <Button style= {{margin: '40px'}} > Save </Button>
                    
            </Form>
            
            <Button onClick = {() => setIsOpen(false)} > Cancel </Button>
        </div>
    )

}

export default ToggleableExpenseForm;