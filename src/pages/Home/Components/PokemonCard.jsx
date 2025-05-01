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
                className="mx-auto xl:w-36 xl:h-36 lg:w-28 lg:h-28 md:w-32 md:h-32 w-24 h-24 "
            />
            <h3 className="text-lg font-bold capitalize">{pokemon?.name}</h3>
            <p>ID: {pokemon?.id}</p>
            <p className='font-semibold italic text-gray-800'>
                Types:{' '}
                {pokemon?.types?.map((type) => type?.type?.name).join(', ')}
            </p>
            <div className="flex justify-between mt-6">
                <Link to={`/pokemon/${pokemon?.id}`} className="text-[#A21D3C] hover:bg-[#A21D3C] hover:text-white font-medium border-2 border-[#A21D3C] xl:px-4 px-3 py-1 rounded-xl">
                    Details
                </Link>
                <button onClick={handleFavorite} className="text-[#A21D3C] text-2xl">
                    {isFavorite(pokemon?.id) ? <FaHeart /> : <FaRegHeart />}
                </button>
            </div>
        </div>
    );
};


export default PokemonCard;