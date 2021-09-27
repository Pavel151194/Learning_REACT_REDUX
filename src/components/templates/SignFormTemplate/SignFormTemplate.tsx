import React, { memo } from "react"
import { Header } from '../../molecules'
import "./SignFormTemplate.css"

interface ISignFormTemplate {
    formTitle: React.ReactNode
    formMain: React.ReactNode
}

export const SignFormTemplate = memo( ({ formTitle, formMain }: ISignFormTemplate) => (
    <div className="wrapper sign_form_template">
        <Header/>
        {formTitle}
        {formMain}
    </div>
))