import React from 'react';

import './hero.css';

const Hero = ({ banner, title }) => {
    return (
        <>
            <section className='banner'>
                <div className='banner_img--container'>
                    <img src={banner} alt="Banner background" />
                    <div className='banner_img--Background'></div>
                </div>
                <h1>{title}</h1>
            </section>
        </>
    );
};

export default Hero;