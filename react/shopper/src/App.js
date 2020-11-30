import React, { useState } from "react";
import Nav from "./Nav";
import "./App.css";
 
function Tab(name, content){
    this.name = name;
    this.content = content;
};

const Items = new Tab('items', <span>the items</span>);
const Cart = new Tab('cart', <span>the cart</span>);

const Tabs = [Items, Cart];

const App = () => {
    const [activeTab, setActiveTab] = useState(Tabs[0]);
    return (
        <div className="App">
        <Nav
            tabs = {Tabs}
            activeTab = {activeTab}
            onTabChange = {setActiveTab}
        />
        <main className="app-content">
            <span>
                <Content tab={activeTab} />
            </span>
        </main>
        </div>
    );
};

const Content = ({tab}) => {
    return tab.content;
};
 
export default App;