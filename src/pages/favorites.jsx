import React, { useContext } from 'react';
import Heading from '../components/Heading';
import UserContext from '../context/UserContext';
import Button from '../components/Button';
import Results from '../components/Results';
import DogItem from '../components/DogItem';

const Favorites = () => {
    const userContext = useContext(UserContext)

    const getMatch = () => {
        if(userContext.favorites.value.length === 0) {
            return
        }

        userContext.match.set(null)
        const favIds = userContext.favorites.value.map(dog => dog.id)
        const abortController = new AbortController()    
        const dogMatchUrl = new URL('https://frontend-take-home-service.fetch.com/dogs/match')
        
        const fetchDogMatchId = async () => {
            try {
                // from is a search param, where if we're getting 25 per page (pageNumber * 15 = where to start FROM)
                const response = await fetch(dogMatchUrl, {
                    method: 'POST',
                    credentials: "include",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(favIds),
                    signal: abortController.signal
                })
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json()
                return result.match
            } catch (error) {
                if (error.name !== 'AbortError') {
                    throw new Error(error.message)
                }
            }
        }

        fetchDogMatchId()
            .then((res) => {
                userContext.match.set(...userContext.favorites.value.filter((favObj) => favObj.id === res))
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="resultsContainer">
                <Heading size={2} text='Find your perfect match:' />
                <div id="perfectMatchContainer">
                    <Button 
                        isPrimary={true} 
                        text="Find Your Match"
                        onClick={getMatch} />
                    {userContext.match.value ? 
                    <DogItem 
                        dogObj={userContext.match.value} />
                    :
                    null}
                </div>
            </div>
            <Results 
                headingText='Favorites: '
                resultsList={userContext.favorites.value} />
        </div>
    )
}
export default Favorites;