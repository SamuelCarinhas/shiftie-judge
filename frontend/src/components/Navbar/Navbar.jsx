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
                    {
                        props.courses_link ? (
                            <Link className="link" to={props.courses_link}>Courses</Link>
                        ) : (
                            <></>
                        )
                    }
                    {
                        props.tournaments_link ? (
                            <Link className="link" to={props.tournaments_link}>Tournaments</Link>
                        ) : (
                            <></>
                        )
                    }
                    <div className="link">
                        <Link className="user" to={userLink(props.username)}>{props.username}</Link>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default Navbar;