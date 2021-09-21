import * as React from "react"
import { memo } from "react"
import { Link} from "react-router-dom"
import { FormInput } from "../../atoms/FormInput"
import { FormButton } from "../../atoms/FormButton"
import { FormFootText } from "../../atoms/FormFootText"
import "./RegistrationForm.css"

export const RegistrationForm = memo( () => (
    <main className="form">
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
        <FormFootText 
            text={"If you have account, you can"}
            link={<Link to="login">Login</Link>}
        />
    </main>
) )