import * as React from "react"
import { memo } from "react"
import { FormInput } from "../../atoms/FormInput"
import { FormButton } from "../../atoms/FormButton"
import { FormHeadText } from "../../atoms/FormHeadText"
import "./NewPasswordForm.css"

export const NewPasswordForm = memo( () => (
    <main className="form">
        <FormHeadText content={"Please enter new password"}/>
        <FormInput
            inputTitle="New password"
            inputType="password"
        />
        <FormInput
            inputTitle="Confirm password"
            inputType="password"
        />
        <FormButton buttonName="Set password"/>
    </main>
) )