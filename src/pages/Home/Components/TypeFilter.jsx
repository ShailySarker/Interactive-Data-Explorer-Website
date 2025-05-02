import React from 'react';

const TypeFilter = ({ types, selectedTypes, setSelectedTypes }) => {
    const handleTypeChange = (type) => {
        if (selectedTypes.includes(type)) {
            setSelectedTypes(selectedTypes.filter((t) => t !== type));
        } else {
            setSelectedTypes([...selectedTypes, type]);
        }
    };

    return (
        <div className="lg:my-2 my-[6px]">
            <p className="lg:mb-2 mb-[6px] font-semibold lg:text-base text-sm">Filter by Type:</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-4 gap-2">
            {/* <div className="flex flex-wrap gap-2"> */}
                {types?.map((type) => (
                    <label key={type} className="flex items-center space-x-1">
                        <input
                            type="checkbox"
                            value={type}
                            className='font-medium'
                            checked={selectedTypes.includes(type)}
                            onChange={() => handleTypeChange(type)}
                        />
                        <span className="capitalize lg:text-base text-sm">{type}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default TypeFilter;