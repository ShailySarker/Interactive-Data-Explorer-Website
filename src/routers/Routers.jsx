import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home/Home';
import LandingPage from '../pages/LandingPage/LandingPage';
import MainLayout from '../layouts/MainLayout';
import PokemonDetail from '../pages/PokemonDetail/PokemonDetail';
import Favorites from '../pages/Favorites/Favorites';


const Routers = () => {
    return (
        <Routes>
            <Route
                index
                element={<LandingPage />}
            />
            <Route
                path="/"
                element={<MainLayout />}
            >
                <Route
                    path="/home"
                    element={<Home />}
                />
                <Route
                    path="/pokemon/:id"
                    element={<PokemonDetail />}
                />
                <Route
                    path="/favorites"
                    element={<Favorites />}
                />
            </Route>
        </Routes>
    );
};

export default Routers;