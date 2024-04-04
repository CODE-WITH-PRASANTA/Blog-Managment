import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Avatar from '../Asserts/avatar15.jpg'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";



const UserProfile = () => {
    const [avatar, setAvatar] = useState('')
    return (
        <section className='Profile'>
            <div className="container profile_container">
                <Link to={`/myposts/sdfffs`} className='btn'>My Posts</Link>

                <div className="profile-details">
                    <div className="avatar_wrapper">
                        <div className="profile-avatar">
                            <img src={Avatar} alt="" />
                        </div>
                        {/* Form To Update The Avatar */}
                        <form className='avatar-form'>
                            <input type="file" name='avatar' id='avatar' onClick={e => setAvatar(e.target.files[0])} accept='png , jpg , jpeg' />
                            <label htmlFor="avatar"><FaEdit /></label>
                        </form>
                        <button className='profile_avatar-btn'><FaCheck /></button>
                    </div>
                    <h1>Ernest Achiver</h1>
                </div>
            </div>

        </section>
    )
}

export default UserProfile
