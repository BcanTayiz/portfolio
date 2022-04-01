import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function AllProducts({products,category}) {

  return (
    <div>
        <h2>{category ? category : 'All Products'}</h2>
        <section className='allProducts'>
            {products.map(product => (
                <Card style={{ width: '18rem' }} key={product.id} className="productCard">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                  {product.description}
                  </Card.Text>
                  <Card.Text>
                  <span>Price: {product.price}</span>
                  </Card.Text>
                  <Card.Text>
                  <span>Count: {product.rating.count}</span>
                  </Card.Text>
                  <Card.Text>
                  <span>Rate:{product.rating.rate}</span> 
                  </Card.Text>
            
                  <Button variant="primary">Add to Basket</Button>
                </Card.Body>
              </Card>
            ))  }
        </section>
    </div>
  )
}
