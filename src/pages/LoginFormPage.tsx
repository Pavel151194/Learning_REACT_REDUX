import React, { useState, useEffect } from 'react'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { FormTitleLinks } from '../components/atoms/FormTitleLinks'
import { LoginForm } from '../components/molecules/LoginForm'

export const LoginFormPage = () => {
    
    return (
        <SignFormTemplate
            formTitle={<FormTitleLinks/>}
            formMain={<LoginForm/>}
        />
    )
}