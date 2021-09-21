import * as React from "react"
import { memo } from "react"
import "./FormButton.css"

interface IFormButton {
    onClick: () => void
    buttonName: string
}

export const FormButton = memo( ({ onClick, buttonName }: IFormButton) => (
    <button className="form_button" onClick = {() => onClick()}>{buttonName}</button>
) )