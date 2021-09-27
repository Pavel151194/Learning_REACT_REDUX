import React from 'react'
import { SignFormTemplate } from '../components/templates'
import { FormTitleLinks } from '../components/atoms'
import { RegistrationForm } from '../components/molecules'

export const RegistrationFormPage = () => {
    
    return (
        <SignFormTemplate
            formTitle={<FormTitleLinks isRegistrationPage={true}/>}
            formMain={
                <RegistrationForm/>
            }
        />
    )
}