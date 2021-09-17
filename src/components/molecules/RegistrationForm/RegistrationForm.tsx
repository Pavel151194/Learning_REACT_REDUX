import * as React from "react"
import { memo } from "react"
import { Link} from "react-router-dom"
import { FormInput } from "../../atoms/FormInput"
import { FormButton } from "../../atoms/FormButton"
import { FormFootText } from "../../atoms/FormFootText"
import "./RegistrationForm.css"

export const RegistrationForm = memo( () => (
    <div className="form">
        <FormInput
            inputTitle="User Name"
            inputType="text"
        />
        <FormInput
            inputTitle="Email"
            inputType="email"
        />
        <FormInput
            inputTitle="Password"
            inputType="text"
        />
        <FormInput
            inputTitle="Confirm Password"
            inputType="text"
        />
        <FormButton buttonName="Login"/>
        <FormFootText content={
            <div style={{display: "flex", gap: "5px"}}>
                <p>If you have account, you can</p>
                <Link style={{color: "#016EFC", fontWeight: "bold", letterSpacing: "0.03em"}} to="login">Login</Link>
            </div>
        }/>
    </div>
) )