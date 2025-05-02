import React from 'react';
import useFavorites from '../../hooks/useFavorites';
import PokemonCard from '../Home/Components/PokemonCard';

const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <div className="xl:px-20 lg:px-14 md:px-7 px-5 xl:pt-5 pt-4 xl:pb-24 lg:pb-20 md:pb-16 pb-10">
            <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold mb-4">Favorite Pokémon</h2>
            {favorites?.length === 0 ? (
                <p className="italic text-center xl:h-[550px] lg:h-[400px] md:h-[500px] h-[300px] flex justify-center items-center font-semibold xl:text-2xl md:text-xl text-lg">No favorite Pokémon yet.</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {favorites?.map((pokemon) => (
                        <PokemonCard key={pokemon?.id} pokemon={pokemon} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;