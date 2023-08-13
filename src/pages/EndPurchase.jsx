import { useLocation } from "react-router-dom";

export const EndPurchase = () => {
    const { state } = useLocation();
    const {orderId} = state;
    return (
     <div>
        <h1>Orden creada {orderId}</h1>
      </div>
    );

}