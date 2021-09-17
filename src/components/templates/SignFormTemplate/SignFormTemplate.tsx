import React from 'react'
import "./SignFormTemplate.css"

interface ISignFormTemplate {
    formTitle: React.ReactNode
    formMain: React.ReactNode
    formFooter: React.ReactNode
}

export const SignFormTemplate = ({ formTitle, formMain, formFooter }: ISignFormTemplate) => (
    <main className="sign_form_template">
        <h2>{formTitle}</h2>
        <section>{formMain}</section>
        <section className="form_footer">{formFooter}</section>
    </main>
)