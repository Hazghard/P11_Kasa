import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, FicheLogement, APropos, Error } from '@/Pages/Public/index';

import Layout from "@/Layout/Layout";

const PublicRouter = () => {
    return (
        <Routes>

            <Route element={<Layout />}>

                <Route index element={<Home />} />

                <Route path='/home' element={<Home />} />
                <Route path='/fichelogement/:id' element={<FicheLogement />} />
                <Route path='/apropos' element={<APropos />} />

                <Route path='*' element={<Error />} />

            </Route>

        </Routes>
    );
};

export default PublicRouter;