import { useState, useEffect } from 'react';
import {ItemCount,Footer} from '../components';
import { getItem } from "../lib/clothesRequest.js";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';


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
    <div className='container'>        
        <Container>
            <Row>
                <Col><Image src={clothe.img}/></Col>
                <Col> 
                    <Stack gap={1}>
                        <div className="p-1">
                            <h1>{clothe.title}</h1>
                        </div>
                        <div className="p-1">
                            <p>{clothe.description}</p>
                        </div>
                        <div className="p-1">
                            <h3>Gs. {clothe.price.toLocaleString('de-DE')}</h3>
                        </div>
                        <div className="p-1">
                            <span>¡Solo quedan {clothe.stock}!</span>
                        </div>
                        <div className="p-1">
                            <DropdownButton id="dropdown-basic-button" title="Elige el tamaño">
                                <Dropdown.Item href="#/action-1">XS</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">S</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">M</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">XL</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div className="p-1">
                            <ItemCount stock = {clothe.stock}/> 
                        </div>
                    </Stack>   
                </Col>
            </Row>
        </Container>
        <Footer />   
    </div>
 );
}