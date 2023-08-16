import './ItemListContainer.css';
import {Item} from '../Item/Item';

export const ItemListContainer = ({products}) => {  
  return (
        <div className="item-list"> 
            {products.map ((product)=> 
              <Item id = {product.id} key = {product.id} title={product.title} price={product.price} urlImage={product.img} />
            )}         
        </div>
    );
  }