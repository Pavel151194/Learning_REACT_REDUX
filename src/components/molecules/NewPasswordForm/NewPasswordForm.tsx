import * as React from "react"
import { memo } from "react"
import { FormInput } from "../../atoms/FormInput"
import { FormButton } from "../../atoms/FormButton"
import { FormHeadText } from "../../atoms/FormHeadText"
import "./NewPasswordForm.css"

interface INewPasswordForm {
    onClickFormButton: () => void
}

export const NewPasswordForm = memo( ({ onClickFormButton }: INewPasswordForm) => {
    const inputsState = true
    const buttonState = false

    return (
        <main className="form">
            <FormHeadText content={"Please enter new password"}/>
            <FormInput
                isValid={inputsState}
                inputTitle="New password"
                inputType="password"
                value={""}
                onChange={() => {}}
            />
            <FormInput
                isValid={inputsState}
                inputTitle="Confirm password"
                inputType="password"
                value={""}
                onChange={() => {}}
            />
            <FormButton
                isDisabled={buttonState}
                onClick={onClickFormButton}
                buttonName="Set password"
            />
        </main>
    )
})