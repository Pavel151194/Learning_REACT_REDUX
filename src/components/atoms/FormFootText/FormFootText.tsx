import * as React from "react"
import { memo } from "react"
import "./FormFootText.css"

interface IFormFootText {
    text: string
    link: React.ReactNode
}
  
export const FormFootText = memo( ({ text, link }: IFormFootText) => (
    <p className="form_foot_text">{text}{link}</p>
))