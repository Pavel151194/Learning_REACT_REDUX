import React, { useState, useEffect } from 'react'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { FormTitle } from '../components/atoms/FormTitle'
import { FormButton } from '../components/atoms/FormButton'

export const PasswordConfirmedPage = () => {

    return (
        <SignFormTemplate
            formTitle={<FormTitle content={"Success"}/>}
            formMain={
                <main className="sign_form_template_main">
                    <p>Your password has been changed</p>
                    <FormButton
                        onClick={() => {}}
                        buttonName={"Login"}
                    />
                </main>
            }
        />
    )
}