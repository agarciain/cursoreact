import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const usarCartContext = () => useContext(CartContext); // este es un customHook

export const CartProvider = ({children}) => {
   
   const [cart,setCart] = useState([]);
   
   const itemInCart = (id) => cart.find((product) => product.id === id);
    
    //agregar
    const addProduct =(item,cantidad) => {
        const element = itemInCart(item.id);
        if(!element) return setCart([...cart, {...item, cantidad}]); 
        
        const newCart = cart.map((product)=>
            product.id === item.id ? {...product, cantidad: product.cantidad + cantidad}:product
        );
        setCart(newCart);  
    };
    
    //obtener
    const getCartQty = () => cart.reduce((acc,item)=> acc + item.cantidad,0)
    //para limpiar el carrito
    const cleanCart = () => setCart([]);

    //Eliminar un item del carrito por id
    const removeProduct = (id) => {
        const newCart = cart.filter((product)=> product.id !== id);
        setCart(newCart);
    }

    //obtener total 
    const getTotalPrice = () => cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);

    const value = {cart, addProduct, getCartQty, cleanCart, removeProduct,getTotalPrice,itemInCart};
   
    return (
        <CartContext.Provider value = {value} displayName="CartContext">{children}</CartContext.Provider>
    );

  

}