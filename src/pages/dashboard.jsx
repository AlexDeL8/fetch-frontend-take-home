import { React, useState } from 'react'
import Navbar from '../components/Navbar'
import Search from './search'
import Favorites from './favorites'
import ErrorText from '../components/ErrorText'

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('search')
    const [dashboardError, setDashboardError] = useState(null)

    return (
        <>
        {/* TODO: Need to update how tabs are switched using React Router */}
            <Navbar activeTab={activeTab} switchTab={setActiveTab} />
            <div className='dashboardContainer'>
                <ErrorText message={dashboardError} />
                { activeTab === 'search' ? <Search setError={setDashboardError} /> : 
                    activeTab === 'favorites' ? <Favorites setError={setDashboardError}/> : 
                        null }
            </div>
        </>
    )
}

export default Dashboard