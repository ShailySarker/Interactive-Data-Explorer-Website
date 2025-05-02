import React, { useState } from 'react';
import baseAPI from '../services/baseAPI';

const usePokemonComparisonData = () => {
    const [comparePokemonData, setComparePokemonData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchPokemonDataForComparing = async (name) => {
      setLoading(true);
      setError(null);
      try {
        const response = await baseAPI.get(`/pokemon/${name.toLowerCase()}`);
        setComparePokemonData(response?.data);
      } catch (err) {
        setError('Failed to fetch Pokémon data.');
      } finally {
        setLoading(false);
      }
    };
  
    return { comparePokemonData, fetchPokemonDataForComparing, loading, error };
}; 

export default usePokemonComparisonData;