import React from 'react';

import Hero from "@/Components/Hero/Hero.js"
import Gallery from '@/Components/Gallery/Gallery.js';

import HeroBanner from "@/Assets/images/Home/Background.png";

import './home.css'

const Home = () => {
    return (
        <main className='MainHome'>
            <Hero banner={HeroBanner} title="Chez vous, partout et ailleurs" />
            <Gallery />
        </main>
    );
};

export default Home;