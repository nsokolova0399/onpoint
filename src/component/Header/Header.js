import React from 'react'
import './Header.css'
import logo from './global.png';

function Header({current, setCurrent}) {
    const firstSlide = () => {
        setCurrent(0)
    };
    return (
        <div className="header">
            <button onClick={() => firstSlide()}>
                <img  src={logo} alt="header"></img>
            </button>
        </div>
    );
}

export default Header;