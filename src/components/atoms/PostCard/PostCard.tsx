import React, { memo } from "react"
import { IPost } from "../../../types/post"
//import postImageExample from '../../../assets/post_image_example.svg'
import "./PostCard.css"

export const PostCard = memo( ({ image, title, text, date, author }: IPost) => (
    <div className="post_card">
        <img className="post_card_image" src={image} alt="post_image"/>
        <h4 className="post_card_title">{title}</h4>
        <p className="post_card_text">{text}</p>
        <div className="post_card_date">{date}</div>
        <div className="post_card_author_name">{author}</div>
    </div>
) )