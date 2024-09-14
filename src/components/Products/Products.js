import React, { useState } from 'react'
import phones from './Products.data'
import {Card, Button} from 'react-bootstrap'

const Products = () => {
    const[items, setItem] = useState(phones)

    const decQty = (id) =>{
        const newItem = items.map((item) =>
            item.id === id && item.Quantity>1 ? {...item, Quantity: item.Quantity-1 }: item
    )
    setItem(newItem)
    }
    const incQty = (id) =>{
        const newItem = items.map((item) =>
            item.id === id ? {...item, Quantity: item.Quantity+1 }: item
    )
    setItem(newItem)
    }
  return (
    <div>
        <h1 className='bg-info text-white fw-bolder p-2'>Products At Our Shop</h1>
        {items.map((item) => (
        <div className="d-inline-flex m-1" key={item.id}>
        <Card className='shadow-lg p-3 m-1 bg-body-tertiary rounded' 
        style={{ width: '15rem' }}>
        <Card.Img  style={{ height: '12rem' }}
        variant="top" 
        src={require(`./Assets/${item.image}.png`)}/>
        <Card.Body>
          <Card.Title className='text-primary'>{item.name}</Card.Title>
          <Card.Text>{item.brand}
          </Card.Text>
          <h6>Price: ${item.price}</h6>
          <div>
              <p>
                  Quantity: 
                  <Button onClick={() => decQty(item.id)} className='m-1'>-</Button>{item.Quantity}
                  <Button onClick={() => incQty(item.id)} className='m-1'>+</Button>
              </p>
          </div>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
      </div>
        )
       )}
    </div>
  )
}

export default Products