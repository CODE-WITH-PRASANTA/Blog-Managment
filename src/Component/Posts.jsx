import React, { useState } from 'react'
import PostItem from './PostItem';


import Thumbnail1 from './Asserts/blog1.jpg'
import Thumbnail2 from './Asserts/blog2.jpg'
import Thumbnail3 from './Asserts/blog3.jpg'
import Thumbnail4 from './Asserts/blog4.jpg'


const DUMMY_POST = [
    {
        id: "1",
        thumbnail: Thumbnail1,
        category: 'Art',
        tittle: 'This is the tittle of the very fast post on this blog',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vel distinctio molestiae quibusdam iusto ipsa repellat velit nam earum, dolorem at excepturi facere itaque deleniti modi voluptatibus voluptatum voluptate dolorum. Neque aperiam veritatis hic reiciendis ut! Expedita atque molestias aliquam quia perspiciatis, blanditiis nam magni unde architecto pariatur provident omnis rerum est possimus corrupti, dolor aperiam nobis eaque error officia cumque! Expedita voluptatum commodi dicta sint, nisi nesciunt aspernatur fugit!',
        authorID: 3
    },

    {
        id: "2",
        thumbnail: Thumbnail2,
        category: 'Hand',
        tittle: 'This is the tittle of the very fast post on this blog',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vel distinctio molestiae quibusdam iusto ipsa repellat velit nam earum, dolorem at excepturi facere itaque deleniti modi voluptatibus voluptatum voluptate dolorum. Neque aperiam veritatis hic reiciendis ut! Expedita atque molestias aliquam quia perspiciatis, blanditiis nam magni unde architecto pariatur provident omnis rerum est possimus corrupti, dolor aperiam nobis eaque error officia cumque! Expedita voluptatum commodi dicta sint, nisi nesciunt aspernatur fugit!',
        authorID: 1
    },

    {
        id: "3",
        thumbnail: Thumbnail3,
        category: 'Weather',
        tittle: 'This is the tittle of the very fast post on this blog',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vel distinctio molestiae quibusdam iusto ipsa repellat velit nam earum, dolorem at excepturi facere itaque deleniti modi voluptatibus voluptatum voluptate dolorum. Neque aperiam veritatis hic reiciendis ut! Expedita atque molestias aliquam quia perspiciatis, blanditiis nam magni unde architecto pariatur provident omnis rerum est possimus corrupti, dolor aperiam nobis eaque error officia cumque! Expedita voluptatum commodi dicta sint, nisi nesciunt aspernatur fugit!',
        authorID: 13
    },

    {
        id: "4",
        thumbnail: Thumbnail4,
        category: 'Dancing',
        tittle: 'This is the tittle of the very fast post on this blog',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vel distinctio molestiae quibusdam iusto ipsa repellat velit nam earum, dolorem at excepturi facere itaque deleniti modi voluptatibus voluptatum voluptate dolorum. Neque aperiam veritatis hic reiciendis ut! Expedita atque molestias aliquam quia perspiciatis, blanditiis nam magni unde architecto pariatur provident omnis rerum est possimus corrupti, dolor aperiam nobis eaque error officia cumque! Expedita voluptatum commodi dicta sint, nisi nesciunt aspernatur fugit!',
        authorID: 11
    },

]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POST);


    return (
        <section className='Posts'>
            <div className="container posts_container">
                {
                    posts.map(({ id, thumbnail, category, tittle, desc, authorID }) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} tittle={tittle} description={desc} authorID={authorID} />)
                }
            </div>
        </section>
    )
}

export default Posts
