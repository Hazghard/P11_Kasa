import React, { useEffect, useState } from 'react';

import './host.css'

const Host = (info) => {

    const [hotsNames, setHostName] = useState(null);
    useEffect(() => {
        const data = info.data.name.split(" ");
        const names = [];

        data.forEach((element, index) => {
            names.push(<li key={index + element}>{element}</li>);
        });
        setHostName(names);
    }, [info.data.name]);


    return (
        <div className='HostContainer'>
            <span className='HostName'><ul>{hotsNames}</ul></span>
            <img className='HostPic' src={info.data.picture} alt={info.data.name} />
        </div>
    );
};

export default Host;