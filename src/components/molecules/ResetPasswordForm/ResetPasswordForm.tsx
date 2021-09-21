import * as React from "react"
import { memo } from "react"
import { Link} from "react-router-dom"
import { FormHeadText } from "../../atoms/FormHeadText"
import { FormInput } from "../../atoms/FormInput"
import { FormButton } from "../../atoms/FormButton"
import { FormFootText } from "../../atoms/FormFootText"
import "./ResetPasswordForm.css"

interface IResetPasswordForm {
    onClickFormButton: () => void
}

export const ResetPasswordForm = memo( ({ onClickFormButton }: IResetPasswordForm) => {
    const inputsState = true
    const buttonState = false

    return(
        <main className="form">
            <FormHeadText content={"Please enter the email for your account"}/>
            <FormInput
                isValid={inputsState}
                inputTitle="Email"
                inputType="email"
                value={""}
                onChange={() => {}}
            />
            <FormButton
                isDisabled={buttonState}
                onClick={onClickFormButton}
                buttonName="Reset"
            />
            <FormFootText 
                text={"Return to"}
                link={<Link to="login">login</Link>}
            />
        </main>
    )
})