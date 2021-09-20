import React, { useState, useEffect } from 'react'
import { SignFormTemplate } from '../components/templates/SignFormTemplate/SignFormTemplate'
import { Header } from '../components/molecules/Header'
import { FormButton } from '../components/atoms/FormButton'

export const EmailConfirmedPage = () => {

    return (
        <SignFormTemplate
            formHeader={<Header/>}
            formTitle={<h2 style={{color: "#016EFC"}}>Success</h2>}
            formMain={
                <main className="sign_form_template_main">
                    <p>Email confirmed.<br/>Your registration is now completed</p>
                    <FormButton buttonName={"Login"}/>
                </main>
            }
        />
    )
}