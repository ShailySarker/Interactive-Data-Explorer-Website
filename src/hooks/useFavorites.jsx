import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

const useFavorites = () => {
    return useContext(FavoritesContext);
};

export default useFavorites;