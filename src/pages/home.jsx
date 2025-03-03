import '../styles.css'

import React from 'react';
import { Link } from 'react-router';

import Heading from '../components/Heading'
import Button from '../components/Button'
import PawIcon from '../assets/PawIcon.svg'

const Home = () => {
    return (
        <div className="centeredContainer">
            <div id="homeLogoContainer">
                <PawIcon />
            </div>
            <div className="centeredContent">
                <Heading size={1} text="Welcome to Doggle" />
                <Heading size={2} text="Where you find YOUR dog!" />
                <Link className="routerLink" to="login">
                    <Button isPrimary={true} text="Go To Login"></Button>
                </Link>
            </div>
        </div>
    )
}
export default Home;