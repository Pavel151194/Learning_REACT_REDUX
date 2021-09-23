import React, { useState, useEffect } from 'react'
import { memo } from "react"
import "./FormInput.css"

interface IFormInput {
    isValid: boolean
    inputTitle: string
    inputType: string
    value: string
    onChange: (value: string) => void
    autoFocus?: boolean
}

export const FormInput = memo( ({ isValid, inputTitle, inputType, value, onChange, autoFocus }: IFormInput) => (
    <label className="input">{inputTitle}
        <input
            className={isValid ? "valid" : "invalid"}
            type={inputType}
            value={value}
            onChange={event => onChange(event.target.value)}
            autoFocus={autoFocus}>
        </input>
        <span className={isValid ? "input_is_valid" : "hidden"}></span>
    </label>
) )