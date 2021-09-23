import React from 'react'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { FormTitle } from '../components/atoms/FormTitle'
import { NewPasswordForm } from '../components/molecules/NewPasswordForm'

export const NewPasswordFormPage = () => {
    
    return (
        <SignFormTemplate
            formTitle={<FormTitle content={"New password"}/>}
            formMain={
                <NewPasswordForm
                    onClickFormButton={() => {}}
                />
            }
        />
    )
}