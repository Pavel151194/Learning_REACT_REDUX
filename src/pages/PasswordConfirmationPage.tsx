import React, { useState, useEffect } from 'react'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { Header } from '../components/molecules/Header'
import { FormButton } from '../components/atoms/FormButton'

export const PasswordConfirmationPage = () => {
    const email = "test@gmail.com"

    return (
        <SignFormTemplate
            formHeader={<Header/>}
            formTitle={<h2 style={{color: "#016EFC"}}>Reset password</h2>}
            formMain={
                <main className="sign_form_template_main">
                    <p>
                        You will receive an email 
                        <span> {email} </span>
                        with a link to reset your password
                    </p>
                    <FormButton buttonName={"Home"}/>
                </main>
            }
        />
    )
}