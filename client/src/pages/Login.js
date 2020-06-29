import React from "react";
import LoginForm from "../components/LoginForm";
import HomeNav from "../components/HomeNav";
// import "./settings.css";

function Login(props) {
    console.log('in /pages/Login.js')


    return (
        <div>
            <HomeNav />
            <LoginForm fakeAuth={props.fakeAuth}></LoginForm>
        </div>
    );

}

export default Login;