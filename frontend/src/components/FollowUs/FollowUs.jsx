import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./FollowUs.css"

function FollowUs() {
    return (
        <div className="follow-items">
            <p>Follow us</p>
            <a href="https://www.instagram.com/" target="_blank">
                <FontAwesomeIcon className="fontAwesomeIcon" icon={faInstagram}/>
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
                <FontAwesomeIcon className="fontAwesomeIcon" icon={faLinkedinIn} />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
                <FontAwesomeIcon className="fontAwesomeIcon" icon={faYoutube} />
            </a>
        </div>
    )
}

export default FollowUs;