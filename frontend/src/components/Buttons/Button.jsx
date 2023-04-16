import "./Buttons.css"

function Button(props) {
    return (
        <button className="button" type="button" onClick={props.onClick}>{props.label}</button>
    )
    
}

export default Button;