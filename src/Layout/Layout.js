import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/Layout/Header/Header';
import Footer from '@/Layout/Footer/Footer';

import './layout.css'

const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;