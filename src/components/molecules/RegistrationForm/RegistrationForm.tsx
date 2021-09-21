import * as React from "react"
import { memo } from "react"
import { Link} from "react-router-dom"
import { FormInput } from "../../atoms/FormInput"
import { FormButton } from "../../atoms/FormButton"
import { FormFootText } from "../../atoms/FormFootText"
import "./RegistrationForm.css"

interface IRegistrationForm {
    isValid: boolean
    onClickFormButton: () => void
}

export const RegistrationForm = memo( ({ isValid, onClickFormButton }: IRegistrationForm) => {
    
    return (
        <main className="form">
            <FormInput
                isValid={isValid}
                inputTitle="User Name"
                inputType="text"
                value={""}
                onChange={() => {}}
            />
            <FormInput
                isValid={isValid}
                inputTitle="Email"
                inputType="email"
                value={""}
                onChange={() => {}}
            />
            <FormInput
                isValid={isValid}
                inputTitle="Password"
                inputType="text"
                value={""}
                onChange={() => {}}
            />
            <FormInput
                isValid={isValid}
                inputTitle="Confirm Password"
                inputType="text"
                value={""}
                onChange={() => {}}
            />
            <FormButton
                onClick={onClickFormButton}
                buttonName="Login"
            />
            <FormFootText 
                text={"If you have account, you can"}
                link={<Link to="login">Login</Link>}
            />
        </main>
    )
})