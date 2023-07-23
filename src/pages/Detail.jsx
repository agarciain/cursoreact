import { useState, useEffect } from 'react';
import {ItemCount,Footer} from '../components';
import { getItem } from "../lib/clothesRequest.js";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const Detail = () => {
    const {id} = useParams();
    const [clothe, setClothe] = useState({});
    useEffect(()=>{
        getItem(+id).then((res) =>{
            setClothe(res);
        });

    },[]);
    
    if(!Object.keys(clothe).length) return
    return(
    <>        
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={clothe.img} />
        <Card.Body>
            <Card.Title>{clothe.title}</Card.Title>
            <Card.Subtitle>Gs. {clothe.price.toLocaleString('de-DE')}</Card.Subtitle>
            <Card.Text>
                {clothe.description}
            </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
            <Card.Subtitle>Quedan {clothe.stock}</Card.Subtitle>
        </Card.Footer>
        <Card.Footer className="text-muted">
            <DropdownButton id="dropdown-basic-button" title="Elige el tamaño">
                <Dropdown.Item href="#/action-1">XS</Dropdown.Item>
                <Dropdown.Item href="#/action-2">S</Dropdown.Item>
                <Dropdown.Item href="#/action-3">M</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                <Dropdown.Item href="#/action-3">XL</Dropdown.Item>
            </DropdownButton>
        </Card.Footer>
        <Card.Footer className="text-muted">
            <ItemCount stock = {clothe.stock}/>
        </Card.Footer>
        </Card>
        <Footer />   
    </>
 );
}