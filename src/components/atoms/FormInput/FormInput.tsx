import React, { useState, useEffect } from 'react'
import { memo } from "react"
import "./FormInput.css"

interface IFormInput {
    isValid: boolean
    inputTitle: string
    inputType: string
    value: string
    onChange: (value: string) => void
}

export const FormInput = memo( ({ isValid, inputTitle, inputType, value, onChange }: IFormInput) => (
    <label className="input">{inputTitle}
        <input
            className={isValid ? "valid" : "invalid"}
            type={inputType}
            value={value}
            onChange={event => onChange(event.target.value)}>
        </input>
        <span className={isValid ? "check_input" : "hidden"}></span>
    </label>
) )