import React, {useEffect} from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./../Buttons/Buttons.css"
import "./Login.css"
import {Link, Navigate} from "react-router-dom";

function Login() {
    const { register, handleSubmit } = useForm();
    const [errors, setErrors] = useState([]);

    const [data, setData] = useState(undefined);

    useEffect(() => {
        setData(localStorage.getItem('data'));
    }, []);

    const handleLogin = (data) => {
        fetch('http://localhost:3000/account/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                setErrors(res.errors || []);
                if(!res.errors) {
                    localStorage.setItem('data', JSON.stringify(res));
                    setData(res);
                }
            });
    }

    const [user, setUser] = useState(undefined);

    return (
        !data ?
        <div className="login">
            <h1 className="login-header">Login</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form">
                    <div className="data-div">
                        <label>Email</label>
                        <input placeholder="user@email.com" name="email" {...register('email')} />
                    </div>
                    <div className="data-div">
                        <label>Password</label>
                        <input placeholder="password" type="password" name="password" {...register('password')} />
                    </div>
                </div>

                <div className="row">
                    <button className="button">Login</button>
                    <Link to="/forgot" className="forgot">Forgot password?</Link>
                </div>

                <div className="errors">
                    <ul>
                        {
                            errors.map((err, index) => <li key={index}>{err.msg}</li>)
                        }
                    </ul>
                </div>
            </form>
        </div>
        :
        <Navigate to="/menu" />
  );
}

export default Login;