import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchAllPokemon = async () => {
  const response = await axios.get(`${BASE_URL}/pokemon?limit=150`);
  return response.data.results;
};

export const fetchPokemonDetails = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const fetchPokemonTypes = async () => {
  const response = await axios.get(`${BASE_URL}/type`);
  return response.data.results;
};
