import React, { useState } from 'react'
import { DUMMY_POST } from '../../Data'
import { Link } from 'react-router-dom'

const DashBoard = () => {
    const [posts] = useState(DUMMY_POST)
    return (
        <section className='DashBoard'>
            {
                posts.length ? <div className="container dashboard_container">
                    {
                        posts.map(post => {
                            return <article key={post.id} className='dashboard__post'>
                                <div className="dashboard-post_info">
                                    <div className="dashboard-post_thumbnail">
                                        <img src={post.thumbnail} alt="" />
                                    </div>
                                    <h5>{post.tittle}</h5>
                                </div>
                                <div className="dashboard_post-actions">
                                    <Link to={`/posts/${post.id}`} className='btn sm' >View</Link>
                                    <Link to={`/posts/${post.id}/edit`} className='btn sm primary' >Edit</Link>
                                    <Link to={`/posts/${post.id}/delete`} className='btn sm danger' >Delete</Link>
                                </div>
                            </article>
                        })
                    }
                </div> : <h2 className='center'>This is no post yet</h2>
            }
        </section>
    )
}

export default DashBoard
