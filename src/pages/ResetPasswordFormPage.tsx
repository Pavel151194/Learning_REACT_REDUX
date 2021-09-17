import React, { useState, useEffect } from 'react'
import { Link} from "react-router-dom"
import { FormTitle } from '../components/atoms/FormTitle'
import { ResetPasswordForm } from '../components/molecules/ResetPasswordForm'
import { FormFooter } from '../components/atoms/FormFooter'

export const ResetPasswordFormPage = () => {
    
    return (
        <div className="sign_page">
            <FormTitle content={"Reset password"}/>
            <ResetPasswordForm/>
            <FormFooter/>
        </div>
    )
}