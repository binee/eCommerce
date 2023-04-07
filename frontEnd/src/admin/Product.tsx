import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom'

const Product = () => {
  const navigate =  useNavigate();
  return (
    <Container className='mt-3' fluid>
      <h4>Product</h4>
      <Button  style={{float:'right'}}variant="outline-primary" onClick={() => navigate('createproduct')}> Create Product</Button>
   
   <Outlet/>
    </Container>
  )
}

export default Product