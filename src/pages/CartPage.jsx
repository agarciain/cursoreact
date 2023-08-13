import { usarCartContext } from "../state/Cart.context";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import {Footer} from '../components';


export const CartPage = () => {
  const { cart, cleanCart, getTotalPrice, removeProduct, getCartQty } = usarCartContext();

  return (
    <div className="container mb-3">
      <div className="bg-secondary border-top p-4 text-white mb-3">
          <h1 className="display-6">Carrito</h1>
      </div>
      <div>
        {cart.length ? (
          <>
            <div className="container mb-3">
              <Button variant="warning" onClick={cleanCart}>Vaciar Carrito</Button>
            </div>
            <div className="container mb-3">
              <Row>
                <Col md={8}>
                  <Card>
                    <Card.Body>
                      <Table responsive hover>  
                        <thead>
                          <tr>
                            <th>Imagen</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                              <tbody>
                              {cart.map((item) => (
                                  <tr key={item.id}> 
                                    <td> <img
                                      src={item.img}
                                      width="80"
                                      alt="..."
                                    /></td>
                                    <td>{item.title}</td>
                                    <td>{item.cantidad}</td>
                                    <td>Gs. {item.price.toLocaleString('de-DE')}</td>
                                    <td>
                                      <Button variant="danger" onClick={()=>removeProduct(item.id)}>Eliminar</Button>{' '}
                                    </td>
                                  </tr>
                              ))}
                              </tbody>
                      </Table>
                      <Link to="/checkout" className="btn btn-primary float-end">
                        Checkout 
                      </Link>
                      <Link to="/" className="btn btn-secondary">
                        Continuar Comprando
                      </Link>
                    </Card.Body>
                  </Card>
                  
                </Col>
                <Col md={4}>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li" active variant="primary">Total</ListGroup.Item>
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        Total por {getCartQty()} productos 
                      </div>  
                      <div className="fw-bold"> Gs. {getTotalPrice().toLocaleString('de-DE')} </div> 
                    </ListGroup.Item>
                  </ListGroup> 
                </Col>
              </Row>
            </div>     
          </>
        ) : (
          <h1>EL carrito esta vacio</h1>
        )}
        
      </div> 
      <div className="container">
        <Footer />
      </div>  
    </div> 
  );
}