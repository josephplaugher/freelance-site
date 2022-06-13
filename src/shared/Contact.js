import React, { useState, useEffect } from 'react'
import Ajax from '../browser/utilities/Ajax'
import SetUrl from '../browser/utilities/SetUrl'
import Input from './components/Input'
import Button from './components/Button'
import InputStyles from './components/InputStyles'
import RadioStyles from './components/RadioStyles'
import Validator from '../browser/utilities/validation/Validator'
import ValRules from '../browser/utilities/validation/ValRules'

export default function Portfolio() {

    const [fullName, setFullName] = useState('')
    const [companyWebsite, setCompanyWebsite] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [pref, setPref] = useState('')
    const [userNotify, setUserNotify] = useState('')
    const [inputError, updateInputError] = useState({})

    useEffect(() => {
        console.log('phone:', phoneNumber)
    }, [phoneNumber])
    const submit = (event) => {
        event.preventDefault()
        if (validate() != true) { return } //stops the form submission if there are errors

        Ajax.post(`${SetUrl()}/api/contact`,
            { fullName, companyWebsite, phoneNumber, email, pref, message })
            .catch((error) => { console.log('error submitting form: ', error) })
            .then((resp) => {
                console.log('contact form submited ', resp.data)
                setUserNotify(`Thank you, I'll be in touch!`)
            })
    }

    const validate = () => {
        // create a new validation object using all the input values as an object with ES6 shorthand, and the valRules object
        const valResult = new Validator({ fullName, companyName: companyWebsite, phoneNumber, email, comments: message }, ValRules)
        // checck valResult (this object stores the result of the validation process) to see if there are any error. 
        // submit the form if there are none. If there are errors, submit the form with ajax
        if (valResult.hasError == false) {
            // submit the form data via ajax
            console.log('no errors')
            updateInputError({})
            return true
        } else {
            console.log('the errors: ', valResult.errors)
            updateInputError(valResult.errors)
            return false
        }
    }

    return (
        <div id="contact-container" className='content' style={{ display: "flex", flexDirection: "colummn" }}>
            <h1 className='heading-center'>Contact Me</h1>
            <p style={{ padding: "15px" }}>Please complete this form and I'll be in touch within 48 hours to setup a time
                to discuss what I can do for your business.
            </p>
            <div id="form-div" style={{ borderRadius: "5px", backgroundColor: "white", padding: "5px" }}>
                <form onSubmit={submit}>
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <Input required={true} name="fullName" value={fullName} label="Name" onChange={setFullName} error={inputError.fullName} />
                        <Input name="companyWebsite" value={companyWebsite} label="Company Website" onChange={setCompanyWebsite} error={inputError.companyWebsite} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <Input required={true} name="email" value={email} label="Email" onChange={setEmail} error={inputError.email} />
                        <Input name="phoneNumber" value={phoneNumber} label="Phone Number" onChange={setPhoneNumber} type="tel" error={inputError.phoneNumber} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "flex-start" }}>
                        <div style={InputStyles.container}>
                            <p style={InputStyles.label}>
                                <span style={{ color: 'red', fontWeight: 'bold' }}>* </span>Message
                            </p>
                            <textarea style={InputStyles.textinput} name="message" onChange={(e) => { setMessage(e.target.value) }} value={message} error={inputError.message} />
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

                    <Button value="Contact Me!" id="submit" onClick={submit} buttonContainerclassName="btnContainer" />
                    <div id="user-message">{userNotify}</div>
                </form >
            </div>
        </div >
    )
}