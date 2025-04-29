import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
    <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-2 border-[#A21D3C] rounded-xl shadow-md font-medium px-4 py-2 mb-2 md:mb-0 xl:w-[23.5%] lg:w-1/3 md:w-[40%] w-[90%]"
    />
);

export default SearchBar;