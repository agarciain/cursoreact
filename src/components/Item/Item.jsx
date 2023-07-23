import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


export const Item = ({title, price, urlImage, category, id}) => {
    const navigate = useNavigate();
    
    return ( 
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={urlImage} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Gs. {price.toLocaleString('de-DE')}</Card.Subtitle>
                <Button variant="primary" onClick={() => navigate(`/item/${id}`)}>Ver Detalles</Button>
            </Card.Body>
        </Card>
             
      );
}