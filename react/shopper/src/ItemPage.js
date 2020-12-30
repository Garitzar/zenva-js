import React from 'react';
import './ItemPage.css';
import Item from "./Item";

function ItemPage({items, onAddToCart}){
    return(
        <ul className="ItemPage-items">
            {items.map(item =>
                <li key={item.id} className="Itempage-item">
                    <Item item={item}>
                        <botton className="Item-addToCart"
                        onClick={() => onAddToCart(item)}>
                            Add To Cart
                        </botton>
                    </Item>
                </li>    
            )}
        </ul>
    );
};

export default ItemPage;