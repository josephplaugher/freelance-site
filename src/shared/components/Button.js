import React from 'react';
import ButtonStyles from './ButtonStyles';

const Button = (props) => {
    const { name, id, value, className, buttonContainerclassName, onClick } = props
    return (
        <div className="button-container" style={ButtonStyles.buttonContainer}>
            <button className="button" style={ButtonStyles.button}
                type="submit"
                name={name}
                id={id}
                onClick={onClick}
            >{value}</button>
        </div>
    )
}

export default Button;