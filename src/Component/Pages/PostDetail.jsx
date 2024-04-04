import React from 'react'
import PostAuthor from '../PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../Asserts/blog22.jpg'

const PostDetail = () => {
    return (
        <section className="post-Detail">
            <div className="container postDetail_Container">
                <div className="postDetail_Header">
                    <PostAuthor />
                    <div className="postDetails_buttons">
                        <Link to={`/post/postID/edit`} className='btn sm primary'>Edit</Link>
                        <Link to={`/post/postID/delete`} className='btn sm danger'>Delete</Link>
                    </div>
                </div>
                <h1>This is the post tittle!</h1>
                <div className="postDetail_Thumbnail">
                    <img src={Thumbnail} alt="" />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem harum repudiandae provident, perferendis nihil aperiam ad temporibus hic cum praesentium sapiente cupiditate reprehenderit tempora dicta voluptatibus deserunt ullam natus doloremque. Earum facere aliquid sequi fuga architecto, ratione libero ipsum excepturi.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo deserunt consectetur, ea accusantium assumenda earum quae quisquam temporibus error? Quam, aut eveniet. Officia doloribus maxime delectus debitis dicta est aliquam nesciunt provident quia sequi, assumenda alias perspiciatis unde suscipit eum aut! Sit cumque consectetur aut voluptatum sint rerum eius eaque consequuntur modi, cum, quam doloremque?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora illum necessitatibus ipsum distinctio ea temporibus praesentium sint at quas quia, iusto dolor, repellendus doloremque. Distinctio minima voluptates possimus dignissimos tempora nostrum laboriosam perspiciatis iusto asperiores veniam repellat, expedita iste doloribus sit, excepturi consequatur. Neque molestiae odit alias dicta distinctio possimus harum culpa sed accusamus quod, tempore sit dolorem facilis voluptatum, ducimus reprehenderit id vero impedit eveniet, quia quisquam quam aspernatur optio architecto. Eligendi ipsa sapiente nisi, voluptate est molestias, commodi, at enim placeat voluptates obcaecati! Enim debitis quo ratione quisquam doloribus, error deserunt? Corrupti odio non, perspiciatis iure ad vitae doloribus, impedit laborum itaque cum quae hic dolore unde cumque mollitia?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia accusantium ullam amet molestiae culpa expedita voluptatem labore pariatur est. Quae adipisci, illo laudantium ab veritatis accusamus aut qui, ducimus commodi eligendi consequuntur voluptatibus, culpa impedit architecto ratione doloremque! Beatae excepturi voluptates sunt inventore, dolores ratione labore esse eligendi consequuntur commodi. Cum iure, ducimus suscipit quos excepturi deserunt molestias ipsa incidunt ipsam cupiditate. Repellat quis dolores modi in accusamus debitis architecto magnam numquam ipsum dolore soluta laborum inventore molestias eveniet cupiditate labore voluptatum minima rem, nostrum consequuntur? Atque recusandae sapiente nesciunt laborum quibusdam deserunt, pariatur unde alias aliquid, maiores quisquam delectus inventore architecto incidunt amet velit illo, a dolores minus optio et! Atque quisquam est quaerat consectetur omnis nihil optio suscipit expedita ad iure. Vel quasi cum illum sapiente reiciendis architecto, aliquid in. Aut error ea autem voluptatum possimus natus incidunt dolores. Optio repellat vel eius facilis architecto? Dolorum, cum aperiam rerum, illo exercitationem quas delectus debitis magni architecto suscipit voluptas qui est quia voluptatum officia eveniet soluta commodi laborum dolore itaque saepe, doloribus expedita pariatur. Omnis labore, dicta sit commodi a quibusdam quisquam assumenda eius quidem eos quae distinctio molestiae! Minus aliquid distinctio eius quod sequi est illo nemo.</p>
            </div>
        </section>
    )
}

export default PostDetail
