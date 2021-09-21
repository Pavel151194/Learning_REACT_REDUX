import * as React from "react"
import { memo } from "react"
import "./FormInput.css"

interface IFormInput {
    isValid: boolean
    inputTitle: string
    inputType: string
    value: string
    onChange: () => void
}

export const FormInput = memo( ({ isValid, inputTitle, inputType, value, onChange }: IFormInput) => (
    <label className="input">{inputTitle}
        <input
            className={isValid? "valid" : "invalid"}
            type={inputType}
            value={value}
            onChange={onChange}>
        </input>
    </label>
) )