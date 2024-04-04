import React, { useState } from 'react'
import { DUMMY_POST } from '../../Data'
import PostItem from '../PostItem';

const CategooryPost = () => {
    const [posts, setPosts] = useState(DUMMY_POST);

    return (
        <section className='Category-post'>
            {posts.length > 0 ? <div className="container category-post_container">
                {
                    posts.map(({ id, thumbnail, category, tittle, desc, authorID }) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} tittle={tittle} description={desc} authorID={authorID} />)
                }
            </div> : <h2 className='center'>No post found</h2>}
        </section>
    )
}

export default CategooryPost
