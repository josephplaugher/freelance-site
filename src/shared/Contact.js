import React, { useState, useEffect } from 'react'
import Ajax from '../browser/utilities/Ajax'
import SetUrl from '../browser/utilities/SetUrl'
import Input from './components/Input'
import Button from './components/Button'
import InputStyles from './components/InputStyles'
import RadioStyles from './components/RadioStyles'

export default function Portfolio() {

    const [fullName, setFullName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const [pref, setPref] = useState('')
    const [userNotify, setUserNotify] = useState('')
    const [inputError, setInputError] = useState({})

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
        <div id="contact-container" style={{ display: "flex", flexDirection: "colummn" }}>
            <h1 className='heading-center'>Contact Me</h1>

            <form onSubmit={submit}>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <Input name="fullName" value={fullName} label="Name" onChange={setFullName} />
                    <Input name="companyName" value={companyName} label="Company Name" onChange={setCompanyName} />
                </div>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <Input name="phoneNumber" value={phoneNumber} label="Phone Number" onChange={setPhoneNumber} type="number" />
                    <Input name="email" value={email} label="Email" onChange={setEmail} />
                </div>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "flex-start" }}>
                    <div style={InputStyles.container}>
                        <p style={InputStyles.label}>Comments/Questions (optional)</p>
                        <textarea style={InputStyles.textinput} name="comments" onChange={(e) => { setComments(e.target.value) }} value={comments} />
                    </div>
                    <div id="radio-container" style={RadioStyles.container}>
                        <p id="radio-container-label" style={RadioStyles.label}>Prefered contact method</p>
                        <div id="radio-option-container" style={RadioStyles.optionContainerInline} onChange={(e) => setPref(e.target.value)}>
                            <div id="radio-email-option-group" style={RadioStyles.optionGroup}>
                                <p id="radio-email-label" style={RadioStyles.option}>Email</p>
                                <input type="radio" id="email-radio" name="preferedContactMethod" value="Email" style={RadioStyles.radio} />
                            </div>
                            <div id="radio-phone-option-group" style={RadioStyles.optionGroup}>
                                <p id="radio-phone-label" style={RadioStyles.option}>Phone</p>
                                <input type="radio" id="email-radio" name="preferedContactMethod" value="Phone" style={RadioStyles.radio} />
                            </div>
                        </div>
                    </div>
                </div>

                <Button value="Contact Me!" id="submit" onClick={submit} className="button" buttonContainerclassName="" />
                <div id="user-message">{userNotify}</div>
            </form >
        </div >
    )
}