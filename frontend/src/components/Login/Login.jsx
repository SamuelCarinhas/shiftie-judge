import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./../Buttons/Buttons.css"
import "./Login.css"
import {Link} from "react-router-dom";

function Login() {
    const { register, handleSubmit } = useForm();
    const handleLogin = (data) => console.log(data);

    return (
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
                    <Link to="/forgot">Forgot password?</Link>
                </div>
            </form>
        </div>
  );
}

export default Login;