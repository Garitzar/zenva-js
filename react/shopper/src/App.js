import React, { useState } from "react";
import Nav from "./Nav";
import "./App.css";
import ItemPage from './ItemPage';
import {items} from './static-data';
import CartPage from "./CartPage";

const summarizeCart = (cart) => {
    const groupedItems = cart.reduce((summary, item) => {
        summary[item.id] = summary[item.id] || {
            ...item,
            count : 0
        };

        summary[item.id].count++;
        return summary;
    }, {}); // {} is the initial value of summary

    return Object.values(groupedItems);
};

const App = () => {
    const [activeTab, setActiveTab] = useState('items');
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item]);
    };

    const removeItem = (item) => {
        let index = cart.findIndex(i => i.id === item.id);
        if(index >= 0){
            setCart(cart => {
                const copy = [...cart];
                copy.splice(index, 1);
                return copy;
            });
        }
    };

    return (
        <div className="App">
        <Nav
            activeTab = {activeTab}
            onTabChange = {setActiveTab}
        />
        <main className="app-content">
            <span>
                <Content 
                    tab={activeTab} 
                    onAddToCart={addToCart}
                    cart={summarizeCart(cart)}
                    onRemoveItem={removeItem}
                />
            </span>
        </main>
        </div>
    );
};

const Content = ({ tab, onAddToCart, cart, onRemoveItem}) => {
    switch (tab) {
      default:
      case 'items':
        return (
          <ItemPage
            items={items}
            onAddToCart={onAddToCart}
          />
        );
      case 'cart':
        return <CartPage 
        items={cart}
        onAddOne={onAddToCart}
        onRemoveOne={onRemoveItem} />
    }
};

export default App;