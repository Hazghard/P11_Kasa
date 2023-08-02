import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import './dropdown.css'


const DropdownMenu = ({ titre, data }) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(data)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="DropdownContainer">
            <button className="DropdownBtn" onClick={toggleDropdown}>
                <span>{titre}</span>
                {!isOpen && <FaChevronDown />}
                {isOpen && <FaChevronUp />}
            </button>
            {isOpen && (
                <ul>
                    {Array.isArray(data) ?
                        data.map((item, index) => (
                            <li key={index}>{item}</li>
                        )) : (
                            <p>{data}</p>
                        )
                    }
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;