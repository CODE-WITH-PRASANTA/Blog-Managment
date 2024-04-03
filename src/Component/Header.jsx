import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Asserts/Logo.png'
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
    return (
        <>
            <nav >
                <div className="container nav_container">
                    <Link to="/" className='Nav-Logo'>
                        <img src={Logo} alt="Navbar-Logo" className='nav-logo' />
                    </Link>
                    <ul className='Nav-Menu'>
                        <li><Link to="/Profile">Ernest Achiver</Link></li>
                        <li><Link to="/Create">Create Post</Link></li>
                        <li><Link to="/Authors">Authors</Link></li>
                        <li><Link to="/Logout">Logout</Link></li>
                    </ul>
                    <button className='nav_toggle_btn'>
                        <AiOutlineClose />
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Header
