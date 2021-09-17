import React, { useState, useEffect } from 'react'
import { Link} from "react-router-dom"
import { FormTitle } from '../components/atoms/FormTitle'
import { LoginForm } from '../components/molecules/LoginForm'
import { FormFooter } from '../components/atoms/FormFooter'

export const LoginFormPage = () => {
    
    return (
        <div className="sign_page">

            <FormTitle content={
                <div style={{display: "flex", gap: "26px"}}>
                    <Link to="loginForm">Login</Link>
                    <div style={{background: "#254050", border: "2px solid #254050"}}></div>
                    <Link to="registrationForm">Registration</Link>
                </div>
            }/>
            <LoginForm/>
            <FormFooter/>
        </div>
    )
}