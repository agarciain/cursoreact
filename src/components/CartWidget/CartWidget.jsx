import {BsFillBagFill} from 'react-icons/bs';
import "./CartWidget.css";
import { usarCartContext } from '../../state/Cart.context';
import { useNavigate } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';



export const CartWidget = () => {

    const { getCartQty } = usarCartContext();
    const navigate = useNavigate();
    return  (
        
    <div>
        <LinkContainer to="/cart">
            <Nav.Link>
                <BsFillBagFill className="cart-widget" /> 
                <span className = "cart-widget-qty">({getCartQty()})</span>
            </Nav.Link>
        </LinkContainer> 
    </div>   
    );  
}