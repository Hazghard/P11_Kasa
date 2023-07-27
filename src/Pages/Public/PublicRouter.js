import React from 'react';

import { Home, FicheLogement, APropos, Layout } from '@/Pages/Public'

import Error from '@/_utils/Error';

import { Route, Routes } from 'react-router-dom';


const PublicRouter = () => {
    return (
        <Routes>

            <Route element={<Layout />}>

                <Route index element={<Home />} />

                <Route path='/home' element={<Home />} />
                <Route path='/fichelogement' element={<FicheLogement />} />
                <Route path='/apropos' element={<APropos />} />

                <Route path='*' element={<Error />} />

            </Route>

        </Routes>
    );
};

export default PublicRouter;