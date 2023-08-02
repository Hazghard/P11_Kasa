import React from 'react';

import logo from '@/Assets/images/logo.svg'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="Logo Kasa" />
            <span>&#169; 2020 Kasa. All rights reserved</span>
        </footer>
    );
};

export default Footer;