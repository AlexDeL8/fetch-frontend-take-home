import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import Filter from '../components/Filter';
import DogItem from '../components/DogItem';

const Search = () => {
    const MAX_ITEMS = 10000
    const ITEMS_PER_PAGE = 50
    const [pageNumber, setPageNumber] = useState(1)
    const [breedOrder, setBreedOrder] = useState('asc')
    const [dogObjs, setDogObjs] = useState([])

    const pageNav = ((direction) => {
        if(pageNumber + direction < 1 || pageNumber + direction > MAX_ITEMS/ITEMS_PER_PAGE) {
            return
        }
        setPageNumber(prev => prev + direction)
    })
    const addFavorite = ((dogObj) => {
        console.log(dogObj)
    })

    useEffect(() => {
        const abortController = new AbortController()
        
        const dogSearchUrl = new URL('https://frontend-take-home-service.fetch.com/dogs/search')
        var params = {
            size: ITEMS_PER_PAGE, 
            from: (pageNumber - 1) * ITEMS_PER_PAGE,
            sort: `breed:${breedOrder}`
        }
        dogSearchUrl.search = new URLSearchParams(params).toString();

        const fetchDogIds = async () => {
            try {
                // from is a search param, where if we're getting 25 per page (pageNumber * 15 = where to start FROM)
                const response = await fetch(dogSearchUrl, {
                    method: 'GET',
                    credentials: "include",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    signal: abortController.signal
                })
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json()
                return result.resultIds
            } catch (error) {
                if (error.name !== 'AbortError') {
                    throw new Error(error.message)
                }
            } finally {
                console.log('fetchDogIds finally')
            }
        }

        const fetchDogs = async (dogIds) => {
            try {
                const response = await fetch('https://frontend-take-home-service.fetch.com/dogs', {
                    method: 'POST',
                    credentials: "include",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dogIds),
                    signal: abortController.signal
                })
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json()
                console.log(result)
                setDogObjs(result)
            } catch (error) {
                if (error.name !== 'AbortError') {
                    throw new Error(error.message)
                }
            } finally {
                console.log('fetchDogs finally')
            }
        }

        fetchDogIds()
            .then((res) => {
                fetchDogs(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [pageNumber, breedOrder])

    return (
        <>
            <div>
                <div className='dashboardFilter'>
                    <Heading size={3} text='Filters:' />
                    <Filter 
                        label='Breed' 
                        selectName='breedOrder' 
                        options={{type: 'alphabetical'}}
                        currentValue={breedOrder} 
                        setStateValue={setBreedOrder} />
                </div>
                {/* TODO: GROUP RESULTS AND PAGINATION TOGETHER INTO A COMPONENT */}
                <div className='resultsContainer'>
                    <Heading size={2} text='Results:' />
                    <ul className='dogsList'>
                        {dogObjs.map((dog) => {
                            return (<DogItem key={dog.id} dogObj={dog} addFavorite={addFavorite} />)
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
        </>
    )
}
export default Search;