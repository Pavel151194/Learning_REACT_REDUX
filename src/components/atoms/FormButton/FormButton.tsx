import * as React from "react"
import { memo } from "react"
import "./FormButton.css"

interface IFormButton {
    isDisabled: boolean
    onClick: () => void
    buttonName: string
}

export const FormButton = memo( ({ isDisabled, onClick, buttonName }: IFormButton) => (
    <>
        {isDisabled? (
            <button disabled className="form_button" onClick = {onClick}>{buttonName}</button>
        ):(
            <button className="form_button" onClick = {onClick}>{buttonName}</button>
        )}
    </>
))