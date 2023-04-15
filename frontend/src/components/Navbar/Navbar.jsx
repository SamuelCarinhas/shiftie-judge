import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"
import { Logo } from "../components";
import { useState } from "react";

function Navbar(props) {

    const userLink = (username) => {
        return "/user?username=" + username;
    }

    return (
        <>
            <div className="navbar">
                <Logo/>
                <div className="links">
                    <Link className="link" to="/courses">Courses</Link>
                    <Link className="link" to="/tournaments">Tournaments</Link>
                    <div className="link">
                        <Link className="user" to={userLink(props.username)}>{props.username}</Link>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default Navbar;