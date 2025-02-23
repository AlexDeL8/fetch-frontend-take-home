import React from 'react';
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import Home from './pages/home';
import Login from './pages/login';
import Search from './pages/search';
import Favorites from './pages/favorites';
import Error from './pages/error';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='search' element={<Search />} />
            <Route path='favorites' element={<Favorites />} />
        </Routes>
    );
};
export default App;