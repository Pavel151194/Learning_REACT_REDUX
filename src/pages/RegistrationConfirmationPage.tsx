import React, { useState, useEffect } from 'react'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { Header } from '../components/molecules/Header'
import { FormButton } from '../components/atoms/FormButton'

export const RegistrationConfirmationPage = () => {
    const email = "test@gmail.com"

    return (
        <SignFormTemplate
            formHeader={<Header/>}
            formTitle={<h2 style={{color: "#016EFC"}}>Registration Confirmation</h2>}
            formMain={
                <main className="sign_form_template_main">
                    <p>
                        Please activate your account with the activation link in the email
                        <span> {email} </span>
                        Please, check your email
                    </p>
                    <FormButton buttonName={"Home"}/>
                </main>
            }
        />
    )
}