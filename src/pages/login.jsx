import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router';

import Heading from '../components/Heading';
import Input from '../components/Input';
import Button from '../components/Button';
import ErrorText from '../components/ErrorText';

const Login = () => {
    const [loginName, setLoginName] = useState('')
    const [loginEmail, setLoginEmail] = useState('')
    const [loginError, setLoginError] = useState(null)
    const navigateTo = useNavigate()

    const hanldeLogin = async () => {
        setLoginError(null)
        const regex = new RegExp("[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}");
        if(loginName === '' || loginEmail === '' || !regex.test(loginEmail)) {
            setLoginError("Please enter valid credentials!")
            return
        }
        try {
            const response = await fetch("https://frontend-take-home-service.fetch.com/auth/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: loginName,
                    email: loginEmail
                })
            })
            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }
            navigateTo("/dashboard/search")
        } catch (error) {
            setLoginError(error.message);
            return
        } finally {
          console.log("login finally")
        }
    }

    return (
        <div className="centeredContainer">
            <div className="centeredContent">
                <Link className="routerLink" to="/">&lt; Go Back</Link>
                <Heading size={2} text="Enter your login information" />
                <Input
                    labelText="Name: "
                    type="text"
                    name="loginName"
                    placeholderText="e.g. John Doe"
                    required={true}
                    action={setLoginName} />
                <Input
                    labelText="Email: "
                    type="email"
                    name="loginEmail"
                    placeholderText="e.g. example@gmail.com"
                    required={true}
                    action={setLoginEmail} />
                <Button isPrimary={true} text="Login" onClick={() => hanldeLogin()} />
                <ErrorText message={loginError} />
            </div>
        </div>
    )
}
export default Login;