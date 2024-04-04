import React from 'react'
import { Link } from "react-router-dom"
import PostAuthor from './PostAuthor'

const PostItem = ({ postID, category, thumbnail, description, authorID, tittle }) => {
    const shortDiscription = description.length > 190 ? description.substr(0, 190) + '...' : description;
    const postTittle = tittle.length > 30 ? tittle.substr(0, 30) + '...' : tittle;
    return (
        <article className='post'>
            <div className="post__thumbnail">
                <img src={thumbnail} alt={tittle} />
            </div>
            <div className="post_content">
                <Link to={`/posts/${postID}`}>
                    <h3>{postTittle}</h3>
                </Link>
                <p>{shortDiscription}</p>

                <div className="post_footer">
                    <PostAuthor />
                    <Link to={`posts/categories/${category}`} className='
                    btn category'>{category}</Link>
                </div>
            </div>
        </article>
    )
}

export default PostItem
