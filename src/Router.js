import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";

import Home from './pages/home';
import Login from './pages/login';
import Search from './pages/search';
import Favorites from './pages/favorites';
import RootLayout from './layout/RootLayout';
import DashboardLayout from './layout/DashboardLayout';
import Error from './pages/error';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='dashboard' element={<DashboardLayout />} >
                <Route path='search' element={<Search />} />
                <Route path='favorites' element={<Favorites />} />
            </Route>
            <Route path='*' element={<Error />} />
        </Route>
    )
);

export default router