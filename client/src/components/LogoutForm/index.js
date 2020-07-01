import React, { useState } from "react";
import { Redirect } from 'react-router'
import './style.css';

console.log('in LoginForm')

// handleInputChange is a prop from page Signin.js
const LogoutForm = () => {
    // const { devData } = useContext(DevDataContext);
    // const { setup } = useContext(SetupContext);
    const [state, setState] = useState({
        loggedIn: null
    });

    console.log('LogoutForm, LS/state=login: ', localStorage.getItem("jtsy-login"), state.loggedin)
    // handleInputChange is a prop from page Signin.js
    const logout = () => {
        console.log('Logout logout');

        localStorage.setItem("jtsy-login", "false");
        setState({
            loggedIn: false
        })
    };

    const developer = () => {
        console.log('Logout developer');
        setState({
            loggedIn: true
        })
    };

    let content = (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1>Log Out</h1>
                <div
                    className="logoutButton"
                    onClick={logout}
                >
                    <button type="submit">Confirm</button>
                </div>
                <div
                    className="createAccount"
                    onClick={developer}
                >
                    <button type="submit">Return</button>
                </div>
                {state.loggedIn === false && (
                    <Redirect to={'/'} />
                )}
                {state.loggedIn && (
                    <Redirect to={'/developer'} />
                )}
            </div>
        </div>
    );
    return content;
}

export default LogoutForm;
