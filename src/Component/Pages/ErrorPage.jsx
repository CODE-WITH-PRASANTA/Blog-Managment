import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = (props) => {
    return (
        <div>
            <section className='errorpage'>
                <div className="center">
                    <Link to="/" className='btn primary'>Go Back Home</Link>
                    <h2>Page not found</h2>
                </div>
            </section>

        </div>
    )
}

export default ErrorPage
