import React from 'react';

import './Card.css';
import { NavLink } from 'react-router-dom';

const Card = ({ id, cover, title }) => {

    return (
        <article className='card' key={id}>
            <NavLink key={id} to={"/logement/" + id + "/#"}>
                <img src={cover} alt={title} id={id} />
                <span>{title}</span>
            </NavLink>
        </article>
    );
};

export default Card;
