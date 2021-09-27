import React from 'react'
import { SignFormTemplate } from '../components/templates'
import { FormTitle } from '../components/atoms'
import { ResetPasswordForm } from '../components/molecules'

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