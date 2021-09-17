import * as React from "react"
import { Link} from "react-router-dom"
import { memo } from "react"
import "./FormTitle.css"

interface IFormTitle {
    content: JSX.Element | string;
}
  
export const FormTitle = memo( ({ content }: IFormTitle) => (
    <h2>{content}</h2>
))