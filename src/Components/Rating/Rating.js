import React from 'react';
import { BsStarFill } from "react-icons/bs";

import './rating.css'

const Rating = (starNumber) => {
    console.log("starNumber", starNumber)
    let generatedStars = [];

    for (let i = 0; i < starNumber.data; i++) {
        generatedStars.push(<li key={i + "yesStar"} className='Star CheckedStar'><BsStarFill /></li>)
    }

    for (let i = 0; i < 5 - starNumber.data; i++) {
        generatedStars.push(<li key={i + "noStar"} className='Star UncheckedStar'><BsStarFill /></li>)
    }

    return (
        <ul className='RatingUl'>
            {generatedStars}
        </ul>
    );
};

export default Rating;