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
      <div className="container">
        <h5>{isLoading ? "Cargando ..." : "Listo"}</h5>
        <ItemListContainer products={products} />
      </div>
      <div className="container">
        <Footer />
      </div> 
    </div>
    
  )
}