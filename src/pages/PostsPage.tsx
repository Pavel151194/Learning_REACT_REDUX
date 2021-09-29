import React from 'react'
import { PostsTemplate } from '../components/templates'
import { PostPageTitle, AddPostButton } from '../components/atoms'
import { PostCards } from '../components/molecules'

interface IPostsPage {
    onClick: () => void
}

export const PostsPage = ( () => {
    
    return (
        <PostsTemplate
            postsPageTitle={
                <div className="posts_page_title">
                    <PostPageTitle content="All posts"/>
                    <AddPostButton name="+ Add" onClick={() => {}}/>
                </div>
            }
            postsMain={<PostCards/>}
        />
    )
})