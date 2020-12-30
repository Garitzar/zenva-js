import React from 'react';
import "./Nav.css";

const Nav = ({ activeTab, onTabChange }) => (
  <nav className="App-nav">
    <ul>
      <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
        <button className="Nav-item" onClick={() => onTabChange('items')}>Items</button>
      </li>
      <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
        <button className="Nav-item" onClick={() => onTabChange('cart')}>Cart</button>
      </li>
    </ul>
  </nav>
);

export default Nav;
