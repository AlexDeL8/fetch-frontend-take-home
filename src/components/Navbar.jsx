import React, { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router'

import Button from './Button'
import UserContext from '../context/UserContext'
import PawIcon from '../assets/PawIcon.svg'

const Navbar = () => {
    const userContext = useContext(UserContext)
    let greetingName = ''
    if(userContext.name.value !== null) {
        greetingName = userContext.name.value.charAt(0).toUpperCase() + userContext.name.value.slice(1);
    }

    const handleLogout = async () => {
        try {
            const response = await fetch("https://frontend-take-home-service.fetch.com/auth/logout", {
                method: "POST",
                credentials: "include",
            })
            if (response.status !== 200) {
                throw new Error('Network response was not ok')
            }
            userContext.name.set('')
            userContext.email.set('')
            navigateTo("/")
        } catch (error) {
            console.log(error.message);
            return
        }
    }

    return (
    <div id="navbarContainer">
        <ul id="navbarList">
            <div id="navLogoContainer">
                <PawIcon />
            </div>
            <div id="navLinks">
                <NavLink className="routerLink" to="search">
                    <li className="navItem">Search</li>
                </NavLink>
                <NavLink className="routerLink" to="favorites">
                    <li className="navItem">Favorites</li>
                </NavLink>
            </div>
            <div id='logoutSection'>
                <div id='navGreeting'>Hi, {greetingName}!</div>
                <Link className="routerLink" to="/">
                    <Button 
                        isPrimary={false} 
                        text="Logout" 
                        onClick={() => handleLogout()}>
                    </Button>
                </Link>
            </div>
        </ul>
    </div>
    )
}

export default Navbar