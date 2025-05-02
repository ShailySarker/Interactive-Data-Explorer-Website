import React, { useState } from 'react';
import baseAPI from '../services/baseAPI';

const usePokemonComparisonData = () => {
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchPokemonDataForComparing = async (identifier) => {
      setLoading(true);
      setError(null);
      try {
        const response = await baseAPI.get(`${identifier.toLowerCase()}`);
        setPokemonData(response.data);
      } catch (err) {
        setError('Failed to fetch Pokémon data.');
      } finally {
        setLoading(false);
      }
    };
  
    return { pokemonData, fetchPokemonDataForComparing, loading, error };
}; 

export default usePokemonComparisonData;