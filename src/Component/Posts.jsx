import React, { useState } from 'react'
import PostItem from './PostItem';

import { DUMMY_POST } from '../Data'

const Posts = () => {
    const [posts] = useState(DUMMY_POST);


    return (
        <section className='Posts'>
            {posts.length > 0 ? <div className="container posts_container">
                {
                    posts.map(({ id, thumbnail, category, tittle, desc, authorID }) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} tittle={tittle} description={desc} authorID={authorID} />)
                }
            </div> : <h2 className='center'>No post found</h2>}
        </section>
    )
}

export default Posts
