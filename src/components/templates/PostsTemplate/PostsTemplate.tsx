import React, { memo } from "react"
import { Header } from '../../molecules'
import "./PostsTemplate.css"

interface IPostsTemplate {
    postsPageTitle: React.ReactNode
    postsMain: React.ReactNode
}

export const PostsTemplate = memo( ({ postsPageTitle, postsMain }: IPostsTemplate) => (
    <div className="wrapper post_template">
        <Header/>
        {postsPageTitle}
        {postsMain}
    </div>
))