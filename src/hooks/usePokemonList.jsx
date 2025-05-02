import React, { useEffect, useState } from 'react';
import baseAPI from '../services/baseAPI';

const usePokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                const response = await baseAPI.get('/pokemon?limit=1000');
                const names = response?.data?.results?.map((pokemon) => pokemon?.name);
                setPokemonList(names);
            } catch (err) {
                setError('Failed to fetch Pokémon list.');
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonList();
    }, []);

    return { pokemonList, loading, error };
};

export default usePokemonList;