import './AcceptedEffect.css';

function AcceptedEffect(props) {
    return (
        <div className="accepted-effect">
            <h1>SCORE: {props.percent}%</h1>
        </div>
    )
}

export default AcceptedEffect;