import React from "react";
import { Navbar, LinkingButton } from "../../components/components.jsx"
import LandingPageImage from "./../../assets/Croods Party Time.svg";
import "./DecisionPage.css"

function DecisionPage() {
    
    return(
        <>
            <Navbar username="joao"/>
            <div className="menu-body">
                <div className="img">
                    <img src = {LandingPageImage} alt="My Happy SVG"/>
                </div>
                <div className="decision-menu">
                    <LinkingButton destination="/courses" label="Courses"/>
                    <LinkingButton destination="/tournaments" label="Tournaments"/>
                </div>
            </div>
        </>
    );
}

export default DecisionPage;