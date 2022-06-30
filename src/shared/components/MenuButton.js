import React from 'react'
const style = {
    width: "30px",
    borderBottom: "4px solid #0e2241",
    marginBottom: "3px",
}

const MenuButton = (props) => {
    return (
        <>
            <div className="menu-button" style={style} ></div>
            <div className="menu-button" style={style} ></div>
            <div className="menu-button" style={style} ></div>
        </>
    )
}

export default MenuButton;