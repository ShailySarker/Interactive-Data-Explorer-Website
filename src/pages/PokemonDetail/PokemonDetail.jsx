import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import baseAPI from '../../services/baseAPI';
import useFavorites from '../../hooks/useFavorites';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const PokemonDetail = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [evolutionChain, setEvolutionChain] = useState([]);
    const [loading, setLoading] = useState(true);

    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    const handleFavorite = () => {
        if (isFavorite(pokemon.id)) {
            removeFavorite(pokemon.id);
        } else {
            addFavorite(pokemon);
        }
    };
    useEffect(() => {
        const fetchPokemonDetail = async () => {
            try {
                const res = await baseAPI.get(`pokemon/${id}`);
                setPokemon(res.data);

                const speciesRes = await baseAPI.get(`pokemon-species/${id}`);
                const evolutionRes = await baseAPI.get(
                    speciesRes.data.evolution_chain.url
                );
                const chain = [];
                let current = evolutionRes.data.chain;
                do {
                    chain.push(current.species.name);
                    current = current.evolves_to[0];
                } while (current && current.hasOwnProperty('evolves_to'));
                setEvolutionChain(chain);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPokemonDetail();
    }, [id]);

    if (loading) return <p className="italic text-center xl:h-[550px] lg:h-[400px] md:h-[500px] h-[300px] flex justify-center items-center font-semibold xl:text-2xl md:text-xl text-lg">Loading...</p>;
    if (!pokemon) return <p className="italic text-center xl:h-[550px] lg:h-[400px] md:h-[500px] h-[300px] flex justify-center items-center font-semibold xl:text-2xl md:text-xl text-lg text-red-500">Pokémon not found.</p>;

    return (
        <div className="xl:px-20 lg:px-14 md:px-7 px-5 bg-[#A21D3C]/20 xl:pt-5 pt-4 xl:pb-24 lg:pb-20 md:pb-16 pb-10 flex flex-col xl:gap-5 lg:gap-3 md:gap-3">
            <div>
                <img
                    src={pokemon?.sprites?.front_default}
                    alt={pokemon?.name}
                    className="mx-auto xl:w-60 xl:h-60 lg:w-54 lg:h-54 md:w-52 md:h-52 w-44 h-44"
                />
                <div className='flex justify-center items-center lg:gap-5 md:gap-4 gap-3 mb-4'>
                    <h2 className="xl:text-3xl lg:text-2xl text-xl font-bold capitalize text-center">{pokemon?.name}</h2>
                    <button onClick={handleFavorite} className="text-[#A21D3C] xl:text-3xl lg:text-2xl text-xl">
                        {isFavorite(pokemon?.id) ? <FaHeart /> : <FaRegHeart />}
                    </button>
                </div>
            </div>
            <div className='flex flex-col gap-3 xl:text-xl md:text-lg text-base'>
                <p><span className='font-semibold'>ID: </span>{pokemon?.id}</p>
                <p><span className='font-semibold'>Height: </span>{pokemon?.height}</p>
                <p><span className='font-semibold'>Weight: </span>{pokemon?.weight}</p>
                <p><span className='font-semibold'>Types: </span>{pokemon?.types?.map((t) => t?.type?.name).join(', ')}</p>
                <p><span className='font-semibold'>Abilities: </span>{pokemon?.abilities?.map((a) => a?.ability?.name).join(', ')}
                </p>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-3 md:mt-0 mt-3'>
                <p className='xl:text-xl md:text-lg text-base'><span className='font-semibold'>Stats: </span>
                    <ul className="list-disc list-inside flex flex-col gap-2 lg:mt-3 md:mt-[9px] mt-2">
                        {pokemon?.stats?.map((stat) => (
                            <li key={stat?.stat?.name}>
                                {stat?.stat?.name}: {stat?.base_stat}
                            </li>
                        ))}
                    </ul>
                </p>
                <p className='xl:text-xl md:text-lg text-base'><span className='font-semibold'>Moves: </span>
                    <ul className="list-disc list-inside flex flex-col gap-2 lg:mt-3 md:mt-[9px] mt-2">
                        {pokemon?.moves.slice(0, 5).map((move) => (
                            <li key={move?.move?.name}>{move?.move?.name}</li>
                        ))}
                    </ul>
                </p>
            </div>
            <p className='xl:text-xl md:text-lg text-base md:mt-0 mt-3'><span className='font-semibold'>Evolution Chain: </span>
                {/* {evolutionChain.join(' → ')} */}
                <span className='italic font-extrabold text-[#A21D3C]'>{evolutionChain.join(' → ')}</span>
            </p>
        </div>
    );
};

export default PokemonDetail;