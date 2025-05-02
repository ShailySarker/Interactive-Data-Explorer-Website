import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
    <input
        type="text"
        placeholder="Search Pokémon ..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full placeholder:text-black bg-white border-2 border-[#A21D3C] rounded-xl shadow-md font-medium xl:px-5 px-4 xl:py-2 lg:py-[4.8px] md:py-[4.3px] py-1 xl:placeholder:text-[16.6px] placeholder:text-sm"
    />
);

export default SearchBar;