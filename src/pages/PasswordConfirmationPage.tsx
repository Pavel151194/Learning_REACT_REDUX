import React, { useState, useEffect } from 'react'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { FormTitle } from '../components/atoms/FormTitle'
import { FormButton } from '../components/atoms/FormButton'

export const PasswordConfirmationPage = () => {
    const email = "test@gmail.com"

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
                        onClick={() => {}}
                        buttonName={"Home"}
                    />
                </main>
            }
        />
    )
}