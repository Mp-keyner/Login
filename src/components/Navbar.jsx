import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './styles/Navbar.css'
import { Link } from 'react-router-dom';


// Aunque el Boeing 747 fue reemplazado 
//                     por el Airbus A380 el mejor siempre 
//                     será el Boeing 747...
//                     por qué fue el primero 🥇

//                     function brain () {
//                         if (worth) {
//                             try {
//                                 for (let tried = 0; tried < worth.length; tried++) {
//                                     heart.push(worth[tried]);
//                                 }
//                             } catch (error) { //Not a worth
//                                 throw
//                             }
//                         }
//                     }

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('session');
        // setIsLogin(false);
        // setToken('');
    };

    return (
        <nav className="navbar">
            <button className="navbarX" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="navbar-header">
                <div className="loga">
                    <span className="logo-text">Un nuevo comienzo 🚀</span>
                </div>
            </div>
            <div className={`navbar-links ${isNavOpen ? 'open' : ''}`}>
                <button className="navbar-toggle" onClick={toggleNav}>

                    <FontAwesomeIcon icon={faTimes} />

                    {/* <FontAwesomeIcon icon={faBars} /> */}

                </button>
                <div className='containerLink'>
                    <a href="/" className="navbar-link firs">Home</a>
                    <a href="/about" className="navbar-link">About</a>
                    <a href="/new" className="navbar-link">New Product</a>
                </div>
                <Link to="/" className='logout'>
                    <button onClick={handleLogout}>Cerrar sesión</button>




                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
