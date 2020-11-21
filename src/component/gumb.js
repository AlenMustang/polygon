import React from 'react'
import "./gumb.css"
import {Link} from "react-router-dom"

const STYLES = ["gumb--default","gumb--outline"]
const SIZE = ["gumb--velik","gumb--srednji","gumb--majhen"]


export const Gumb=({children,type,onClick,buttonStyle,buttonSize}) => {
    const checkButtonStyle=STYLES.includes(buttonStyle)? buttonStyle : STYLES [0]
    const checkButtonSize=SIZE.includes(buttonSize)?buttonSize:SIZE[0]

    return (
        <Link to="/" className="gumb-mobile">
            <button className={`btn ${checkButtonSize} ${checkButtonStyle}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>

    )

}
