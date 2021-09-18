import React from 'react'
import "./SignFormTemplate.css"

interface ISignFormTemplate {
    formHeader: React.ReactNode
    formTitle: React.ReactNode
    formMain: React.ReactNode
}

export const SignFormTemplate = ({ formHeader, formTitle, formMain }: ISignFormTemplate) => (
    <div className="wrapper sign_form_template">
        {formHeader}
        {formTitle}
        {formMain}
    </div>
)