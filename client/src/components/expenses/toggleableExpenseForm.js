import React, {useState} from 'react';
import {Button, Form, Input, Container, Row, Col} from 'reactstrap';

const ToggleableExpenseForm = () => {
    const[date, setDate] = useState('');
    const[value, setValue] = useState('');
    const[reason, setReason] = useState('');

    const[isOpen, setIsOpen] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
    }
    if(!isOpen)
        return (
            <Button 
                onClick = {() => setIsOpen(true)} > 
                +new expence 
            </Button>
        )
    return(
        <div>
            <h3> New expense </h3>
            <Form onSubmit = {handleSubmit} > 
                <Container>
                    <Row> 
                        <Col sm={5}> 
                            <Input 
                            style= {{border:'0', outline: '0', borderBottom: '1px solid #ccc'}}
                                type='date' 
                                name='date' 
                                value= {date} 
                                onChange = { e => setDate(e.target.value)}
                                required 
                            />
                        </Col>
                        <Col sm= {5} > 
                            <Input 
                            style= {{border:'0', outline: '0', borderBottom: '1px solid #ccc'}}
                                name='value'  
                                value= {value} 
                                onChange = { e => setValue(e.target.value)}
                                placeholder='expense value'
                                required 
                            />
                        </Col>
                        <Col sm={2} > 
                            Calculated VAT: 20%
                        <hr />
                        </Col>
                    </Row>
                    <Row> 
                        <Col sm={12}> 
                            <Input 
                            style= {{border:'0', outline: '0', borderBottom: '1px solid #ccc'}}
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