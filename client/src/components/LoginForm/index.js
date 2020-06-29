import React, { useState } from "react";
import { Redirect } from 'react-router'

console.log('in LoginForm')

// fakeAuth is a prop from page App.js thru Login.js
const LoginForm = (props) => {
    const [redirectToReferrer, setRedirectToReferrer] = useState({
        redirectToReferrer: false,
    });

    const login = () => {
        props.fakeAuth.authenticate(() => {
            setRedirectToReferrer({ redirectToReferrer: true })
        })
    }
    let password;

    console.log('in LoginForm')
    // handleInputChange is a prop from page Signin.js
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("HMMMM leaving CreateAccountcomp");
        // props.handleInputChange();
        console.log('Login handleSubmit', password, localStorage.getItem('password'));
        console.log(redirectToReferrer.redirectToReferrer)

        if (password === localStorage.getItem('password')) {
            login()
        } else {
            alert('Re-enter password')
        }
        console.log(redirectToReferrer.redirectToReferrer)
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        password = value;
        console.log(name, value, password)
    };

    // console.log("Try", this.state.loaded);
    // if (this.state.loaded) {
    //   return <Redirect to={"/Home"} />;
    // }
    let content = (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1>Log In</h1>
                <h4>* - Denotes Required Field</h4>
                <form onSubmit={handleSubmit}>
                    <div className="password">
                        <label htmlFor="password">Password*</label>
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                            required
                            pattern="(?=.*\d)(?=.*[!@_#$%^&*-])(?=.*[a-z])(?=.*[A-Z]).{6,}"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="createAccount">
                        <button type="submit">Create Account</button>
                    </div>
                </form>
                {redirectToReferrer.redirectToReferrer && (
                    <Redirect to={'/developer'} />
                )}
            </div>
        </div>
    );
    return content;
}

export default LoginForm;