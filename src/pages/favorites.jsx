import React, { useContext, useState } from 'react';
import Heading from '../components/Heading';
import UserContext from '../context/UserContext';
import Button from '../components/Button';
import Results from '../components/Results';

const Favorites = () => {
    const userContext = useContext(UserContext)
    const [pageNumber, setPageNumber] = useState(1)

    return (
        <div>
            <div className="resultsContainer">
                <Heading size={2} text='Find your perfect match:' />
                <div id="perfectMatchContainer">
                    <Button isPrimary={true} text="Find Your Match" />
                </div>
            </div>
            <Results 
                headingText='Favorites: '
                resultsList={userContext.favorites.value} 
                pageNumber={pageNumber} 
                setPageNumber={setPageNumber} />
        </div>
    )
}
export default Favorites;