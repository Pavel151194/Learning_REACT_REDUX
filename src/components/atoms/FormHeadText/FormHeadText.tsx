import * as React from "react"
import { Link} from "react-router-dom"
import { memo } from "react"
import "./FormHeadText.css"

interface IFormHeadText {
    content: string;
}
  
export const FormHeadText = memo( ({ content }: IFormHeadText) => (
    <p className="form_head_text">{content}</p>
))