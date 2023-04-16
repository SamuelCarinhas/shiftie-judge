import "./Buttons.css"
import LandingPageImage from "./../../assets/Croods Party Time.svg";
import { Link } from "react-router-dom";

function LinkingButton(props) {
    return (
        <div className="button">
            <Link className="link" to={props.destination}>
                {props.label}
            </Link>
        </div>
        
    )
    
}

export default LinkingButton;