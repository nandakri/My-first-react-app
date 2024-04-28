import React from 'react';
import './Main.css';
import { Routes, Route, Link } from "react-router-dom";
import Register from '../register/Register';
import Login from '../login/Login';

const Main = () => {
    return (
        <>
            <div className="main-container1">
                <div className="header1">
                    <div className="logo1">NMV APP</div>
                    <div className="buttons1">
                        <Link to="/Login"><button className="login-btn1">Login</button></Link>
                        <Link to="/Register"><button className="signup-btn1">Sign Up</button></Link>
                    </div>
                </div>
                <div className="content1">
                    <h1 id='m1'>Welcome to my React App!!!</h1>
                    <div className='mainlogo'></div>
                    <div className='mar'><marquee>WELCOME TO OUR WEBSITE !!!...LOGIN IF YOU HAVE AN ACCOUNT...ELSE REGISTER NOW BY CLICKING SIGNUP BUTTON ABOVE...</marquee></div>
                </div>
            </div>
            <Routes>
                <Route path='login' element={<Login />}></Route>
                <Route path='register' element={<Register />}></Route>
            </Routes>
        </>
    )
}

export default Main