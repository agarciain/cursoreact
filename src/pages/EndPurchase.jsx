import { useLocation } from "react-router-dom";

export const EndPurchase = () => {
    const { state } = useLocation();
    const {orderId} = state;
    return (
        <div className="container mb-3">
            <div className="bg-success border-top p-4 text-white mb-3">
                <p className="display-6">La orden {orderId} ha sido creada exitosamente.</p>
            </div>  
        </div>
    );

}