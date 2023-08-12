import { useEffect, useState } from "react";
import { usarCartContext } from "../state/Cart.context";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { addOrder } from "../lib/orders.request.js";



export const CartPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  
  const { cart, cleanCart, getTotalPrice, removeProduct, getCartQty } = usarCartContext();

  
  const createOrder = async () => {

    const items = cart.map(({id, title, cantidad, price}) => ({id, title, cantidad, price}));
    const order = {
        buyer: {name,phone,email},
        items,
        total:getTotalPrice()

    }
    const orderId = await addOrder(order);
    console.log(orderId);

    await updateManyItems(items);
    cleanCart();
  }

    return (
      <div>
        <div>
          {cart.length ? (
            <>
              <Container>
                <Button variant="warning" onClick={cleanCart}>Vaciar Carrito</Button>
                <Row>
                  <Col md={8}>
                    <ListGroup as="ul">
                      <ListGroup.Item as="li" active>Carrito</ListGroup.Item>
                      {cart.map((item) => (
                        <div key={item.id}>
                        
                                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                  <div className="fw-bold">{item.title}</div>
                                    Cantidad {item.cantidad} <Button variant="danger" size="sm" onClick={()=>removeProduct(item.id)}>Eliminar</Button>
                                </div>
                                Gs. {item.price.toLocaleString('de-DE')}
                                </ListGroup.Item>
                        </div>
                      ))}
                      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          Sub total por {getCartQty()} productos 
                        </div>  
                        <div className="fw-bold"> Gs. {getTotalPrice().toLocaleString('de-DE')} </div> 
                      </ListGroup.Item>
                    </ListGroup> 
                  </Col>
                  <Col md={4}>
                    <Button variant="primary" onClick={createOrder}>Proceder al pago</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control as ="input" placeholder="nombre" onChange={(e) => setName(e.target.value)}/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control as ="input" placeholder="telefono" onChange={(e) => setPhone(e.target.value)}/>
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
              </Container>  
            </>
          ) : (
            <h1>EL carrito esta vacio</h1>
          )}
          
        </div>
        
      </div>
     
    );
}