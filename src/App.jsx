import './styles.css'

import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";

import Home from './pages/home';
import Login from './pages/login';
import Search from './pages/search';
import Favorites from './pages/favorites';
import Dashboard from './pages/dashboard';
import RootLayout from './layout/RootLayout';

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='dashboard' element={<Dashboard />} >
                    <Route path='search' element={<Search />} />
                    <Route path='favorites' element={<Favorites />} />
                </Route>
            </Route>
        )
    )
    return (
        <RouterProvider router={router}/>
    );
};
export default App;