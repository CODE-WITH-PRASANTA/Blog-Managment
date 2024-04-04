import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar1 from '../Asserts/avatar1.jpg'
import Avatar2 from '../Asserts/avatar2.jpg'
import Avatar3 from '../Asserts/avatar3.jpg'
import Avatar4 from '../Asserts/avatar4.jpg'
import Avatar5 from '../Asserts/avatar5.jpg'


const authorsData = [
    { id: 1, avatar: Avatar1, name: 'Ernest Achiver', posts: 3 },
    { id: 2, avatar: Avatar2, name: 'Jane Doe', posts: 5 },
    { id: 3, avatar: Avatar3, name: 'Dramani Mahama', posts: 0 },
    { id: 4, avatar: Avatar4, name: 'Nana Addo', posts: 2 },
    { id: 5, avatar: Avatar5, name: 'Hajia Bintu', posts: 1 },
]

const Authors = () => {

    const [authors, setAuthors] = useState(authorsData)


    return (
        <section className='Author'>
            {authors.length > 0 ? <div className="container authors-container">
                {
                    authors.map(({ avatar, id, name, posts }) => {
                        return <Link key={id} to={`/posts/users/${id}`} className='author'>
                            <div className="author_avatar">
                                <img src={avatar} alt={`Image of ${name}`} />
                            </div>
                            <div className="author_info">
                                <h4>{name}</h4>
                                <p>{posts}</p>
                            </div>
                        </Link>
                    })
                }
            </div> : <h2>No users / authors found.</h2>}
        </section>
    )
}

export default Authors
