import './styles.css'

import React, { useState } from 'react';
import { RouterProvider } from "react-router";
import router from './Router';
import UserContext from './context/UserContext';

const App = () => {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userFavorites, setUserFavorites] = useState([])
    const [userMatch, setUserMatch] = useState(null)
    const defaultUserContext = {
        name: {
            value: userName,
            set: setUserName
        },
        email: {
            value: userEmail,
            set: setUserEmail
        },
        favorites: {
            value: userFavorites,
            set: setUserFavorites
        },
        match: {
            value: userMatch,
            set: setUserMatch
        }
    }
    return (
        <UserContext.Provider value={defaultUserContext}>
            <RouterProvider router={router}/>
        </UserContext.Provider>
    );
};
export default App;