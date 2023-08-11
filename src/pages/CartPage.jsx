import { useEffect } from "react";
import { usarCartContext } from "../state/Cart.context";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const CartPage = () => {

  const { cart, cleanCart, getTotalPrice, removeProduct, getCartQty } = usarCartContext();
   
  useEffect (() => {
   
  },[cart]);

    return (
      
      
      <div>

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
                      <div className="fw-bold">Nombre {item.title}</div>
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

        <Button variant="primary">Proceder al pago</Button>
        </Col>
      </Row>
    </Container>
      </div>
     
    );
}