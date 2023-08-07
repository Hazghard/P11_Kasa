import React from 'react';
import { BsStarFill } from "react-icons/bs";

import './rating.css'

const Rating = ({ starNumber }) => {
    console.log("starNumber", starNumber);

    return (
        <ul className='RatingUl'>
            {
                [...Array(5)].map((value, index) => {
                    if (index + 1 < starNumber) {
                        return (<li key={index + "yesStar"} className='Star CheckedStar'><BsStarFill /></li>)
                    } else {
                        return (<li key={index + "noStar"} className='Star UncheckedStar'><BsStarFill /></li>)
                    }
                })
            }
        </ul>
    )
};

export default Rating;