import * as React from "react"
import { memo } from "react"
import { Link} from "react-router-dom"
import { FormInput } from "../../atoms/FormInput"
import { FormButton } from "../../atoms/FormButton"
import { FormFootText } from "../../atoms/FormFootText"
import "./ResetPasswordForm.css"
import { FormHeadText } from "../../atoms/FormHeadText"

export const ResetPasswordForm = memo( () => (
    <main className="form">
        <FormHeadText content={"Please enter the email for your account"}/>
        <FormInput
            inputTitle="Email"
            inputType="email"
        />
        <FormButton buttonName="Reset"/>
        <FormFootText 
            text={"Return to"}
            link={<Link to="login">login</Link>}
        />
    </main>
) )