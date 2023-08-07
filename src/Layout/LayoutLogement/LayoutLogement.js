import React from 'react';
import Host from '@/Components/Host/Host';
import Rating from '@/Components/Rating/Rating';
import Tags from '@/Components/Tags/Tags'

import './layoutLogement.css'

const LayoutLogement = ({ logementInfo }) => {
    console.log("logementInfo in LayoutLogement", logementInfo);
    return (
        <>
            <article className='LogementArticleTitleLocationTags'>
                <h1 className='LogementTitle'>{logementInfo.title}</h1>
                <h2 className='LogementLocation'>{logementInfo.location}</h2>
                <ul className='LogementTagsUl'>
                    {Array.isArray(logementInfo.tags) ?
                        logementInfo.tags.map((item, index) => (
                            <Tags key={index} data={item} />
                        )) : (
                            <p>Loading ...</p>
                        )
                    }
                </ul>
            </article>
            <article className='LogementArticleHostRating'>
                <Host data={logementInfo.host} />
                <Rating starNumber={logementInfo.rating} />
            </article>
        </>
    );
};

export default LayoutLogement;