import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';

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
            <div>
            <Stack direction="horizontal" gap={1}>
                <div className="p-1"> <Button variant="outline-info" onClick={disminuirContador} disabled={!stock}>-</Button></div>
                <div className="p-1"><span> {contador} </span></div>
                <div className="p-1"><Button variant="outline-info" onClick={incrementarContador} disabled={!stock}>+</Button></div>
                <div className="p-1"> <Button variant="primary" onClick={onAdd} disabled={!stock}> Agregar al carrito </Button></div>
            </Stack>     
            </div> 
        </div>
    );
}