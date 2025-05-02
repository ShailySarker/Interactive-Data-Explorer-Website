import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { ImSearch } from 'react-icons/im';
import { NavLink } from 'react-router';

const Header = () => {
    const [click, setClick] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        setClick(!click);
    };
    const windowClose = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        setClick(!click);
    };
    return (
        <nav className="bg-white shadow-md sticky top-0">
            <div className="xl:px-20 lg:px-14 md:px-6 px-4 xl:py-7 lg:py-6 md:py-5 py-4 flex justify-between items-center">
                <h1 className="xl:text-2xl/none lg:text-xl/none text-base/normal font-bold flex items-center md:gap-2 gap-1 text-[#A21D3C]"><ImSearch className='lg:text-2xl md:text-xl text-sm' />Interactive Data Explorer</h1>
                <div className='md:block hidden md:flex flex-row xl:gap-8 md:gap-6 gap-2 xl:text-lg md:text-base text-sm font-medium'>
                    <NavLink to="/home" className={({ isActive }) => isActive ? " text-[#A21D3C] border-b-2 border-[#A21D3C] md:px-1" : "md:px-1"}>
                        Home
                    </NavLink>
                    <NavLink to="/favorites" className={({ isActive }) => isActive ? " text-[#A21D3C] border-b-2 border-[#A21D3C] md:px-1" : "md:px-1"}>
                        Favorites
                    </NavLink>
                    <NavLink to="/compare" className={({ isActive }) => isActive ? " text-[#A21D3C] border-b-2 border-[#A21D3C] md:px-1" : "md:px-1"}>
                        Compare
                    </NavLink>
                </div>
                <button className="md:hidden visible text-white focus:outline-none"
                    onClick={toggleMobileMenu}>
                    {click ? (<FaXmark className="text-[#A21D3C] font-bold md:text-xl text-lg" />) : (<FaBars className="text-[#A21D3C] font-bold md:text-xl text-lg" />)}
                </button>
            </div>
            {isMobileMenuOpen && (
                <div style={{ zIndex: 9999 }} className="md:hidden absolute top-16 right-4 px-4 py-4 w-40  text-sm font-medium rounded-xl shadow-md border-2 flex flex-col gap-3 border-[#A21D3C] bg-white">
                    <NavLink to="/home" onClick={windowClose} className={({ isActive }) => isActive ? " text-[#A21D3C] border-b-2 border-[#A21D3C] md:px-1" : "md:px-1"}>
                        Home
                    </NavLink>
                    <NavLink to="/favorites" onClick={windowClose} className={({ isActive }) => isActive ? " text-[#A21D3C] border-b-2 border-[#A21D3C] md:px-1" : "md:px-1"}>
                        Favorites
                    </NavLink>
                    <NavLink to="/compare" onClick={windowClose} className={({ isActive }) => isActive ? " text-[#A21D3C] border-b-2 border-[#A21D3C] md:px-1" : "md:px-1"}>
                        Compare
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Header;