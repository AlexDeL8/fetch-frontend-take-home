import React, { useState } from 'react'
import { Outlet } from 'react-router'
import UserContext from '../context/UserContext'

const RootLayout = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userFavorites, setUserFavorites] = useState([])
  const outletContext = {
    name: {
      userName,
      setUserName
    },
    email: {
      userEmail,
      setUserEmail
    },
    favorites: {
      userFavorites,
      setUserFavorites
    }
  }

  return (
    <div>
      <Outlet context={outletContext}/>
    </div>
  )
}

export default RootLayout