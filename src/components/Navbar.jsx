import React from 'react'
import { Link } from 'react-router'

import Button from './Button'

const Navbar = () => {
    const handleLogout = async () => {
        try {
            const response = await fetch("https://frontend-take-home-service.fetch.com/auth/logout", {
                method: "POST",
                credentials: 'same-origin',
            })
            if (response.status !== 200) {
                console.log(response)
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
    <div id="navBarContainer">
        <Link to="/"><Button isPrimary={false} text="Logout" onClick={() => handleLogout()}></Button></Link>
    </div>
    )
}

export default Navbar