import React from 'react'
import './Popup.css'
import rectangle from './Rectangle 9.png'
function Popup({popup, setPopup}) {

    return (
        <>
        <div className="newRectangle" >
            <img src={rectangle} alt={rectangle} className="newRectangle"/>
            <h1>{popup}</h1>
        </div>
        <div className="popupRectangle"></div>
            </>
    );
}

export default Popup;