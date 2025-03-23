import React from 'react'
import Button from './Button'

const DogItem = ({ dogObj, toggleFavorite, isFavorite }) => {
  if(dogObj === null || dogObj === undefined) {
    return
  }

  return (
    <li className='dogItem'>
      <div className='dogImgContainer'>
        <img src={dogObj.img} alt='Dog Image' />
      </div>
      <div className='dogInfo'>
        <div className='dogHeading'>
          <div className='dogInfoLabel'>{dogObj.name}</div>
          <div>
            <div className='dogInfoLabel'>Age:&nbsp;</div>
            <div>{dogObj.age === 0 ? '< 1' : dogObj.age}</div>
          </div>
        </div>
        <div className="dogDetails">
          <div>
            <div className='dogInfoLabel'>Breed:&nbsp;</div>
            <div>{dogObj.breed}</div>
          </div>
          <div>
            <Button 
              id='favoriteBtn' 
              isPrimary={false} 
              text='★' 
              isActive={isFavorite}
              onClick={() => toggleFavorite(dogObj, isFavorite)} />
          </div>
        </div>
      </div>
    </li>
  )
}

export default DogItem