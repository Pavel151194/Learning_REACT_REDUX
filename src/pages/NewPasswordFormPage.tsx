import React, { useState, useEffect } from 'react'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { Header } from '../components/molecules/Header'
import { NewPasswordForm } from '../components/molecules/NewPasswordForm'

export const NewPasswordFormPage = () => {
    
    return (
        <SignFormTemplate
            formHeader={<Header/>}
            formTitle={<h2 style={{color: "#016EFC"}}>New password</h2>}
            formMain={<NewPasswordForm/>}
        />
    )
}