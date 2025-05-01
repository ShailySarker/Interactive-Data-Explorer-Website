import React, { useEffect, useState } from 'react';
import baseAPI from '../services/baseAPI';

const usePokemonData = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [types, setTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const res = await baseAPI.get('pokemon?limit=150');
                const promises = res?.data?.results?.map((p) => baseAPI.get(p.url));
                const results = await Promise.all(promises);
                setPokemonList(results?.map((r) => r?.data));
                const typeRes = await baseAPI.get('type');
                setTypes(typeRes?.data?.results?.map((t) => t?.name));
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPokemon();
    }, []);

    return { pokemonList, types, loading };
};

export default usePokemonData;