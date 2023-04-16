import React from "react";
import {Navbar, LinkingButton, FollowUs} from "../../components/Components.jsx"
import LandingPageImage from "./../../assets/Croods Party Time.svg";
import "./DecisionPage.css"

function DecisionPage() {
    
    return(
        <div className="app">
            <Navbar />
            <div className="menu-body">
                <div className="img">
                    <img src = {LandingPageImage} alt="My Happy SVG"/>
                </div>
                <div className="decision-menu">
                    <LinkingButton destination="/courses" label="Courses"/>
                    <LinkingButton destination="/tournaments" label="Tournaments"/>
                </div>
            </div>
            <FollowUs />
        </div>
    );
}

export default DecisionPage;