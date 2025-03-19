import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigateTo = useNavigate()

    return (
        <div className="pageError">
            <div>404 Page Not Found!</div>
            <Button isPrimary={true} text="Back to Home" onClick={() => navigateTo('/')} />
        </div>
        
    )
}
export default Error;