import * as React from "react"
import { memo } from "react"
import { Link} from "react-router-dom"
import { validateEmail } from '../../../helpers'
import { FormInput } from "../../atoms/FormInput"
import { FormButton } from "../../atoms/FormButton"
import { FormFootText } from "../../atoms/FormFootText"
import "./LoginForm.css"

interface ILoginForm {
    onClickFormButton: () => void
}

export const LoginForm = memo( ({ onClickFormButton }: ILoginForm) => {
    const inputsState = true
    const buttonState = false

    return (
        <main className="form">
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
                inputType="password"
                value={""}
                onChange={() => {}}
            />
            <FormButton
                isDisabled={buttonState}
                onClick={onClickFormButton}
                buttonName="Login"
            />
            <FormFootText
                text={"Forgot your password?"}
                link={<Link to="reset-password">Reset password</Link>}
            />
        </main>
    )
})