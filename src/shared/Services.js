import React from 'react'
import { Link } from 'react-router-dom'
import LinkStyle from './utilities/LinkStyle'

export default function Services() {
    return (
        <div className='content'>
            <h1 className='heading-center'>Services</h1>
            <p>
                Joseph offers a variety of software solutions. If you're not sure how software can be helpful
                for your operations, he will look closely at your business to find areas where software will
                make a big impact on increasing
                productivity, streamline processes, extracting more value out of your staff's wages while lightening
                their load, and increasing revenue. Are you using a paper/printed time card system, or even just Excel
                to track your staff's hours? Do you have a receptionist or personal assistance who spends time on the phone
                managing your schedule with your clients, or taking credit card payments? These are immediate areas
                which can be improved with software.
                <Link to='/contact' style={LinkStyle}> Let's talk</Link>  to find out how to get it done!
            </p>
            <p>
                Maybe you already have something in mind? Is there a process or procedure in your business which
                is time-consuming, expensive, or something you just don't like doing yourself or managing?
                <Link to='/contact' style={LinkStyle}> Schedule a time</Link> to discuss systemizing and
                possibly even automating it altogether.
            </p>
            <p>
                <Link to='/contact' style={LinkStyle}>Get in touch</Link> with Joseph to discuss how he can make your business
                easier to run and more profitable.
            </p>
        </div >
    )
}