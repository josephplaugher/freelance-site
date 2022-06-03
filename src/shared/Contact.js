import React, { useState, useEffect } from 'react'
import Ajax from './utilities/Ajax'
import SetUrl from './utilities/SetUrl'
import Input from './components/Input'
import Button from './components/Button'
import styles from './components/RadioStyles'

export default function Portfolio() {

    const [fullName, setFullName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const [pref, setPref] = useState('')
    const [userNotify, setUserNotify] = useState('')

    const submit = (event) => {
        event.preventDefault()
        Ajax.post(`${SetUrl()}/api/contact`,
            { fullName, companyName, phoneNumber, email, pref, comments })
            .catch((error) => { console.log('error submitting form: ', error) })
            .then((resp) => {
                console.log('contact form submited ', resp.data)
                setUserNotify(`Thank you, I'll be in touch!`)
            })
    }

    return (
        <div id="contact-container">
            <h1 className='heading-center'>Contact Me</h1>

            <form onSubmit={submit}>
                <Input name="fullName" value={fullName} label="Name" onChange={setFullName} />
                <Input name="companyName" value={companyName} label="Company Name" onChange={setCompanyName} />
                <Input name="phoneNumber" value={phoneNumber} label="Phone Number" onChange={setPhoneNumber} type="number" />
                <Input name="email" value={email} label="Email" onChange={setEmail} />
                <div id="radio-container" style={styles.container}>
                    <p id="radio-container-label" style={styles.label}>Prefered contact method</p>
                    <div id="radio-option-container" style={styles.optionContainerInline} onChange={(e) => setPref(e.target.value)}>
                        <div id="radio-email-option-group" style={styles.optionGroup}>
                            <p id="radio-email-label" style={styles.option}>Email</p>
                            <input type="radio" id="email-radio" name="preferedContactMethod" value="Email" style={styles.radio} />
                        </div>
                        <div id="radio-phone-option-group" style={styles.optionGroup}>
                            <p id="radio-phone-label" style={styles.option}>Phone</p>
                            <input type="radio" id="email-radio" name="preferedContactMethod" value="Phone" style={styles.radio} />
                        </div>
                    </div>
                </div>
                <p>Comments/Questions (optional)</p>
                <textarea name="comments" onChange={setComments}>{comments}</textarea>
                <Button value="Contact Me!" id="submit" onClick={submit} className="button" buttonContainerclassName="" />
                <div id="user-message">{userNotify}</div>
            </form>
        </div>
    )
}