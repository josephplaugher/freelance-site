import React, { useState } from 'react'
import Input from './components/Input'
import styles from './components/RadioStyles'

export default function Portfolio() {

    const [fullName, setFullName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [preferedContactMethod, setPreferedContactMethod] = useState('')
    const [pref, setPref] = useState(true)

    return (
        <div id="contact-container">
            <h1 className='heading-center'>Contact Me</h1>

            <form>
                <Input name="fullName" label="Name" onChange={setFullName} />
                <Input name="companyName" label="Company Name" onChange={setCompanyName} />
                <Input name="phoneNumber" label="Phone Number" onChange={setPhoneNumber} type="number" />
                <Input name="email" label="Email" onChange={setEmail} />
                <div style={styles.container}>
                    <p style={styles.label}>Prefered contact method</p>
                    <div style={styles.optionContainerInline}>
                        <div style={styles.optionGroup}>
                            <p for="preferedContactMethod" style={styles.option}>Email</p>
                            <input type="radio" id="" name="preferedContactMethod" value="Email" style={styles.radio} />
                        </div>
                        <div style={styles.optionGroup}>
                            <p for="preferedContactMethod" style={styles.option}>Phone</p>
                            <input type="radio" id="" name="preferedContactMethod" value="Phone" style={styles.radio} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}