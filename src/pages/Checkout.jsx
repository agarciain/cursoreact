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
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const { cart, cleanCart, getTotalPrice } = usarCartContext();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        repeatEmail: ''
    });
    
    const [fieldValidation, setFieldValidation] = useState({
    name: false,
    phone: false,
    email: false,
    repeatEmail: false
    }); 

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    const isValid = value.trim() !== '';
    setFormData(() => ({
        ...formData,
        [name]: value,
    }));

    setFieldValidation((prevValidation) => ({
        ...prevValidation,
        [name]: isValid,
    }));
    };
    
    const allFieldsValid = Object.values(fieldValidation).every((isValid) => isValid);
    

    const createOrder = async () => {
        const items = cart.map(({id, title, cantidad, price}) => ({id, title, cantidad, price}));
        const { name, phone, email } = formData;
        const order = {
            buyer: {name,phone,email},
            items,
            total:getTotalPrice()
        }
        const orderId = await addOrder(order);
    
        await updateManyItems(items);
        cleanCart();
        handleReset();
        navigate('/endpurchase', { state: {orderId: orderId} }); 
    };
    
    //para validar que los emails sean iguales
    const isEqual = (email, repeatEmail) => {
        return email.toLowerCase() === repeatEmail.toLowerCase();
    }
     
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const form = e.currentTarget;
        if (form.checkValidity()) {  
            createOrder(); 
        } 
        setValidated(true);
    };

    const handleReset = () => {
        setFormData({
            name: '',
        phone: '',
        email: '',
        repeatEmail: ''
        });
        setValidated(false);
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
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control required type ="text" placeholder="Ingrese nombre y apellido" name="name" onChange={handleInputChange} value={formData.name}/>
                            <Form.Control.Feedback type="invalid">
                            Favor ingrese el nombre.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" placeholder="name@example.com" name="email" onChange={handleInputChange} value={formData.email}/>
                            <Form.Control.Feedback type="invalid">
                            Favor ingrese una dirección de email válida.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="repeatEmail">
                            <Form.Label>Repetir Email</Form.Label>
                            <Form.Control required type="email" placeholder="name@example.com" name="repeatEmail" onChange={handleInputChange} value={formData.repeatEmail}/>
                            <Form.Control.Feedback type="invalid">Favor ingrese una dirección de email válida</Form.Control.Feedback>   
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control 
                            required 
                            type ="tel" 
                            pattern="[0-9]{4}[0-9]{3}[0-9]{3}" 
                            placeholder="09XX123456" 
                            name="phone"
                            onChange={handleInputChange}
                            value={formData.phone}
                            />
                            <Form.Control.Feedback type="invalid">
                            Favor ingrese un número de teléfono que tenga 10 dígitos en formato 09XX123456
                            </Form.Control.Feedback>
                        </Form.Group>
                            <Button type = "submit" variant="primary" disabled={!allFieldsValid} >Finalizar Compra</Button>
                            <Button type = "button" variant="secondary" 
                                className="btn btn-secondary float-end" 
                                disabled={!allFieldsValid} onClick={handleReset}>Limpiar</Button>
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