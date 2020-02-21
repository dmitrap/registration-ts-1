import React from 'react';
import './../App.css';
import logo from "../logo.svg";
import Menu from "./Menu";

const Header: React.FC = () => {
    return (
        <div className="header">
            <img src={logo} className="App-logo" alt="logo"/>
            <Menu/>
        </div>
    );
};

export default Header;
