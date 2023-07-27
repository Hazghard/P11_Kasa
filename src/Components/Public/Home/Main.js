import React from 'react';
import Gallery from './Gallery';

import './main.css';

const Main = () => {
    return (
        <main>
            <section className='banner'>
                <div className='banner_img--container'>
                    <img src="images/Background.png" alt="Banner background" />
                    <div className='banner_img--Background'></div>
                </div>
                <h1>Chez vous, partout et ailleurs</h1>
            </section>
            <section className='gallery'>
                <Gallery />
            </section>
        </main>
    );
};

export default Main;