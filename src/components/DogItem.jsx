import React from 'react'

const DogItem = ({ dogObj }) => {
  if(dogObj === null || dogObj === undefined) {
    return
  }

  console.log(dogObj)

  return (
    <li className='dogItem'>
      <div className='dogImgContainer'><img src={dogObj.img} alt='Dog Image'></img></div>
      <div>{dogObj.name}</div>
      <div>{dogObj.age}</div>
      <div>{dogObj.breed}</div>
    </li>
  )
}

export default DogItem