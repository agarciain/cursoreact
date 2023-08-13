import { useState, useEffect } from 'react';
import { getItems } from "../lib/items.request.js";
import {ItemListContainer, Footer} from '../components';
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

export const Category = () => {
  const {id} = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    setProducts([]);
    setIsLoading(true);
    getItems(id)
      .then(res=>{
        setIsLoading(false);
        setProducts(res)
      })
  },[id]);
  
  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className='container'>
      <ItemListContainer products={products} />
      <div className='container'>
        <Footer />
      </div> 
    </div>
    
  )
}