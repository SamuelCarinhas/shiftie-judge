import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"
import { Logo } from "../components";
import { useState } from "react";

function Navbar(props) {

    const [data, setData] = useState(undefined);

    useEffect(() => {
        let aux = localStorage.getItem('data');
        console.log(aux);
        if(aux) {
            console.log('VALID', aux);
            setData(JSON.parse(aux));
        }
    }, []);

    return (
        <>
            <div className="navbar">
                <Logo/>
                <div className="links">
                    <Link className="link" to="/courses">Courses</Link>
                    <Link className="link" to="/tournament">Tournaments</Link>
                    {
                        data ?
                        <div className="link user">
                            <FontAwesomeIcon icon={faUser} />
                            <Link className="user" to="/logout">{data.user.email}</Link>
                        </div>
                        :
                        undefined
                    }
                </div>
            </div>
        </>
        
    );
}

export default Navbar;