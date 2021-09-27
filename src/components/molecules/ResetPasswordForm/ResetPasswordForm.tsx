import React, { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link} from "react-router-dom"

import { getResetPasswordSelector } from "../../../core/selectors"
import { setResetPasswordEmailAction } from "../../../core/actions"
import { validateEmail } from "../../../helpers"
import { FormHeadText, FormInput, FormButton, FormFootText } from "../../atoms"
import "./ResetPasswordForm.css"

interface IResetPasswordForm {
    onClickFormButton: () => void
}

export const ResetPasswordForm = memo( ({ onClickFormButton }: IResetPasswordForm) => {
    const dispatch = useDispatch()
    const { email } = useSelector(getResetPasswordSelector)
    const isValidEmail = validateEmail(email)
    
    return(
        <main className="form">
            <FormHeadText content={"Please enter the email for your account"}/>
            <FormInput
                inputTitle="Email"
                inputType="email"
                value={email}
                isValid={isValidEmail}
                onChange={(value: string) => dispatch(setResetPasswordEmailAction(value.trim()))}
                autoFocus={true}
            />
            <FormButton
                isDisabled={!isValidEmail}
                onClick={onClickFormButton}
                buttonName="Reset"
            />
            <FormFootText 
                text={"Return to"}
                link={<Link style={{color: "#016EFC"}} to="login">login</Link>}
            />
        </main>
    )
})