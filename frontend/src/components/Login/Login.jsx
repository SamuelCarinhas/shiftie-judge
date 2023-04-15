import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./../Buttons/Buttons.css"
import "./Login.css"

function Login() {
    const { register, handleSubmit } = useForm();
    const handleLogin = (data) => console.log(data);

    return (
        <>
            <h1 className="loginHeader">Login</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form">
                    <div className="data-div">
                        <label>Email</label>
                        <input type="" name="email" {...register('email')} />
                    </div>
                    <div className="data-div">
                        <label>Password</label>
                        <input type="password" name="password" {...register('password')} />
                    </div>
                </div>
                
                <button className="button">Login</button>
            </form>
        </>
  );
}

export default Login;