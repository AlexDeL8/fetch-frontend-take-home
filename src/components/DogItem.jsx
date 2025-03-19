import React from 'react'
import Button from './Button'

const DogItem = ({ dogObj, addFavorite }) => {
  if(dogObj === null || dogObj === undefined) {
    return
  }

  return (
    <li className='dogItem'>
      <div className='dogImgContainer'><img src={dogObj.img} alt='Dog Image'></img></div>
      <div className='dogInfo'>
        <div className='dogHeading'>
          <div className='dogInfoLabel'>{dogObj.name}</div>
          <div>
            <div className='dogInfoLabel'>Age:&nbsp;</div>
            <div>{dogObj.age}</div>
          </div>
        </div>
        <div className="dogDetails">
          <div>
            <div className='dogInfoLabel'>Breed:&nbsp;</div>
            <div>{dogObj.breed}</div>
          </div>
          <div>
            <Button id='favoriteBtn' isPrimary={false} text='★' onClick={() => addFavorite(dogObj)} />
          </div>
        </div>
      </div>
    </li>
  )
}

export default DogItem