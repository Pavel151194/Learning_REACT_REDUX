import * as React from "react"
import { memo } from "react"
import { Link} from "react-router-dom"
import { validateEmail } from '../../../helpers'
import { FormInput } from "../../atoms/FormInput"
import { FormButton } from "../../atoms/FormButton"
import { FormFootText } from "../../atoms/FormFootText"
import "./LoginForm.css"

interface ILoginForm {
    isValid: boolean
    onClickFormButton: () => void
}

export const LoginForm = memo( ({ isValid, onClickFormButton }: ILoginForm) => {
    
    return (
        <main className="form">
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
                inputType="password"
                value={""}
                onChange={() => {}}
            />
            <FormButton
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