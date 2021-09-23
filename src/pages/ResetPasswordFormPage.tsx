import React from 'react'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { FormTitle } from '../components/atoms/FormTitle'
import { ResetPasswordForm } from '../components/molecules/ResetPasswordForm'

export const ResetPasswordFormPage = () => {

    return (
        <SignFormTemplate
            formTitle={<FormTitle content={"Reset password"}/>}
            formMain={
                <ResetPasswordForm
                    onClickFormButton={() => {}}
                />
            }
        />
    )
}