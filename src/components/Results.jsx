import React, { useContext } from 'react'
import Heading from './Heading'
import DogItem from './DogItem'
import UserContext from '../context/UserContext'

const Results = ({ 
        headingText, 
        resultsList, 
        pageNumber=null,
        setPageNumber=null
     }) => {
    const MAX_ITEMS = 10000
    const ITEMS_PER_PAGE = 50
    const userContext = useContext(UserContext)

    const toggleFavorite = (dog) => {
        if(userContext.favorites.value.some(favObj => favObj.id === dog.id)) {
            const currentFavs = userContext.favorites.value
            const filteredFavs = currentFavs.filter(fav => fav.id !== dog.id)
            userContext.favorites.set(filteredFavs)
        } else {
            userContext.favorites.set(prev => [...prev, dog])
        }
        
    }
    
    const pageNav = ((direction) => {
        if(pageNumber + direction < 1 || pageNumber + direction > MAX_ITEMS/ITEMS_PER_PAGE) {
            return
        }
        setPageNumber(prev => prev + direction)
    })

    return (
        <>
            <div className="resultsContainer">
                <Heading size={2} text={headingText} />
                <ul className='dogsList'>
                    {resultsList.map((dog) => {
                        return (<DogItem 
                                key={dog.id} 
                                dogObj={dog} 
                                toggleFavorite={() => toggleFavorite(dog)} 
                                isFavorite={userContext.favorites.value.some(favObj => favObj.id === dog.id)} />)
                    })}
                </ul>
            </div>
            {pageNumber ? <div className='paginationContainer'>
                <div 
                    className='paginationNav'
                    onClick={() => pageNav(-1)}>← Prev</div> 
                : 
                <div 
                    className='paginationNav'
                    onClick={() => pageNav(1)}>Next →</div>
            </div> 
            :
            null}
        </>
    )
}

export default Results