import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <ul className='footer_category'>
                <li><Link to={'/'}>Agriculture</Link></li>
                <li><Link to={'/'}>Bussiness</Link></li>
                <li><Link to={'/'}>Education</Link></li>
                <li><Link to={'/'}>Entertainment</Link></li>
                <li><Link to={'/'}>Art</Link></li>
                <li><Link to={'/'}>Investment</Link></li>
                <li><Link to={'/'}>Uncategorized</Link></li>
                <li><Link to="posts/categories/:Weather">Weather</Link></li>
            </ul>
            <div className='Footer_Copright'>
                <small>All Rights Reserved  &copy; Copyright, NEXAWEB Projects.</small>

            </div>
        </footer>
    )
}

export default Footer
