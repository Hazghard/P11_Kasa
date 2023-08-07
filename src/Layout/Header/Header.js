import React from 'react';
import { NavLink } from 'react-router-dom';


import logo from '@/Assets/images/logo.svg'

import './header.css'

const Header = () => {

    let activePageLink = {
        textDecoration: "underline",
    };

    return (
        <header>
            <img src={logo} alt="Logo Kasa" />
            <nav>
                <ul>
                    <li><NavLink to='/home' style={({ isActive }) => isActive ? activePageLink : undefined}>Acceuil</NavLink></li>
                    <li><NavLink to='/apropos' style={({ isActive }) => isActive ? activePageLink : undefined}>A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;