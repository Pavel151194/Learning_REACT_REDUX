import React, { memo } from "react"
import { examplesOfPosts } from "../../../mock"
import { PostCard } from "../../atoms"
import "./PostCards.css"

export const PostCards = memo( () => {
    const posts = examplesOfPosts

    return (
        <main className="post_cards">
            {posts?.map(post => (
                <PostCard
                    key={post.id} {...post}
                />
            ))}
        </main>
    )
})