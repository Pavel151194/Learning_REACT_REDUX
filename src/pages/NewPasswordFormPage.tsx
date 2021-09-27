import React from 'react'
import { SignFormTemplate } from '../components/templates'
import { FormTitle } from '../components/atoms'
import { NewPasswordForm } from '../components/molecules'

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