import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Asserts/avatar1.jpg'

const PostAuthor = () => {
    return (
        <div>
            <Link to={'/posts/users/sdfsdf'} className='post_author'>
                <div className="post_author_avatar">
                    <img src={Avatar} alt="" />
                </div>
                <div className="post_author_details">
                    <h5>By: Ernest Achiever</h5>
                    <small>Just now</small>
                </div>
            </Link>
        </div>
    )
}

export default PostAuthor
