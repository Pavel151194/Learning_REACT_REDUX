import React, { useState, useEffect } from 'react'
import { Link} from "react-router-dom"
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { LoginForm } from '../components/molecules/LoginForm'
import { FooterSvg } from "../../src/assets/svgs"

export const LoginFormPage = () => {
    
    return (
        <SignFormTemplate
            formTitle={
                <div style={{display: "flex", gap: "26px"}}>
                    <Link to="login">Login</Link>
                    <div style={{background: "#254050", border: "2px solid #254050"}}></div>
                    <Link to="registration">Registration</Link>
                </div>
            }
            formMain={<LoginForm/>}
            formFooter={<FooterSvg/>}
        />
    )
}