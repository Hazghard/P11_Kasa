import React from 'react';
import appartments from '@/Mock/Cards.json'


import './gallery.css';

const Gallery = () => {

    console.log("appartments", appartments);

    return (
        <>
            {appartments && appartments.map(({ title, cover, id }) => (
                <article className='card' key={id}>
                    <img src={cover} alt={title} id={id} />
                    <span>{title}</span>
                </article>
            ))}
        </>
    );
};

export default Gallery;
