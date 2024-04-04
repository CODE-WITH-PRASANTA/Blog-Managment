import React, { useState } from 'react'
import { Link } from "react-router-dom"
const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const changeInputHandel = (e) => {
        setUserData(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }
    return (
        <section className='Login'>
            <div className="container">
                <h2>Sign In</h2>
                <form className='form Login_form'>
                    <p className='Form_error_message'> This is an error message</p>
                    <input type="email" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandel} />
                    <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandel} />
                    <button type='submit' className='btn primary'>Login</button>
                </form>
                <small>Don't have an account? <Link to={`/Register`}>Sign up</Link ></small>
            </div>

        </section>
    )
}

export default Login
