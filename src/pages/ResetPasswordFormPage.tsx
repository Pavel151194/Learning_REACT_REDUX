import React, { useState, useEffect } from 'react'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { Header } from '../components/molecules/Header'
import { ResetPasswordForm } from '../components/molecules/ResetPasswordForm'

export const ResetPasswordFormPage = () => {
    
    return (
        <SignFormTemplate
            formHeader={<Header/>}
            formTitle={<h2 style={{color: "#016EFC"}}>Reset password</h2>}
            formMain={<ResetPasswordForm/>}
        />
    )
}