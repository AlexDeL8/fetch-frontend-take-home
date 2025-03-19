import React from 'react'
import { Link, NavLink } from 'react-router'

import Button from './Button'

const Navbar = () => {
    const handleLogout = async () => {
        try {
            const response = await fetch("https://frontend-take-home-service.fetch.com/auth/logout", {
                method: "POST",
                credentials: "include",
            })
            if (response.status !== 200) {
                throw new Error('Network response was not ok')
            }
            navigateTo("/")
        } catch (error) {
            console.log(error.message);
            return
        } finally {
          console.log("logout finally")
        }
    }

    return (
    <div id="navbarContainer">
        <ul id="navbarList">
            <NavLink className="routerLink" to="search">
                <li className="navItem">Search</li>
            </NavLink>
            <NavLink className="routerLink" to="favorites">
                <li className="navItem">Favorites</li>
            </NavLink>
            <li className="navItem">
                <Link className="routerLink" to="/">
                    <Button 
                        isPrimary={false} 
                        text="Logout" 
                        onClick={() => handleLogout()}>
                    </Button>
                </Link>
            </li>
        </ul>
    </div>
    )
}

export default Navbar