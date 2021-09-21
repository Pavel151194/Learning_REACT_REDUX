import React, { useState, useEffect } from 'react'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { FormTitleLinks } from '../components/atoms/FormTitleLinks'
import { RegistrationForm } from '../components/molecules/RegistrationForm'

export const RegistrationFormPage = () => {
    const inputsState = true
    
    return (
        <SignFormTemplate
            formTitle={<FormTitleLinks/>}
            formMain={
                <RegistrationForm
                    isValid={inputsState}
                    onClickFormButton={() => {}}
                />
            }
        />
    )
}