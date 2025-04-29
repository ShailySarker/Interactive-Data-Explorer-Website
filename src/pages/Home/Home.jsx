import React, { useEffect, useState } from 'react';
import SearchBar from './Components/SearchBar';
import TypeFilter from './Components/TypeFilter';
import PokemonCard from './Components/PokemonCard';
import { fetchAllPokemon, fetchPokemonDetails, fetchPokemonTypes } from '../../apis/homeApis';

const Home = () => {
    const [allPokemon, setAllPokemon] = useState([]);
    const [displayedPokemon, setDisplayedPokemon] = useState([]);
    const [types, setTypes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getPokemonData = async () => {
            try {
                const pokemonList = await fetchAllPokemon();
                const detailedPromises = pokemonList.map((pokemon) =>
                    fetchPokemonDetails(pokemon.url)
                );
                const detailedData = await Promise.all(detailedPromises);
                setAllPokemon(detailedData);
                setDisplayedPokemon(detailedData);
                const typesData = await fetchPokemonTypes();
                setTypes(typesData);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError(true);
                setLoading(false);
            }
        };

        getPokemonData();
    }, []);

    useEffect(() => {
        let filtered = allPokemon;

        if (searchTerm) {
            filtered = filtered.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedType !== 'all') {
            filtered = filtered.filter((pokemon) =>
                pokemon.types.some((type) => type.type.name === selectedType)
            );
        }

        setDisplayedPokemon(filtered);
    }, [searchTerm, selectedType, allPokemon]);

    if (loading)
        return <p className="text-center h-screen flex justify-center items-center font-semibold xl:text-2xl md:text-xl text-lg">Loading Pokémon data...</p>;
    if (error)
        return (
            <p className="text-center text-red-500 h-screen flex justify-center items-center font-semibold xl:text-2xl md:text-xl text-lg">
                Error fetching Pokémon data.
            </p>
        );

    return (
        <div className="container mx-auto xl:px-20 lg:px-14 md:px-10 px-5 bg-[#A21D3C]/20 xl:pb-24 lg:pb-20 md:pb-16 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-center md:gap-0 gap-3 pt-4 xl:pb-6 md:pb-5 pb-4">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <TypeFilter
                    types={types}
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6 gap-4">
                {displayedPokemon?.length ? (
                    displayedPokemon?.map((pokemon) => (
                        <PokemonCard key={pokemon?.id} pokemon={pokemon} />
                    ))
                ) : (
                    <p className="col-span-full text-center xl:h-[550px] lg:h-[400px] md:h-[500px] h-[300px] flex justify-center items-center font-semibold xl:text-2xl md:text-xl text-lg">
                        No Pokémon match your search.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Home;