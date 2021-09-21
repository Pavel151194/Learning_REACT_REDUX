import * as React from "react"
import { memo } from "react"
import "./FormTitle.css"

interface IFormTitle {
    content: string
}

export const FormTitle = memo( ({ content }: IFormTitle) => (
    <h2 className="form_title">{content}</h2>
) )