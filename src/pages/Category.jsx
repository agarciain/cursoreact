import { useState, useEffect } from 'react';
import { getItems } from "../lib/clothesRequest.js";
import {ItemListContainer, Footer} from '../components';
import { useParams } from "react-router-dom";

export const Category = () => {
  const {id} = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    getItems(id)
      .then(res=>{
        setIsLoading(false);
        setProducts(res)
      })
  },[id]);
  
  return (
    <div>
      <h5>{isLoading ? "Cargando ..." : "Listo"}</h5>
      <ItemListContainer products={products} />
      <Footer />
    </div>
    
  )
}