import React from "react";
 
const Nav = ({tabs, activeTab, onTabChange}) => {
    const itemClass = (tabName) =>
        `App-nav-item ${ activeTab.name === tabName ? "selected" : ""}`;
        
    return (
    <nav className="App-nav">
        <ul>
            <li className={itemClass(tabs[0].name)}>
                <a href="/#" onClick={() => onTabChange(tabs[0])}>
                    Items
                </a>
            </li>
            <li className={itemClass(tabs[1].name)}>
                <a href="/#" onClick={() => onTabChange(tabs[1])}>
                    Cart
                </a>
            </li>
        </ul>
    </nav>
    );
};
 
export default Nav;