import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className="content">
            <h2 className='heading-center'>About</h2>
            <h2 className='subheading-center'>Business Person First, Software Developer Second.</h2>
            <p>
                During Joseph's six years as a corporate accountant he developed an ability to identify ineffeciencies
                and potential losses caused by poor business processes. Now as a software developer, he corrects these
                issues with well-designed software.
            </p>
            <p>
                Do you want the same lean and competitive edge enjoyed by companies like Amazon for your business?
                Joseph can deliver that by building effective and easy to use software systems, specific to
                your business. Joseph is not just another
                software developer, he is a business person who
                <Link to='/services' style={{ fontWeight: "bold", textDecoration: "underline" }}> finds significant competitive
                    possibilities within your business</Link>, and harnesses them using software to cut costs and grow your revenue.
            </p>

            <h2 className='subheading-center'>Experience</h2>
            <p>
                After earning his baccalaureate degree in accounting, Joseph worked as Project Accountant for
                HDR Engineering, an international civil engineering firm, for over six years while learning
                software development. Now, he is a full-time software developer,
                building applications for government agencies at all levels, and for private sector engineering firms.
            </p>
            <p>
                This combination of education, experience, and skills uniquely qualifies Joseph to
                leverage software for your business's benefit.
            </p>
        </div>
    )
}