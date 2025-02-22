import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './pages/home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
])

const App = () => {
    return (
        <RouterProvider router={router} />
    );
};
export default App;