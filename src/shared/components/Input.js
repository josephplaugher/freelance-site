
import React from 'react'
import styles from './InputStyles'

const Input = (props) => {

    return (
        <div style={styles.container}>
            <p style={styles.label}>{props.label} </p>
            <p style={styles.error}>{props.error} </p>
            <input
                type={props.type || 'text'}
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                style={styles.textinput}
            />
        </div>
    );
}

export default Input;