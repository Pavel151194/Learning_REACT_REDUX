import React, { useState, useEffect } from 'react'
import { memo } from "react"
import { Link} from "react-router-dom"
import { validateEmail, validatePassword } from '../../../helpers'
import { FormInput } from "../../atoms/FormInput"
import { FormButton } from "../../atoms/FormButton"
import { FormFootText } from "../../atoms/FormFootText"
import "./LoginForm.css"

interface ILoginForm {
    onClickFormButton: () => void
}

export const LoginForm = memo( ({ onClickFormButton }: ILoginForm) => {
    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")

    const [isEmailValid, setEmailValid] = useState(true)
    const [isPasswordValid, setPasswordValid] = useState(true)

    const [isButtonDisabled, setButtonState] = useState(false)

    const onChangeEmail = (email: string) => {
        setEmailValue(email)
        validateEmail(email) ? setEmailValid(true) : setEmailValid(false)
    }
    const onChangePassword = (password: string) => {
        setPasswordValue(password)
        validatePassword(password) ? setPasswordValid(true) : setPasswordValid(false)
    }

    return (
        <main className="form">
            <FormInput
                inputTitle="Email"
                inputType="email"
                value={emailValue}
                isValid={isEmailValid}
                onChange={onChangeEmail}
                autoFocus={true}
            />
            <FormInput
                inputTitle="Password"
                inputType="password"
                value={passwordValue}
                isValid={isPasswordValid}
                onChange={onChangePassword}
            />
            <FormButton
                buttonName="Login"
                isDisabled={isButtonDisabled}
                onClick={onClickFormButton}
            />
            <FormFootText
                text={"Forgot your password?"}
                link={<Link to="reset-password">Reset password</Link>}
            />
        </main>
    )
})