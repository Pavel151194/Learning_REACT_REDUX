import * as React from "react"
import { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { setRegistrationEmailAction, setRegistrationUsernameAction, setRegistrationPasswordAction, setRegistrationConfirmPasswordAction, sendRegistrationDataAction } from "../../../core"
import { getRegistrationSelector } from "../../../core/selectors/registrationSelector"
import { validateName, validateEmail, validatePassword, validateConfirmPassword } from "../../../helpers"
import { FormInput, FormButton, FormFootText } from "../../atoms"
import "./RegistrationForm.css"

export const RegistrationForm = memo( () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { userName, email, password, confirmPassword } = useSelector(getRegistrationSelector)
    const isValidName = validateName(userName)
    const isValidEmail = validateEmail(email)
    const isValidPassword = validatePassword(password)
    const isValidConfirmPassword = validateConfirmPassword(password, confirmPassword)

    const loginUser = () => {
        if(isValidName && isValidEmail && isValidPassword && isValidConfirmPassword){
            dispatch(sendRegistrationDataAction({
                username: userName,
                password,
                email
            }))
            history.push("/registration-confirmation")
        }
    }

    return (
        <main className="form">
            <FormInput
                inputTitle="User Name"
                inputType="text"
                value={userName}
                isValid={isValidName}
                onChange={(value: string) => dispatch(setRegistrationUsernameAction(value.trim()))}
                autoFocus={true}
            />
            <FormInput
                inputTitle="Email"
                inputType="email"
                value={email}
                isValid={isValidEmail}
                onChange={(value: string) => dispatch(setRegistrationEmailAction(value.trim()))}
            />
            <FormInput
                inputTitle="Password"
                inputType="password"
                value={password}
                isValid={isValidPassword}
                onChange={(value: string) => dispatch(setRegistrationPasswordAction(value.trim()))}
            />
            <FormInput
                inputTitle="Confirm Password"
                inputType="password"
                value={confirmPassword}
                isValid={isValidConfirmPassword}
                onChange={(value: string) => dispatch(setRegistrationConfirmPasswordAction(value.trim()))}
            />
            <FormButton
                buttonName="Login"
                isDisabled={!isValidName || !isValidEmail || !isValidPassword || !isValidConfirmPassword}
                onClick={loginUser}
            />
            <FormFootText 
                text={"If you have account, you can"}
                link={<Link to="login" style={{color: "#016EFC"}}>Login</Link>}
            />
        </main>
    )
})