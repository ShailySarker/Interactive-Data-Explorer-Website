import React from 'react';
import useRandomPokemon from '../../../hooks/useRandomPokemon';
import useFavorites from '../../../hooks/useFavorites';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const RandomPokemon = () => {
    const { randomPokemon, fetchRandomPokemon, loading, error } = useRandomPokemon();
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    const handleFavorite = () => {
        if (isFavorite(randomPokemon?.id)) {
            removeFavorite(randomPokemon?.id);
        } else {
            addFavorite(randomPokemon);
        }
    };
    return (
        <div className="xl:p-8 lg:p-6 md:p-5 p-4 bg-white rounded-xl shadow-md">
            <div className='flex md:flex-row flex-col md:justify-between justify-center items-center md:gap-0 gap-3'>
                <h2 className='italic xl:text-xl md:text-lg text-base text-[#A21D3C] font-semibold md:text-start text-center'>Do you want to know any random Pokémon?</h2>
                <button
                    onClick={fetchRandomPokemon}
                    className="bg-[#A21D3C] text-white px-4 py-2 rounded-xl shadow-md font-medium"
                >
                    Get Random Pokémon
                </button>
            </div>

            {loading && <p className="italic text-center xl:h-[550px] lg:h-[400px] md:h-[500px] h-[300px] flex justify-center items-center font-semibold xl:text-2xl md:text-xl text-lg">Random Pokémon info loading...</p>}
            {error && <p className="italic text-center xl:h-[550px] lg:h-[400px] md:h-[500px] h-[300px] flex justify-center items-center font-semibold xl:text-2xl md:text-xl text-lg text-red-500">{error}</p>}

            {randomPokemon && (
                <div className="flex flex-col xl:gap-5 items-center lg:gap-3 md:gap-3 xl:my-10 mt-6">
                    <div className='flex items-center justify-center xl:gap-8 lg:gap-7 md:gap-6 gap-2'>
                        <div className='md:w-auto w-[50%]'>
                            <img
                                src={randomPokemon?.sprites?.front_default}
                                alt={randomPokemon?.name}
                                className="mx-auto xl:w-44 xl:h-44 lg:w-40 lg:h-40 md:w-40 md:h-40 w-32 h-32 border-2 border-[#A21D3C] rounded-xl xl:p-2 lg:p-3 p-2 md:mb-4 mb-3 bg-white shadow-md"
                            />
                            <div className='flex justify-center items-center xl:gap-4 lg:gap-[14px] md:gap-3 gap-1'>
                                <h2 className="xl:text-2xl md:text-xl text-lg font-bold capitalize text-center">{randomPokemon?.name}</h2>
                                <button onClick={handleFavorite} className="text-[#A21D3C] xl:text-2xl md:text-xl text-lg">
                                    {isFavorite(randomPokemon?.id) ? <FaHeart /> : <FaRegHeart />}
                                </button>
                            </div>
                        </div>
                        <div className='md:w-auto w-[50%] flex flex-col md:gap-3 gap-2 xl:text-lg md:text-base text-sm'>
                            <p><span className='font-semibold'>ID: </span>{randomPokemon?.id}</p>
                            <p><span className='font-semibold'>Height: </span>{randomPokemon?.height}</p>
                            <p><span className='font-semibold'>Weight: </span>{randomPokemon?.weight}</p>
                            <p><span className='font-semibold'>Types: </span>{randomPokemon?.types?.map((t) => t?.type?.name).join(', ')}</p>
                            <p><span className='font-semibold'>Abilities: </span>{randomPokemon?.abilities?.map((a) => a?.ability?.name).join(', ')}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RandomPokemon;