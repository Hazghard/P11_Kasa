import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LogementService from '@/_Services/Logement.service.js';
import DropdownMenu from '@/Components/DropdownMenu/Dropdown';
import Carrousel from '@/Components/Carrousel/Carrousel';
import LayoutLogement from '@/Layout/LayoutLogement/LayoutLogement';

import './ficheLogement.css'

const FicheLogement = () => {
    const id = useParams().id;
    const [logementInfo, setLogementInfo] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLogement = async () => {
            try {
                const logementData = await LogementService.GetOneLogement(id);
                setLogementInfo(logementData);
            } catch (error) {
                console.log("An error occured while trying to retrive logementInfo", error);
                navigate('/error');
            }
        }
        fetchLogement();
    }, [id, navigate]);

    if (!logementInfo) {
        return null; //Il faudra voir la necessité de placé un loading spinner ici au cas ou.
    }

    return (
        <main className='MainLogement'>
            <>
                <section className='Carousel'>
                    <Carrousel pictures={logementInfo.pictures} />
                </section>
                <section className='LayoutLogement'>
                    <LayoutLogement logementInfo={logementInfo} />
                </section>
                <section className='Dropdown'>
                    <DropdownMenu titre="Description" data={logementInfo.description} />
                    <DropdownMenu titre="Équipements" data={logementInfo.equipments} />
                </section>
            </>
        </main>
    )
};

export default FicheLogement;