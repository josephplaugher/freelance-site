
import React from 'react'
import styles from './InputStyles'

const Input = (props) => {

    return (
        <div className="input-container" style={styles.container}>
            <p style={styles.label}>
                {props.required && (<span style={{ color: 'red', fontWeight: 'bold' }}>* </span>)}{props.label} </p>
            <input
                className="input"
                type={props.type || 'text'}
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={(e) => { props.onChange(e.target.value) }}
                style={styles.textinput}
            />
            <p style={styles.error}>{props.error} </p>
        </div>
    );
}

export default Input;