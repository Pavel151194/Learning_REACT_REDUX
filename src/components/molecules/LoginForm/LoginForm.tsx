import React, { memo } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setLoginEmailAction, setLoginPasswordAction } from "../../../core"
import { getLoginSelector } from "../../../core/selectors/loginSelector"
import { validateEmail, validatePassword } from '../../../helpers'
import { FormInput, FormButton, FormFootText } from "../../atoms"
import "./LoginForm.css"

interface ILoginForm {
    onClickFormButton: () => void
}

export const LoginForm = memo( ({ onClickFormButton }: ILoginForm) => {
    //const history = useHistory()
    const dispatch = useDispatch()
    const { email, password } = useSelector(getLoginSelector)
    const isValidEmail = validateEmail(email)
    const isValidPassword = validatePassword(password)
    
    return (
        <main className="form">
            <FormInput
                inputTitle="Email"
                inputType="email"
                value={email}
                isValid={isValidEmail}
                onChange={(value: string) => dispatch(setLoginEmailAction(value.trim()))}
                autoFocus={true}
            />
            <FormInput
                inputTitle="Password"
                inputType="password"
                value={password}
                isValid={isValidPassword}
                onChange={(value: string) => dispatch(setLoginPasswordAction(value.trim()))}
            />
            <FormButton
                buttonName="Login"
                isDisabled={!isValidEmail || !isValidPassword}
                onClick={onClickFormButton}
            />
            <FormFootText
                text={"Forgot your password?"}
                link={<Link style={{color: "#016EFC"}} to="reset-password">Reset password</Link>}
            />
        </main>
    )
})