import '../styles.css'

import React from 'react';
import { useNavigate } from 'react-router';

import Heading from '../components/Heading'
import Button from '../components/Button'
import PawIcon from '../assets/PawIcon.svg'

const Home = () => {
    const navigateTo = useNavigate()
    return (
        <div className="centeredContainer">
            <div id="homeLogoContainer">
                <PawIcon />
            </div>
            <div className="centeredContent">
                <Heading size={1} text="Welcome to Doggle" />
                <Heading size={2} text="Where you find YOUR dog!" />
                <Button isPrimary={true} text="Go To Login" onClick={() => navigateTo('login')} />
            </div>
        </div>
    )
}
export default Home;