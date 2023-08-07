import React, { useEffect, useState } from 'react';

import ArrowBack from '@/Assets/images/ArrowBack.svg'
import ArrowForward from '@/Assets/images/ArrowForward.svg'

import './carrousel.css'

const Carrousel = ({ pictures }) => {
    console.log("data carousel", pictures);

    const [CurrentImgId, setCurrentImgId] = useState(0);
    const [CurrentImg, setCurrentImg] = useState(pictures[CurrentImgId]);

    function BackPic() {
        console.log("CurrentImgId", CurrentImgId);
        if (CurrentImgId === 0) {
            setCurrentImgId(pictures.length - 1);
        } else {
            setCurrentImgId(CurrentImgId - 1);
        }
    };


    function ForwardPic() {
        console.log("CurrentImgId", CurrentImgId);
        if (CurrentImgId === pictures.length - 1) {
            setCurrentImgId(0);
        } else {
            setCurrentImgId(CurrentImgId + 1);
        }
    };

    useEffect(() => {
        console.log("CurrentImgId useEffect", CurrentImgId);

        setCurrentImg(pictures[CurrentImgId]);
    }, [CurrentImgId, pictures])





    return (
        <>
            <div className='CarouselBtnContainer LeftCarouselContainer' onClick={BackPic}>
                <img src={ArrowBack} className='ArrowBack' alt='BackBtn' />
            </div>
            <div className='MediaContainer'>
                <img src={CurrentImg} className='AppartmentImg' alt='Img' />
            </div>
            <div className='CarouselBtnContainer RightCarouselContainer' onClick={ForwardPic}>
                <img src={ArrowForward} className='ArrowForward' alt='NextBtn' />
            </div>
            <span className='CarrouselPositionIndicator'>{CurrentImgId + 1}/{pictures.length}</span>
        </>
    );
};

export default Carrousel;