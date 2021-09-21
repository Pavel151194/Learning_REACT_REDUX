import React, { useState, useEffect } from 'react'
import { validateEmail } from '../../src//helpers'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { FormTitleLinks } from '../components/atoms/FormTitleLinks'
import { LoginForm } from '../components/molecules/LoginForm'

export const LoginFormPage = () => {
    const inputsState = true

    return (
        <SignFormTemplate
            formTitle={<FormTitleLinks/>}
            formMain={
                <LoginForm
                    onClickFormButton={() => {}}
                />
            }
        />
    )
}