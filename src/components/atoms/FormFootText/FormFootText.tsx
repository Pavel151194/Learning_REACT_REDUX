import * as React from "react"
import { Link} from "react-router-dom"
import { memo } from "react"
import "./FormFootText.css"

interface IFormFootText {
    content: JSX.Element | string;
}
  
export const FormFootText = memo( ({ content }: IFormFootText) => (
    <p className="form_foot_text">{content}</p>
))