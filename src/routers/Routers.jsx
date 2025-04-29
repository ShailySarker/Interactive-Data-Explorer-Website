import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home/Home';
import LandingPage from '../pages/LandingPage/LandingPage';
import MainLayout from '../layouts/MainLayout';


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
            </Route>
        </Routes>
    );
};

export default Routers;