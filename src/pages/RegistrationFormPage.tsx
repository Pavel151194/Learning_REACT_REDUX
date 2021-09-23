import React from 'react'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { FormTitleLinks } from '../components/atoms/FormTitleLinks'
import { RegistrationForm } from '../components/molecules/RegistrationForm'

export const RegistrationFormPage = () => {
    
    return (
        <SignFormTemplate
            formTitle={<FormTitleLinks isRegistrationPage={true}/>}
            formMain={
                <RegistrationForm
                    onClickFormButton={() => {}}
                />
            }
        />
    )
}