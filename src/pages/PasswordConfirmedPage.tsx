import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { FormTitle } from '../components/atoms/FormTitle'
import { FormButton } from '../components/atoms/FormButton'

export const PasswordConfirmedPage = () => {
    const history = useHistory()
    const navigateTo = (path: string) => history.push(path)

    return (
        <SignFormTemplate
            formTitle={<FormTitle content={"Success"}/>}
            formMain={
                <main className="sign_form_template_main">
                    <p>Your password has been changed</p>
                    <FormButton
                        onClick={() => navigateTo("/login")}
                        buttonName={"Login"}
                    />
                </main>
            }
        />
    )
}