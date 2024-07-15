/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './LoginSignUp.css'
import user_icon from '../Asset and images/person.png'
import email_icon from '../Asset and images/email.png'
import password_icon from '../Asset and images/password.png'

const LoginSignUp = () => {

    const [action,setAction]= useState("Sign Up")

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className={action==='Login'?"input hide":"input"}>
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name'/>
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email Id'/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password'/>
                </div>
                <div className={action==='Sign Up'?"forgot-password hide":"forgot-password"}>Forgot Password? <span>Click Here!</span></div>
                <div className="submit-container">
                    <div onClick={()=>setAction("Sign Up")} className={action==='Login'?"submit gray":"submit"}>Sign Up</div>
                    <div onClick={()=>setAction("Login")} className={action==='Sign Up'?"submit gray":"submit"}>Login</div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignUp
