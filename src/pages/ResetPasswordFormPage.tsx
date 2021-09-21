import React, { useState, useEffect } from 'react'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { FormTitle } from '../components/atoms/FormTitle'
import { ResetPasswordForm } from '../components/molecules/ResetPasswordForm'

export const ResetPasswordFormPage = () => {
    const inputsState = true

    return (
        <SignFormTemplate
            formTitle={<FormTitle content={"Reset password"}/>}
            formMain={
                <ResetPasswordForm
                    isValid={inputsState}
                    onClickFormButton={() => {}}
                />
            }
        />
    )
}