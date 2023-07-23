import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export const ItemCount = ({stock,initial}) => {
    const [contador, setContador] = useState(initial?initial:0);
    const incrementarContador = () => {
        console.log(stock);
        if(contador<stock) {
            setContador(contador +1);
        }      
    }
  
    const disminuirContador = () => {
      if(contador>0)
        setContador(contador -1);
    }

    const onAdd = () => {
            alert("Se agrega al carrito " + contador + " item.");
    }
    return (
        <div>
            <Button variant="outline-info" onClick={disminuirContador} disabled={!stock}>-</Button>
            <span>{contador}</span>
            <Button variant="outline-info" onClick={incrementarContador} disabled={!stock}>+</Button>
            <Button variant="primary" onClick={onAdd} disabled={!stock}>Agregar al carrito</Button>
        </div>
    );
}