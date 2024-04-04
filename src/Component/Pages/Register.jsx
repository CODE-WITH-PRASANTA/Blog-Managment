import React, { useState } from 'react'
import { Link } from "react-router-dom"
const Register = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const changeInputHandel = (e) => {
        setUserData(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }
    return (
        <section className='Register'>
            <div className="container">
                <h2>Sign Up</h2>
                <form className='form Regsiter_form'>
                    <p className='Form_error_message'> This is an error message</p>
                    <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandel} />
                    <input type="email" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandel} />
                    <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandel} />
                    <input type="password" placeholder='Conform Password' name='password2' value={userData.password2} onChange={changeInputHandel} />
                    <button type='submit' className='btn primary'>Register</button>
                </form>
                <small>Already have an account? <Link to={`/Login`}>Sign in</Link ></small>
            </div>

        </section>
    )
}

export default Register
