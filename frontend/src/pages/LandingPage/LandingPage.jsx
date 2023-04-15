import React from "react";
import { Logo, FollowUs, Button, LinkingButton } from "../../components/components.jsx"
import "./LandingPage.css"
import LandingPageImage from "./../../assets/Croods Party Time.svg";
import { Link } from "react-router-dom";

function LandingPage() {
    return(
        <>
        <Logo/>
        <div className="body">
            <div className="left-section">
                <div className="infos">
                    <h1>The platform for your University work</h1>
                    <p>This judge allows you to host your
                        programming contests and create
                        online exams with automatic grading
                    </p>    
                </div>
                {/* TODO: Dar stilling disto (: -> Podes criancar uma class LinkButton para deixares isto mais generico*/}
                <LinkingButton label="Login" destination="/login"></LinkingButton>
            </div>
            <div className="right-section">
                <div className="img">
                    <img src = {LandingPageImage} alt="My Happy SVG"/>
                </div>
            </div>
            
        </div>
        <FollowUs/>
        </>
        
    );
}

export default LandingPage;