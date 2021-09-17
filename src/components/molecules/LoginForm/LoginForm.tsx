import * as React from "react"
import { memo } from "react"
import { Link} from "react-router-dom"
import { FormInput } from "../../atoms/FormInput"
import { FormButton } from "../../atoms/FormButton"
import { FormFootText } from "../../atoms/FormFootText"
import "./LoginForm.css"

export const LoginForm = memo( () => (
    <section className="form">
        <FormInput
            inputTitle="Email"
            inputType="email"
        />
        <FormInput
            inputTitle="Password"
            inputType="password"
        />
        <FormButton buttonName="Login"/>
        <FormFootText content={
            <div style={{display: "flex", gap: "5px"}}>
                <p>Forgot your password?</p>
                <Link style={{color: "#016EFC", fontWeight: "bold", letterSpacing: "0.03em"}} to="resetPasswordForm">Reset password</Link>
            </div>
        }/>
    </section>
) )