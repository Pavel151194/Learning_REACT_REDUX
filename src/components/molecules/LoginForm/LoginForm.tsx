import * as React from "react"
import { memo } from "react"
import { Link} from "react-router-dom"
import { FormInput } from "../../atoms/FormInput"
import { FormButton } from "../../atoms/FormButton"
import { FormFootText } from "../../atoms/FormFootText"
import "./LoginForm.css"

interface ILoginForm {
    onClickFormButton: () => void
}

export const LoginForm = memo( ({ onClickFormButton }: ILoginForm) => (
    <main className="form">
        <FormInput
            inputTitle="Email"
            inputType="email"
        />
        <FormInput
            inputTitle="Password"
            inputType="password"
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
) )