import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';

import DogItem from '../components/DogItem';

const Search = ({ setError }) => {
    const [pageNumber, setPageNumber] = useState(1)
    const [dogObjs, setDogObjs] = useState([])
    useEffect(() => {
        const abortController = new AbortController()

        const fetchDogIds = async () => {
            try {
                // from is a search param, where if we're getting 15 per page (pageNumber * 15 = top bound)
                const response = await fetch('https://frontend-take-home-service.fetch.com/dogs/search?size=15&sort=breed:asc', {
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
                // from is a search param, where if we're getting 15 per page (pageNumber * 15 = top bound)
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
                setError(error)
            })
    }, [pageNumber])

    return (
        <div className='dashboardContainer'>
            <div className='dashboardFilter'>Filters</div>
            <div className='resultsContainer'>
                <Heading size={2} text='Results:' />
                {/* <DogItems dogs={dogObjs} /> */}
                <ul className='dogsList'>
                    {dogObjs.map((dog) => {
                        return (<DogItem key={dog.id} dogObj={dog} />)
                    })}
                </ul>
            </div>
            <div className='paginationContainer'>
                <div className=''>1, 2, 3, ... 10</div>
            </div>
        </div>
    )
}
export default Search;