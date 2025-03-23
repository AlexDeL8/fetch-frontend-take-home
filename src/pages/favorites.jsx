import React, { useContext } from 'react';
import Heading from '../components/Heading';
import DogItem from '../components/DogItem';
import UserContext from '../context/UserContext';
import Button from '../components/Button';

const Favorites = () => {
    const userContext = useContext(UserContext)

    const toggleFavorite = ((dogObj) => {
        console.log(dogObj)
    })

    return (
        <div>
            <div className="resultsContainer">
                <Heading size={2} text='Find your perfect match:' />
                <div id="perfectMatchContainer">
                    <Button isPrimary={true} text="Find Your Match" />
                </div>
            </div>
            <div className="resultsContainer">
                <Heading size={2} text='Favorites:' />
                <ul className='dogsList'>
                    {userContext.favorites.value.map((dog) => {
                        return (<DogItem 
                                key={dog.id} 
                                dogObj={dog} 
                                toggleFavorite={toggleFavorite} 
                                isFavorite={true} />)
                    })}
                </ul>
            </div>
            <div className='paginationContainer'>
                <div 
                    className='paginationNav'
                    onClick={() => pageNav(-1)}>← Prev</div> 
                : 
                <div 
                    className='paginationNav'
                    onClick={() => pageNav(1)}>Next →</div>
            </div>
        </div>
    )
}
export default Favorites;