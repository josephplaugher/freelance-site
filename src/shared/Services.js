import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
    return (
        <div className='content'>
            <h2 className='heading-center'>Services</h2>
            <p>
                Joseph offers a variety of software solutions. Sometimes, an existing application will
                suite his client's need. If so, he is happy to inform them of this and recommend such an application,
                whether that is one of his pre-built solutions, or someone else's - providing a speedy
                solution to their needs. Other times, a more custom approach is required.
            </p>
            <p>
                <Link to='/contact' style={{ fontWeight: "bold", textDecoration: "underline" }}>Get in touch</Link> with Joseph to discuss how he can make your business
                easier to run and more profitable.
            </p>
        </div>
    )
}