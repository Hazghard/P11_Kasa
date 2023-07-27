import React from 'react';
import Card from "@/Components/Card/Card.js"
import LogementService from "@/_Services/Logement.service.js"

import './gallery.css'

const Gallery = () => {
    return (
        <section className='gallery'>
            {
                LogementService.GetAllLogement().map((logement) =>
                    <Card key={logement.id} id={logement.id} cover={logement.cover} title={logement.title} />
                )
            }
        </section>
    );
};

export default Gallery;