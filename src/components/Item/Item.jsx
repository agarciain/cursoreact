import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import {Container } from 'react-bootstrap';


export const Item = ({title, price, urlImage, id}) => {
    const navigate = useNavigate();
    
    return ( 
        <Card style={{ width: '16rem', height:'27rem' }}>
            <Card.Body className="d-flex justify-content-center align-items-center"> 
                <Container>
                    <Container className="mb-3" >
                        <Card.Img variant="bottom" src={urlImage} className="mx-auto d-block w-50" />
                    </Container>
                    <Container className="mb-3" >
                         <Card.Title>{title}</Card.Title>
                    </Container> 
                    <Container className="mb-3">
                        <Card.Subtitle className="mb-2">Gs. {price.toLocaleString('de-DE')}</Card.Subtitle>
                    </Container>      
                </Container>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary" onClick={() => navigate(`/item/${id}`)}>Ver Detalles</Button>
            </Card.Footer>
        </Card>       
      );
}