import React from 'react'
import { useHistory } from 'react-router-dom'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { FormTitle } from '../components/atoms/FormTitle'
import { FormButton } from '../components/atoms/FormButton'

export const PasswordConfirmationPage = () => {
    const email = "test@gmail.com"
    const buttonState = false

    const history = useHistory()
    const navigateTo = (path: string) => history.push(path)

    return (
        <SignFormTemplate
            formTitle={<FormTitle content={"Reset password"}/>}
            formMain={
                <main className="sign_form_template_main">
                    <p>
                        You will receive an email 
                        <span> {email} </span>
                        with a link to reset your password
                    </p>
                    <FormButton
                        isDisabled={buttonState}
                        onClick={() => navigateTo("/login")}
                        buttonName={"Home"}
                    />
                </main>
            }
        />
    )
}