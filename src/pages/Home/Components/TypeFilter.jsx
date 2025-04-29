import React from 'react';

const TypeFilter = ({ types, selectedType, setSelectedType }) => (
    <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="border-2 border-[#A21D3C] rounded-xl shadow-md px-4 py-2"
    >
        <option value="all">All Types</option>
        {types.map((type) => (
            <option key={type.name} value={type.name}>
                {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
            </option>
        ))}
    </select>
);

export default TypeFilter;