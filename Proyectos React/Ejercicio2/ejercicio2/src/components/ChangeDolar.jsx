import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap'

const ChangeDolar = (savePrice) => {
    const [newPrice, setNewPrice] = useState('')

    const handleChange = (e) => {
        const newDollar = e.target.value;
        setNewPrice(newDollar);

    }
    const submitChangeDollar = (e) => {
        e.preventDefaul();
        const priceData = {
            price: newPrice
        }
    savePrice(priceData);
    }

  return (
    <div>
        <Form onSubmit={submitChangeDollar}>
            <Form.Label>Change Dollar</Form.Label>
            <Form.Control
            placeholder='New price'
            onChange={handleChange}></Form.Control>
            <Button variant='primary' type='submit'>
                Change price
            </Button>
        </Form>


    </div>
  )
}

export default ChangeDolar