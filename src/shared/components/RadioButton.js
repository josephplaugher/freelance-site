import React from 'react'
import styles from './RadioStyles'

const Input = (props) => {

    return (
        <div id="radio-container" style={styles.container}>
            <p id="radio-container-label" style={styles.label}>Prefered contact method</p>
            <div id="radio-option-container" style={styles.optionContainerInline}>
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
    )
}

export default Input