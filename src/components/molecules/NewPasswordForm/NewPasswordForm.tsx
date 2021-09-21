import * as React from "react"
import { memo } from "react"
import { FormInput } from "../../atoms/FormInput"
import { FormButton } from "../../atoms/FormButton"
import { FormHeadText } from "../../atoms/FormHeadText"
import "./NewPasswordForm.css"

interface INewPasswordForm {
    isValid: boolean
    onClickFormButton: () => void
}

export const NewPasswordForm = memo( ({ isValid, onClickFormButton }: INewPasswordForm) => {

    return (
        <main className="form">
            <FormHeadText content={"Please enter new password"}/>
            <FormInput
                isValid={isValid}
                inputTitle="New password"
                inputType="password"
                value={""}
                onChange={() => {}}
            />
            <FormInput
                isValid={isValid}
                inputTitle="Confirm password"
                inputType="password"
                value={""}
                onChange={() => {}}
            />
            <FormButton
                onClick={onClickFormButton}
                buttonName="Set password"
            />
        </main>
    )
})