import React from "react";
import "./Logo.css"
import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link className="logo" to="/">ShiftieJudge.</Link>
    );
};

export default Logo;