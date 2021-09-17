import * as React from "react"
import { memo } from "react"
import { Link} from "react-router-dom"
import { FormInput } from "../../atoms/FormInput"
import { FormButton } from "../../atoms/FormButton"
import { FormFootText } from "../../atoms/FormFootText"
import "./ResetPasswordForm.css"
import { FormHeadText } from "../../atoms/FormHeadText"

export const ResetPasswordForm = memo( () => (
    <div className="form">
        <FormHeadText content={"Please enter the email for your account"}/>
        <FormInput
            inputTitle="Email"
            inputType="email"
        />
        <FormButton buttonName="Reset"/>
        <FormFootText content={
            <div style={{display: "flex", gap: "5px"}}>
                <p>Return to</p>
                <Link style={{color: "#016EFC", fontWeight: "bold", letterSpacing: "0.03em"}} to="login">login</Link>
            </div>
        }/>
    </div>
) )