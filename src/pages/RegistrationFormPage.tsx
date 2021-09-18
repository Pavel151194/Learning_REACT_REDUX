import React, { useState, useEffect } from 'react'
import { Link} from "react-router-dom"
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { Header } from '../components/molecules/Header'
import { RegistrationForm } from '../components/molecules/RegistrationForm'

export const RegistrationFormPage = () => {
    
    return (
        <SignFormTemplate
            formHeader={<Header/>}
            formTitle={
                <h2 style={{display: "flex", gap: "26px"}}>
                    <Link to="login">Login</Link>
                    <div style={{background: "#254050", border: "2px solid #254050"}}></div>
                    <Link to="registration">Registration</Link>
                </h2>
            }
            formMain={<RegistrationForm/>}
        />
    )
}