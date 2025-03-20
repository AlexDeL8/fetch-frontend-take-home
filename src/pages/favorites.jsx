import React from 'react';
import Heading from '../components/Heading';

const Favorites = () => {
    return (
        <div>
            <div className="resultsContainer">
                <Heading size={2} text='Find your perfect match:' />
            </div>
            <div className="resultsContainer">
                <Heading size={2} text='Favorites:' />
            </div>
        </div>
    )
}
export default Favorites;