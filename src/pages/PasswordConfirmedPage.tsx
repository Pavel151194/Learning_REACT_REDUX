import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { FormTitle } from '../components/atoms/FormTitle'
import { FormButton } from '../components/atoms/FormButton'

export const PasswordConfirmedPage = () => {
    const history = useHistory()
    const navigateTo = (path: string) => history.push(path)
    const buttonState = false

    return (
        <SignFormTemplate
            formTitle={<FormTitle content={"Success"}/>}
            formMain={
                <main className="sign_form_template_main">
                    <p>Your password has been changed</p>
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