import React from 'react';
import Header from '@/Components/Public/Header';
import { Outlet } from 'react-router-dom';

import './layout.css'

const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;