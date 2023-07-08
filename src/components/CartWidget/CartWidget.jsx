import {BsFillBagFill} from 'react-icons/bs';
import "./CartWidget.css";


export const CartWidget = () => {
    return  (
    <div>
        <BsFillBagFill className="cart-widget" /> <span className = "cart-widget-qty">(4)</span>
    </div>   
    );  
}