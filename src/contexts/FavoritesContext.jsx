import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (pokemon) => {
    setFavorites((prev) => [...prev, pokemon]);
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((p) => p.id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((p) => p.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};