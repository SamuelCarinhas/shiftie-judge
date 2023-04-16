import React from "react";
import './LoginPage.css';
import {Logo, Login, Navbar, FollowUs} from "../../components/Components.jsx"

function LoginPage() {
    return (
        <div className="app">
            <Navbar />
            <div className="login-page">
                <Login/>
            </div>
            <FollowUs />
        </div>
    );
}

export default LoginPage;