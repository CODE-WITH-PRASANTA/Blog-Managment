import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Avatar from '../Asserts/avatar15.jpg'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";



const UserProfile = () => {
    const [avatar, setAvatar] = useState(Avatar);
    const [name, setName] = useState('');
    const [currentpassword, setCurrentPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    return (
        <section className='Profile'>
            <div className="container profile_container">
                <Link to={`/Dashboard`} className='btn'>My Posts</Link>

                <div className="profile-details">
                    <div className="avatar_wrapper">
                        <div className="profile-avatar">
                            <img src={avatar} alt="" />
                        </div>
                        {/* Form To Update The Avatar */}
                        <form className='avatar-form'>
                            <input type="file" name='avatar' id='avatar' onClick={e => setAvatar(e.target.files[0])} accept='png , jpg , jpeg' className='profile_form' />
                            <label htmlFor="avatar"><FaEdit /></label>
                        </form>
                        <button className='profile_avatar-btn '><FaCheck /></button>
                    </div>
                    <h1>Ernest Achiver</h1>



                    {/* Form to Update User Detail */}

                    <div className="form profile_form">
                        <p className='Form_error_message'>This is an error message</p>
                        <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)} />
                        <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="password" placeholder='Current Pssword' value={currentpassword} onChange={e => setCurrentPassword(e.target.value)} />
                        <input type="password" placeholder='New Password' value={newpassword} onChange={e => setNewPassword(e.target.value)} />
                        <input type="password" placeholder='Confirm New Password' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
                        <button type='submit' className='btn primary'>Update Details</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default UserProfile
