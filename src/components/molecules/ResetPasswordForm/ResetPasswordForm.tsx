import * as React from "react"
import { memo } from "react"
import { Link} from "react-router-dom"
import { FormHeadText, FormInput, FormButton,FormFootText  } from "../../atoms"
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
                link={<Link style={{color: "#016EFC"}} to="login">login</Link>}
            />
        </main>
    )
})