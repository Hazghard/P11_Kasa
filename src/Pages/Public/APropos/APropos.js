import React from 'react';
import Hero from "@/Components/Hero/Hero.js"
import DropdownMenu from "@/Components/DropdownMenu/Dropdown.js"

import HeroBanner from "@/Assets/images/aproposHero.png";

import './apropos.css'

const APropos = () => {

    const AproposDropdowns = [
        { Fiabilité: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." },
        { Respect: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
        { Service: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." },
        { Sécurité: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
    ];

    return (
        <main className='AproposMain'>
            <Hero banner={HeroBanner} title="" />
            <section className='DropdownsContainer'>
                {AproposDropdowns.map((elem, index) => (
                    <DropdownMenu key={index} titre={Object.keys(elem)[0]} data={Object.values(elem)[0]} />
                ))}
            </section>
        </main>
    );
};

export default APropos;