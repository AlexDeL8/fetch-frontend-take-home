import React from 'react';
import Heading from '../components/Heading'
import Button from '../components/Button'

const Home = () => {
    return (
        <div className="mainContainer">
            <Heading size={1} text="Welcome to Doggle" />
            <Heading size={2} text="Where you find YOUR dog!" />
            <Button  isPrimary={true} text="Login" onClick={() => {console.log("CLICKED LOGIN")}} />
        </div>
    )
}
export default Home;