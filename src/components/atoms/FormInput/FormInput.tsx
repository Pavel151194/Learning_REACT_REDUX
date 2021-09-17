import * as React from "react"
import { memo } from "react"
import "./FormInput.css"

interface IFormInput {
    inputType: string
    inputTitle: string
}

export const FormInput = memo( ({ inputType, inputTitle }: IFormInput) => (
    <label className="input">{inputTitle}
        <input type={inputType}></input>
    </label>
) )