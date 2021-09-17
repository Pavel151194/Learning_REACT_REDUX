import React, { useState, useEffect } from 'react'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { ResetPasswordForm } from '../components/molecules/ResetPasswordForm'
import { FooterSvg } from "../../src/assets/svgs"

export const ResetPasswordFormPage = () => {
    
    return (
        <SignFormTemplate
            formTitle={"Reset password"}
            formMain={<ResetPasswordForm/>}
            formFooter={<FooterSvg/>}
        />
    )
}