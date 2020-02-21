import React from 'react';
import './../App.css';
import {NavLink} from "react-router-dom";

const Menu: React.FC = () => {
    return (
        <div className="menu">
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/registration'}>Registration</NavLink>
            <NavLink to={'/recovery'}>Recovery Password</NavLink>
            <NavLink to={'/profile'}>Profile</NavLink>
        </div>
    );
};

export default Menu;
