import * as React from "react"
import { memo } from "react"
import "./FormButton.css"

interface IFormButton {
    buttonName: string
}

export const FormButton = memo( ({ buttonName }: IFormButton) => (
    <button className="form_button">{buttonName}</button>
) )