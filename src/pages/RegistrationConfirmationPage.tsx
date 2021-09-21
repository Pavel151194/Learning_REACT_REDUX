import React, { useState, useEffect } from 'react'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { FormTitle } from '../components/atoms/FormTitle'
import { FormButton } from '../components/atoms/FormButton'

export const RegistrationConfirmationPage = () => {
    const email = "test@gmail.com"

    return (
        <SignFormTemplate
            formTitle={<FormTitle content={"Registration Confirmation"}/>}
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