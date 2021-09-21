import React, { useState, useEffect } from 'react'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { FormTitle } from '../components/atoms/FormTitle'
import { NewPasswordForm } from '../components/molecules/NewPasswordForm'

export const NewPasswordFormPage = () => {
    const inputsState = true
    
    return (
        <SignFormTemplate
            formTitle={<FormTitle content={"New password"}/>}
            formMain={
                <NewPasswordForm
                    isValid={inputsState}
                    onClickFormButton={() => {}}
                />
            }
        />
    )
}