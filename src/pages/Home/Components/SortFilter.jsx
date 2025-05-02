import React from 'react';

const SortFilter = ({ sortOption, setSortOption }) => {
    return (
        <select
            value={sortOption}
            onChange={(e) => setSortOption(e?.target?.value)}
            className="bg-white border-2 border-[#A21D3C] rounded-xl shadow-md font-medium xl:px-4 px-3 xl:py-2 py-[6px] xl:text-base text-[13.4px]"
        >
            <option value="">Sort By</option>
            <option value="id-asc">ID Ascending</option>
            <option value="id-desc">ID Descending</option>
            <option value="name-asc">Name A-Z</option>
            <option value="name-desc">Name Z-A</option>
        </select>
    );
};

export default SortFilter;