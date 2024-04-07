import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Asserts/Logo.png'
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
const Header = () => {
    const [isShowing, setIsShowing] = useState(window.innerWidth > 800 ? true : false);

    const closeNavHandel = () => {
        if (window.innerWidth < 800) {
            setIsShowing(false)
        } else {
            setIsShowing(true)
        }
    }
    return (
        <>
            <nav >
                <div className="container nav_container">
                    <Link to="/" className='Nav-Logo' onClick={closeNavHandel}>
                        <img src={Logo} alt="Navbar-Logo" className='nav-logo' />
                    </Link>
                    {isShowing && <ul className='Nav-Menu'>
                        <li><Link to="/Profile" onClick={closeNavHandel}>Profile</Link></li>
                        <li><Link to="/Create" onClick={closeNavHandel}>Create Post</Link></li>
                        <li><Link to="/Authors" onClick={closeNavHandel}>Authors</Link></li>
                        <li><Link to="/Login" onClick={closeNavHandel}>Login</Link></li>
                        <button className='Logout_btn'><IoLogOutSharp /></button>
                    </ul>}
                    <button className='nav_toggle_btn' onClick={() => setIsShowing(!isShowing)}>
                        {isShowing ? <AiOutlineClose /> : <FaBars />}
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Header
