import React from 'react'
import { Header } from '../../molecules/Header'
import "./SignFormTemplate.css"

interface ISignFormTemplate {
    formTitle: React.ReactNode
    formMain: React.ReactNode
}

export const SignFormTemplate = ({ formTitle, formMain }: ISignFormTemplate) => (
    <div className="wrapper sign_form_template">
        <Header/>
        {formTitle}
        {formMain}
    </div>
)