import React, { useState, useEffect } from 'react'
import { Link} from "react-router-dom"
import { FormTitle } from '../components/atoms/FormTitle'
import { RegistrationForm } from '../components/molecules/RegistrationForm'
import { FormFooter } from '../components/atoms/FormFooter'

export const RegistrationFormPage = () => {
    
    return (
        <div className="sign_page">

            <FormTitle content={
                <div style={{display: "flex", gap: "26px"}}>
                    <Link to="loginForm">Login</Link>
                    <div style={{background: "#254050", border: "2px solid #254050"}}></div>
                    <Link to="registrationForm">Registration</Link>
                </div>
            }/>
            <RegistrationForm/>
            <FormFooter/>
        </div>
    )
}