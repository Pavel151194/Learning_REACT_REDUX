import * as React from "react"
import { memo } from "react"
import { Link} from "react-router-dom"
import { FormInput } from "../../atoms/FormInput"
import { FormButton } from "../../atoms/FormButton"
import { FormFootText } from "../../atoms/FormFootText"
import "./RegistrationForm.css"

interface IRegistrationForm {
    onClickFormButton: () => void
}

export const RegistrationForm = memo( ({ onClickFormButton }: IRegistrationForm) => {
    const inputsState = true
    const buttonState = false

    return (
        <main className="form">
            <FormInput
                isValid={inputsState}
                inputTitle="User Name"
                inputType="text"
                value={""}
                onChange={() => {}}
            />
            <FormInput
                isValid={inputsState}
                inputTitle="Email"
                inputType="email"
                value={""}
                onChange={() => {}}
            />
            <FormInput
                isValid={inputsState}
                inputTitle="Password"
                inputType="text"
                value={""}
                onChange={() => {}}
            />
            <FormInput
                isValid={inputsState}
                inputTitle="Confirm Password"
                inputType="text"
                value={""}
                onChange={() => {}}
            />
            <FormButton
                isDisabled={buttonState}
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