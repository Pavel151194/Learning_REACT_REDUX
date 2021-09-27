import React from 'react'
import { useHistory } from 'react-router-dom'
import { SignFormTemplate } from '../components/templates'
import { FormTitle, FormButton } from '../components/atoms'

export const EmailConfirmedPage = () => {
    const history = useHistory()
    const navigateTo = (path: string) => history.push(path)
    const buttonState = false

    return (
        <SignFormTemplate
            formTitle={<FormTitle content={"Success"}/>}
            formMain={
                <main className="sign_form_template_main">
                    <p>Email confirmed.<br/>Your registration is now completed</p>
                    <FormButton
                        isDisabled={buttonState}
                        onClick={() => navigateTo("/login")}
                        buttonName={"Login"}
                    />
                </main>
            }
        />
    )
}