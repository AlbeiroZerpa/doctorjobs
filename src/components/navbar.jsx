import React, { useState, useEffect, useRef  } from 'react';
import { Link } from "react-router-dom";

import logoDark from "../assets/images/logo-dark.png"
import logoLight from "../assets/images/logo-light.png"
import logoWhite from "../assets/images/logo-white.png"
import userImg from '../assets/images/client/16.jpg'

import {FiSearch, FiUser, FiHelpCircle, FiSettings, FiLogOut} from '../assets/icons/vander'

export default function Navbar({navclass, navlight, manuclass}){
    let [scrolling, setScrolling] = useState(false);
    let [isToggle, setToggle] = useState(false);
    let [manu , setManu] = useState('');
    let [subManu , setSubManu] = useState('');
    let [isOpen, setIsOpen] = useState(false);
    let [userManu, setUserManu] = useState(false);

    let dropdownRef = useRef(null);
    let userRef = useRef(null)

    useEffect(()=>{
        const handleScroll = () => {
            const isScrolling = window.scrollY > 50;
            setScrolling(isScrolling);
        };

        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
              setIsOpen(false);
            }
          };

        const userOutsideClick = (e) =>{
            if(userRef.current && !userRef.current.contains(e.target)){
                setUserManu(false)
            }
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleOutsideClick);
        window.addEventListener('click', userOutsideClick);
        
        let current = window.location.pathname
        setManu(current)
        setSubManu(current)
        window.scrollTo(0, 0);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleOutsideClick);
            window.removeEventListener('click', userOutsideClick);
          };
    },[])

    const toggleMenu = () =>{
        setToggle(!isToggle)
      }

    return(
        <nav id="topnav" className={`${navclass} ${scrolling ? 'nav-sticky' : ''}`}>
            <div className="container relative">
                {navlight && (
                    <Link className="logo" to="/">
                        <span className="inline-block dark:hidden">
                            <img src={logoDark} className="h-7 l-dark" alt=""/>
                            <img src={logoLight} className="h-7 l-light" alt=""/>
                        </span>
                        <img src={logoWhite} className="hidden dark:inline-block" alt=""/>
                    </Link>
                )}
                {!navlight && (
                    <Link className="logo" to="/">
                        <div>
                            <img src={logoDark} className="h-7 inline-block dark:hidden" alt=""/>
                            <img src={logoWhite} className="h-7 hidden dark:inline-block" alt=""/>
                        </div>
                    </Link>
                )}

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link to="#" className={`navbar-toggle ${isToggle ? 'open' : ''}`} id="isToggle" onClick={() =>toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                <ul className="buy-button list-none mb-0 space-x-1">
                    {navlight === true ? (
                        <li className="dropdown inline-block relative pe-1" ref={dropdownRef}>
                            <button className="dropdown-toggle align-middle inline-flex search-dropdown" type="button" onClick={()=>setIsOpen(!isOpen)}>
                                <FiSearch className="size-5 dark-icon"></FiSearch>
                                <FiSearch className="size-5 white-icon text-white"></FiSearch>
                            </button>
                            {isOpen && (
                                <div className="dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                                    <div className="relative">
                                        <FiSearch className="size-4 absolute top-[9px] end-3"></FiSearch>
                                        <input type="text" className="h-9 px-3 pe-10 w-full border-0 focus:ring-0 outline-none bg-white dark:bg-slate-900" name="s" id="searchItem" placeholder="Search..."/>
                                    </div>
                                </div>
                            )}
                        </li>
                    ) : (

                        <li className="dropdown inline-block relative pe-1" ref={dropdownRef}>
                            <button className="dropdown-toggle align-middle inline-flex search-dropdown" type="button" onClick={()=>setIsOpen(!isOpen)}>
                                <FiSearch className="size-5"></FiSearch>
                            </button>
                            {isOpen && (
                                <div className="dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                                    <div className="relative">
                                        <FiSearch className="size-4 absolute top-[9px] end-3"></FiSearch>
                                        <input type="text" className="h-9 px-3 pe-10 w-full border-0 focus:ring-0 outline-none bg-white dark:bg-slate-900" name="s" id="searchItem" placeholder="Search..."/>
                                    </div>
                                </div>
                            )}
                        </li>
                    )}

            
                    <li className="dropdown inline-block relative ps-0.5" ref={userRef}>
                        <button className="dropdown-toggle items-center" type="button" onClick={()=>setUserManu(!userManu)}>
                            <span className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"><img src={userImg} className="rounded-md" alt=""/></span>
                        </button>
                        {userManu && (
                            <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ">
                                <ul className="py-2 text-start">
                                    <li>
                                        <Link to="/user-profile" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-500 dark:hover:text-white"><FiUser className="size-4 me-2"></FiUser>Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/helpcenter" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-500 dark:hover:text-white"><FiHelpCircle className="size-4 me-2"></FiHelpCircle>Helpcenter</Link>
                                    </li>
                                    <li>
                                        <Link to="/user-setting" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-500 dark:hover:text-white"><FiSettings className="size-4 me-2"></FiSettings>Settings</Link>
                                    </li>
                                    <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                    <li>
                                        <Link to="/login" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-500 dark:hover:text-white"><FiLogOut className="size-4 me-2"></FiLogOut>Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>

                <div id="navigation" style={{display: isToggle === true ? 'block' : 'none'}}>
                    <ul className={`navigation-menu ${manuclass}`}>

                        <li className={`${manu === '/index-item' ? 'active' : '' }`}><Link to="/" className="sub-menu-item">Inicio</Link></li>
                        <li className={`${manu === '/aboutus' ? 'active' : '' }`}><Link to="/aboutus" className="sub-menu-item">Nosotros</Link></li>
                        <li className={`${manu === '/grid-left-sidebar' ? 'active' : '' }`}><Link to="/grid-left-sidebar" className="sub-menu-item">Alquiler de Espacios Fisicos</Link></li>
                        <li className={`${manu === '/planes' ? 'active' : '' }`}><Link to="/planes" className="sub-menu-item">Planes</Link></li>
                        <li className={`${manu === '/contact' ? 'active' : '' }`}><Link to="/contact" className="sub-menu-item">Contáctanos</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}