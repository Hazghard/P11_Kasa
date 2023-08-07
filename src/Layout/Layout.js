import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/Layout/Header/Header';
import Footer from '@/Layout/Footer/Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;