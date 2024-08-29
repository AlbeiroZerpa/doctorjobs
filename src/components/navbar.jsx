import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";
import logoWhite from "../assets/images/logo-white.png";
import userImg from '../assets/images/client/16.jpg';

import { FiUser, FiLogOut } from '../assets/icons/vander';

import useUserStore from '../store/userStore';

export default function Navbar({ navclass, navlight, manuclass }) {
    const [scrolling, setScrolling] = useState(false);
    const [isToggle, setToggle] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [userManu, setUserManu] = useState(false);

    const dropdownRef = useRef(null);
    const userRef = useRef(null);
    const location = useLocation();
    const { user, logout } = useUserStore();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolling = window.scrollY > 50;
            setScrolling(isScrolling);
        };

        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const userOutsideClick = (e) => {
            if (userRef.current && !userRef.current.contains(e.target)) {
                setUserManu(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleOutsideClick);
        window.addEventListener('click', userOutsideClick);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleOutsideClick);
            window.removeEventListener('click', userOutsideClick);
        };
    }, []);

    const toggleMenu = () => {
        setToggle(!isToggle);
    };

    const handleLogout = (e) => {
        e.preventDefault()
        logout()
        navigate("/")
    }

    return (
        <nav id="topnav" className={`${navclass} ${scrolling ? 'nav-sticky' : ''}`}>
            <div className="container relative">
                {navlight ? (
                    <Link className="logo" to="/">
                        <span className="inline-block dark:hidden">
                            <img src={logoDark} className="h-7 l-dark" alt="" />
                            <img src={logoLight} className="h-7 l-light" alt="" />
                        </span>
                        <img src={logoWhite} className="hidden dark:inline-block" alt="" />
                    </Link>
                ) : (
                    <Link className="logo" to="/">
                        <div>
                            <img src={logoDark} className="h-7 inline-block dark:hidden" alt="" />
                            <img src={logoWhite} className="h-7 hidden dark:inline-block" alt="" />
                        </div>
                    </Link>
                )}

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link to="#" className={`navbar-toggle ${isToggle ? 'open' : ''}`} id="isToggle" onClick={toggleMenu}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                {user && (<ul className="buy-button list-none">
                    <li className="dropdown inline-block relative pe-1">
                        <p>
                            {user.puntos} Pts
                        </p>
                    </li>
                    <li className="dropdown inline-block relative ps-0.5" ref={userRef}>
                        <button className="dropdown-toggle items-center" type="button" onClick={() => setUserManu(!userManu)}>
                            <span className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white">
                                <img src={userImg} className="rounded-md" alt="" />
                            </span>
                        </button>
                        {userManu && (
                            <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ">
                                <ul className="py-2 text-start">
                                    <li>
                                        <Link to="/configuracion" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-500 dark:hover:text-white">
                                            <FiUser className="size-4 me-2"></FiUser>Perfil
                                        </Link>
                                    </li>
                                    <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                    <li>
                                        <Link to="#" onClick={handleLogout} className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-500 dark:hover:text-white">
                                            <FiLogOut className="size-4 me-2"></FiLogOut>Salir
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>)}

                <div id="navigation" style={{ display: isToggle ? 'block' : 'none' }}>
                    <ul className={`navigation-menu ${manuclass}`}>
                        <li className={`${location.pathname === '/' ? 'active' : ''}`}>
                            <Link to="/" className="sub-menu-item">Inicio</Link>
                        </li>
                        <li className={`${location.pathname === '/nosotros' ? 'active' : ''}`}>
                            <Link to="/nosotros" className="sub-menu-item">Nosotros</Link>
                        </li>
                        <li className={`${location.pathname === '/alquileres' ? 'active' : ''}`}>
                            <Link to="/alquileres" className="sub-menu-item">Alquiler de Espacios Fisicos</Link>
                        </li>
                        <li className={`${location.pathname === '/planes' ? 'active' : ''}`}>
                            <Link to="/planes" className="sub-menu-item">Planes</Link>
                        </li>
                        <li className={`${location.pathname === '/contactanos' ? 'active' : ''}`}>
                            <Link to="/contactanos" className="sub-menu-item">Contáctanos</Link>
                        </li>
                        {!user && (<li className={`${location.pathname === '/login' ? 'active' : ''}`}>
                            <Link to="/login" className="sub-menu-item">Iniciar / Resgistrar</Link>
                        </li>)}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
