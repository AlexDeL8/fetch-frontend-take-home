import React from 'react';
import { Link } from 'react-router';

import Heading from '../components/Heading';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
    return (
        <div id="loginContainer">
            <Link to="/">&lt; Go Back</Link>
            <Heading size={2} text="Enter your login information" />
            <Input labelText="Name: " type="text" name="loginName" placeholderText="e.g. John Doe" required={true} />
            <Input labelText="Email: " type="email" name="loginEmail" placeholderText="e.g. example@gmail.com" required={true} />
            <Button isPrimary={true} text="Login" onClick={() => {console.log("CREDS LOGIN CLICKED")}} />
        </div>
    )
}
export default Login;