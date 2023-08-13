import { useState, useEffect } from 'react';
import { getItems } from "../lib/items.request.js";
import {ItemListContainer, Footer} from '../components';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

export const Home = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    getItems()
      .then(res=>{
        setIsLoading(false);
        setProducts(res)
      })
  },[]);

  if (isLoading) {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <div>
      <div className="container">
        <ItemListContainer products={products} />
      </div>
      <div className="container">
        <Footer />
      </div> 
    </div>
    
  )
}