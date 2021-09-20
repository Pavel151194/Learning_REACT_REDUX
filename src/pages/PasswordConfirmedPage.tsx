import React, { useState, useEffect } from 'react'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { Header } from '../components/molecules/Header'
import { FormButton } from '../components/atoms/FormButton'

export const PasswordConfirmedPage = () => {

    return (
        <SignFormTemplate
            formHeader={<Header/>}
            formTitle={<h2 style={{color: "#016EFC"}}>Success</h2>}
            formMain={
                <main className="sign_form_template_main">
                    <p>Your password has been changed</p>
                    <FormButton buttonName={"Login"}/>
                </main>
            }
        />
    )
}