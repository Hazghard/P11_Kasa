import React from 'react';
import { Link } from 'react-router-dom';

import logo from '@/Assets/images/logo.svg'

import './header.css'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo Kasa" />
            <nav>
                <ul>
                    <li><Link to='/home'>Acceuil</Link></li>
                    <li><Link to='/apropos'>A Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;