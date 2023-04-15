import React from "react";
import "./LandingPage.css"
import LandingPageImage from "./../../assets/Croods Party Time.svg";
import { FollowUs, LinkingButton, Navbar } from "../../components/components.jsx"

function LandingPage() {
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
                    <LinkingButton label="Login" destination="/login"></LinkingButton>
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