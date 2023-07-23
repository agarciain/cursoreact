import { useState, useEffect } from 'react';
import { getItems } from "../lib/clothesRequest.js";
import {ItemListContainer, Footer} from '../components';

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
  
  return (
    <div>
      <h5>{isLoading ? "Cargando ..." : "Listo"}</h5>
      <ItemListContainer products={products} />
      <Footer />
    </div>
    
  )
}