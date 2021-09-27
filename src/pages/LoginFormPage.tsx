import React from 'react'
import { SignFormTemplate } from '../components/templates'
import { FormTitleLinks } from '../components/atoms'
import { LoginForm } from '../components/molecules'

export const LoginFormPage = () => {

    return (
        <SignFormTemplate
            formTitle={<FormTitleLinks isLoginPage={true}/>}
            formMain={
                <LoginForm
                    onClickFormButton={() => {}}
                />
            }
        />
    )
}