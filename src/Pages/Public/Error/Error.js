import React from 'react';
import { NavLink } from 'react-router-dom';

import './error.css'

const Error = () => {
    return (
        <main className='ErrorMain'>
            <p className='Error404'>404</p>
            <span className='Error404Txt'>Oups! La page que vous demandez n'existe pas.</span>
            <NavLink to='/home' className='Error404Navlink'>Retourner sur la page d’accueil</NavLink>
        </main>
    );
};

export default Error;