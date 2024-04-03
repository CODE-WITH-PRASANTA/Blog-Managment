import React from 'react'
import { Link } from "react-router-dom"
import PostAuthor from './PostAuthor'

const PostItem = ({ postID, category, thumbnail, description, authorID, tittle }) => {
    return (
        <article className='post'>
            <div className="post__thumbnail">
                <img src={thumbnail} alt={tittle} />
            </div>
            <div className="post_content">
                <Link to={`/posts/${postID}`}>
                    <h3>{tittle}</h3>
                </Link>
                <p>{description}</p>

                <div className="post_footer">
                    <PostAuthor />
                    <Link to={`posts/categories/${category}`}>{category}</Link>
                </div>
            </div>
        </article>
    )
}

export default PostItem
