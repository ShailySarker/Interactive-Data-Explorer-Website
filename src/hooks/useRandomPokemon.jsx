import { useState } from 'react';
import axios from 'axios';
import baseAPI from '../services/baseAPI';

const MAX_POKEMON_ID = 150; // Adjust based on the current total number of Pokémon

const useRandomPokemon = () => {
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRandomPokemon = async () => {
    setLoading(true);
    setError(null);
    try {
      const randomId = Math.floor(Math.random() * MAX_POKEMON_ID) + 1;
      const response = await baseAPI.get(`/pokemon/${randomId}`);
      setRandomPokemon(response?.data);
    } catch (err) {
      setError('Failed to fetch Pokémon.');
    } finally {
      setLoading(false);
    }
  };

  return { randomPokemon, fetchRandomPokemon, loading, error };
};

export default useRandomPokemon;
