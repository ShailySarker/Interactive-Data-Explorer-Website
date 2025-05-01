import React from 'react';
import { ImSearch } from 'react-icons/im';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0">
            <div className="xl:px-20 lg:px-14 md:px-6 px-4 xl:py-7 lg:py-6 md:py-5 py-4 flex justify-between items-center">
                <h1 className="xl:text-2xl/none lg:text-xl/none text-base/normal font-bold flex items-center md:gap-2 gap-1 text-[#A21D3C]"><ImSearch className='lg:text-2xl md:text-xl text-sm' />Interactive Data Explorer</h1>
                <div className='flex flex-row xl:gap-8 md:gap-6 gap-2 xl:text-lg md:text-base text-sm font-medium'>
                    <NavLink to="/home" className={({ isActive }) => isActive ? " text-[#A21D3C] border-b-2 border-[#A21D3C] md:px-1" : "md:px-1"}>
                        Home
                    </NavLink>
                    <NavLink to="/favorites" className={({ isActive }) => isActive ? " text-[#A21D3C] border-b-2 border-[#A21D3C] md:px-1" : "md:px-1"}>
                        Favorites
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;