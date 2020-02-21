import React from 'react';
import '../../App.css';
import {NavLink} from "react-router-dom";

const Menu: React.FC = () => {
    return (
        <div className="menu">
            <NavLink activeClassName="activeLink" to={'/login'}>Login</NavLink>
            <NavLink activeClassName="activeLink" to={'/registration'}>Registration</NavLink>
            <NavLink activeClassName="activeLink" to={'/recovery'}>Recovery Password</NavLink>
            <NavLink activeClassName="activeLink" to={'/profile'}>Profile</NavLink>
        </div>
    );
};

export default Menu;
