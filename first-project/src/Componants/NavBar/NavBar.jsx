import React, { useState } from 'react';
import './NavBar.css'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="Navbar">
            
            <div className='Logo'>
                <img src="./../public/image/logo.svg" alt="logo" />
                <p>Digital marketing agency</p>
            </div>

            <div className='Links'>
                <ul className={`nav-Links ${isOpen && "open" }`}>
                    <li><a href="#" className="Active">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Clients & Partners</a></li>
                    <li><a href="#">X Academy</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Let's Talk</a></li>
                </ul>
            </div>

            <div
                className={ `navbar-toggle ${ isOpen && "open" }`}
                onClick={ () => setIsOpen(!isOpen)} >
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
            </div>

        </section>
    )
}

