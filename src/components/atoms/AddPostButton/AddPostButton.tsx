import * as React from "react"
import { memo } from "react"
import "./AddPostButton.css"

interface IAddPostButton {
    onClick: () => void
    name: string
}

export const AddPostButton = memo( ({ onClick, name }: IAddPostButton) => (
    <button className="post_button" onClick = {onClick}>{name}</button>
))