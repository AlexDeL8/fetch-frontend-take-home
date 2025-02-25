import { React, useState } from 'react'
import Navbar from '../components/Navbar'
import Search from './search'
import Favorites from './favorites'
import ErrorText from '../components/ErrorText'

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('search')
    const [dashboardError, setDashboardError] = useState(null)
    const userInfo = {
        userName: '',
        userEmail: '',
        userFavorites: []
    }

    return (
        <>
            <Navbar activeTab={activeTab} switchTab={setActiveTab} />
            <ErrorText message={dashboardError} />
            { activeTab === 'search' ? <Search setError={setDashboardError} /> : 
                activeTab === 'favorites' ? <Favorites setError={setDashboardError}/> : 
                    null }
        </>
    )
}

export default Dashboard