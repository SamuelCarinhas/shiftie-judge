import React, { useState } from "react";
import "./LandingPage.css"
import LandingPageImage from "./../../assets/Croods Party Time.svg";
import { FollowUs, LinkingButton, Navbar } from "../../components/Components.jsx"


function LandingPage(props) {
    const [loggedIn, setLoggedIn] = useState(false);

    return(
        <div className="app">
            <Navbar />
            <div className="landing-page">
                <div className="section left">
                    <div className="infos">
                        <h1>The platform for your University work</h1>
                        <p>This judge allows you to host your
                            programming contests and create
                            online exams with automatic grading
                        </p>
                    </div>
                    {
                        loggedIn === false
                        ?
                        <LinkingButton label="Login" destination="/login"></LinkingButton>
                        :
                        <div/>
                    }
                    
                </div>
                <div className="section">
                    <div className="img">
                        <img src = {LandingPageImage} alt="My Happy SVG"/>
                    </div>
                </div>

            </div>
            <FollowUs/>
        </div>
    );
}

export default LandingPage;