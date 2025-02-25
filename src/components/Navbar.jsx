import React from 'react'
import { Link } from 'react-router'

import Button from './Button'

const Navbar = ({ activeTab, switchTab }) => {
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
            <Link className="routerLink" to="search">
                <li 
                    className={activeTab === "search" ? "navItem activeTab" : "navItem"}
                    onClick={() => switchTab('search')}
                >Search</li>
            </Link>
            <Link className="routerLink" to="favorites">
                <li 
                    className={activeTab === "favorites" ? "navItem activeTab" : "navItem"}
                    onClick={() => switchTab('favorites')}
                >Favorites</li>
            </Link>
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