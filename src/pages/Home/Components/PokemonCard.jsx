import React from 'react';

const PokemonCard = ({ pokemon }) => (
    <div className="border-2 border-[#A21D3C] rounded-xl xl:p-6 lg:p-4 md:p-5 p-4 text-center bg-white shadow-md">
        <img
            src={pokemon?.sprites?.front_default}
            alt={pokemon?.name}
            className="mx-auto xl:w-36 xl:h-36 lg:w-28 lg:h-28 md:w-32 md:h-32 w-24 h-24 "
        />
        <h3 className="text-lg font-bold capitalize">{pokemon.name}</h3>
        <p>ID: {pokemon?.id}</p>
        <p className='font-semibold italic text-gray-800'>
            Types:{' '}
            {pokemon?.types?.map((type) => type?.type?.name).join(', ')}
        </p>
    </div>
);


export default PokemonCard;