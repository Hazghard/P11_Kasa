import React from 'react';

import './tags.css'

const Tags = ({ id, data }) => {

    return (
        <li key={id} className='LogementTag'>{data}</li>
    );
};

export default Tags;