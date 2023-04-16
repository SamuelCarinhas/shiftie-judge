import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";

function Logout() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        localStorage.removeItem('data');
        setLoaded(true);
    });

    return (
        loaded
        ?
        <Navigate to="/" />
        :
        undefined
    )
}

export default Logout;
