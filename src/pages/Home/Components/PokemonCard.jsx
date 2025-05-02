import React from 'react';
import useFavorites from '../../../hooks/useFavorites';
import { Link } from 'react-router';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const PokemonCard = ({ pokemon }) => {
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    const handleFavorite = () => {
        if (isFavorite(pokemon.id)) {
            removeFavorite(pokemon.id);
        } else {
            addFavorite(pokemon);
        }
    };
    return (
        <div className="border-2 border-[#A21D3C] rounded-xl xl:p-6 lg:p-4 md:p-5 p-4 text-center bg-white shadow-md">
            <img
                src={pokemon?.sprites?.front_default}
                alt={pokemon?.name}
                className="mx-auto xl:w-28 xl:h-28 lg:w-24 lg:h-24 md:w-24 md:h-24 w-20 h-20 "
            />
            <h3 className="xl:text-lg font-bold capitalize">{pokemon?.name}</h3>
            <p className='
            xl:text-base text-sm'>ID: {pokemon?.id}</p>
            <p className='font-bold italic text-gray-500 xl:text-sm text-xs'>
                Types:{' '}
                {pokemon?.types?.map((type) => type?.type?.name).join(', ')}
            </p>
            <div className="flex justify-between xl:mt-6 lg:mt-5 md:mt-4 mt-3">
                <Link to={`/pokemon/${pokemon?.id}`} className="xl:text-base text-sm text-[#A21D3C] hover:bg-[#A21D3C] hover:text-white font-medium border-2 border-[#A21D3C] xl:px-4 px-3 py-1 rounded-xl">
                    Details
                </Link>
                <button onClick={handleFavorite} className="text-[#A21D3C] xl:text-2xl text-xl">
                    {isFavorite(pokemon?.id) ? <FaHeart /> : <FaRegHeart />}
                </button>
            </div>
        </div>
    );
};


export default PokemonCard;