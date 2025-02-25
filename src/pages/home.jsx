import React from 'react';
import { Link } from 'react-router';

import Heading from '../components/Heading'
import Button from '../components/Button'

const Home = () => {
    return (
        <div className="mainContainer">
            <Heading size={1} text="Welcome to Doggle" />
            <Heading size={2} text="Where you find YOUR dog!" />
            <Link className="routerLink" to="login">
                <Button isPrimary={true} text="Login"></Button>
            </Link>
        </div>
    )
}
export default Home;