import React from 'react'
import { useHistory } from 'react-router-dom'
import { SignFormTemplate } from '../components/templates'
import { FormTitle, FormButton } from '../components/atoms'

export const RegistrationConfirmationPage = () => {
    const email = "test@gmail.com"
    const buttonState = false

    const history = useHistory()
    const navigateTo = (path: string) => history.push(path)

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
                    <FormButton
                        isDisabled={buttonState}
                        onClick={() => navigateTo("/")}
                        buttonName={"Home"}
                    />
                </main>
            }
        />
    )
}