import { useState } from "react";
import { usarCartContext } from "../state/Cart.context";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { addOrder } from "../lib/orders.request.js";
import {updateManyItems} from "../lib/items.request.js"; 
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {BsFillBagFill} from 'react-icons/bs';
import {Footer} from '../components';
import { useNavigate } from "react-router-dom";



export const Checkout = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [repeatEmail, setRepeatEmail] = useState('');
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const { cart, cleanCart, getTotalPrice, removeProduct, getCartQty } = usarCartContext();

    const createOrder = async () => {
        const items = cart.map(({id, title, cantidad, price}) => ({id, title, cantidad, price}));
        const order = {
            buyer: {name,phone,email},
            items,
            total:getTotalPrice()
        }
        const orderId = await addOrder(order);
    
        await updateManyItems(items);
        cleanCart();
        navigate('/endpurchase', { state: {orderId: orderId} }); 
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            createOrder();  
        } 
        setValidated(true);
    };

    return (
        <div className="container mb-3"> 
            <div className="bg-secondary border-top p-4 text-white mb-3">
                <h1 className="display-6">Checkout</h1>
            </div>  
            <Row>
                <Col md={8}>
                    <Card>
                    <Card.Header>Información de Contacto</Card.Header>
                    <Card.Body>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} id="MyForm">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control required type ="text" placeholder="nombre" onChange={(e) => setName(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                            Favor ingrese el nombre.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                            Favor ingrese una dirección de email válida.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Repetir Email address</Form.Label>
                            <Form.Control required type="email" placeholder="name@example.com" onChange={(e) => setRepeatEmail(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                                Favor ingrese una dirección de email válida.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control 
                            required 
                            type ="tel" 
                            pattern="[0-9]{4}[0-9]{3}[0-9]{3}" 
                            placeholder="09XX123456" 
                            onChange={(e) => setPhone(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                            Favor ingrese un número de teléfono que tenga 10 dígitos
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button type = "submit" variant="primary">Finalizar Compra</Button>
                        </Form>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <ListGroup as="ul">
                    <ListGroup.Item as="li" className="fw-bold">
                    <BsFillBagFill /> Carrito
                    </ListGroup.Item>
                    {cart.map((item) => (
                        <div key={item.id}>
                        
                                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                <div>{item.title}</div>
                                    Cantidad {item.cantidad}
                                </div>
                                Gs. {item.price.toLocaleString('de-DE')}
                                </ListGroup.Item>
                        </div>
                    ))}
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <span className="fw-bold">Total</span> 
                        </div>  
                        <div className="fw-bold"> Gs. {getTotalPrice().toLocaleString('de-DE')} </div> 
                    </ListGroup.Item>
                    </ListGroup> 
                </Col>
            </Row>
            <div className="container">
                <Footer />
            </div> 
        </div>
    );
}