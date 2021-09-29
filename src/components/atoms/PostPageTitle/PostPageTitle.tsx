import { title } from "process"
import React, { memo } from "react"
import "./PostPageTitle.css"

interface IPostPageTitle {
    content: string
}

export const PostPageTitle = memo( ({ content }: IPostPageTitle) => (
    <h2 className="post_page_title">{content}</h2>
) )