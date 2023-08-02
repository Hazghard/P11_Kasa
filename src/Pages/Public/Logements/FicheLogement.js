import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LogementService from '@/_Services/Logement.service.js'
import DropdownMenu from '@/Components/DropdownMenu/Dropdown';
import Carrousel from '@/Components/Carrousel/Carrousel';
import LayoutLogement from '@/Layout/LayoutLogement/LayoutLogement';

import './ficheLogement.css'


const FicheLogement = () => {

    const id = useParams().id;
    const [logementInfo, setLogementInfo] = useState(null);

    useEffect(() => {
        const fetchLogement = async () => {
            try {
                const logementData = await LogementService.GetOneLogement(id);
                setLogementInfo(logementData);
            } catch (error) {
                console.log("An error occured while trying to retrive logementInfo", error);
            }

        }
        fetchLogement();
        // console.log("logementInfo", logementInfo);
    }, [id, logementInfo]);


    return (
        <main className='MainLogement'>
            {logementInfo ? (
                <>
                    <section className='Carousel'>
                        <Carrousel data={logementInfo.pictures} />
                    </section>
                    <section className='LayoutLogement'>
                        <LayoutLogement data={logementInfo} />
                    </section>
                    <section className='Dropdown'>
                        <DropdownMenu titre="Description" data={logementInfo.description} />
                        <DropdownMenu titre="Équipements" data={logementInfo.equipments} />
                    </section>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </main>
    )
};

export default FicheLogement;