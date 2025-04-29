import React from 'react';
import { ImSearch } from 'react-icons/im';

const Header = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0">
            <div className="xl:px-10 lg:px-8 md:px-6 px-4 xl:py-5 py-4 flex justify-between items-center">
                <h1 className="xl:text-2xl/none lg:text-xl/none text-lg/normal font-bold flex items-center gap-2 text-[#A21D3C]"><ImSearch className='lg:text-2xl md:text-xl text-lg'/>Interactive Data Explorer</h1>
                <button
                    className="xl:text-lg md:text-base/none text-sm/none xl:px-7 px-5 xl:py-2 lg:py-[6px] py-2 font-medium text-white rounded-lg bg-[#A21D3C]"
                >
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Header;