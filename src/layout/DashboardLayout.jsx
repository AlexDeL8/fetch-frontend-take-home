import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const DashboardLayout = () => {
  return (
    <div>
        <Navbar />
        <div className='dashboardContainer'>
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout