import React from 'react';
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import Home from './pages/home';
import Login from './pages/login';
import Search from './pages/search';
import Favorites from './pages/favorites';
import Dashboard from './pages/dashboard';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='dashboard' element={<Dashboard />} >
                <Route path='search' element={<Search />} />
                <Route path='favorites' element={<Favorites />} />
            </Route>
        </Routes>
    );
};
export default App;