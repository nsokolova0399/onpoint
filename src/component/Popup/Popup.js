import React, {useState} from 'react'
import './Popup.css'
import rectangle from './img/Rectangle 9.png'
import bottleImg from './img/img.png'
import btnClose from './img/btn_close.png'
import next from './img/btn_next.png'
import prev from './img/btn_1.png'
import ellipse from './img/Ellipse 2.png'
import ellipsePink from './img/Ellipse 2 copy 2.png'

const description = [
    {id: "01", text: "Lorem ipsum dolor sit amet, consecteturadipiscing elit"},
    {id: "02", text: "Faucibus pulvinar elementum integer enim"},
    {id: "03", text: "Faucibus pulvinar elementum integer enim"},
    {id: "04", text: "Mi bibendum neque egestas congue quisque egestas diam"},
    {id: "05", text: "Venenatis lectus magna fringilla urna"},
    {id: "06", text: "Venenatis lectus magna fringilla urna"},
];

function Popup({popup, setPopup}) {
    const [currentDescription, setCurrentDescription] = useState(1);

    const indexPrev = currentDescription * 3;
    const indexNext = indexPrev - 3;
    const currentDes = description.slice(
        indexNext,
        indexPrev
    );

    const closePopup = () => {
        setPopup(false);
    }
    const prevClick = () => {
        setCurrentDescription(1)
    }

    const nextClick = () => {
        setCurrentDescription(2)
    }

    return (
        <>
            <div className="newRectangle">
                <img src={rectangle} alt={rectangle} className="newRectangle"/>
                <h1>{popup}</h1>
            </div>
            <div className="popupRectangle"></div>
            <img className="bottleImg" src={bottleImg} alt="bottleImg"/>
            <button className="btnCloseButton" onClick={closePopup}>
                <img className="btnClose" src={btnClose} alt="btnClose"/>
            </button>
            <span className="textKey btnPopup">ПРЕИМУЩЕСТВА</span>
            <div className="textDescription">
                {currentDes.map((value, index) => (
                    <div className="textDescriptionIdText">
                        <div className="textDescriptionId">
                            {value.id}
                        </div>
                        <div className="textDescriptionText">
                            {value.text}
                        </div>
                    </div>
                ))}
            </div>
            <button className="btnCloseButton" onClick={prevClick}>
                <img className="prev" src={prev} alt="prev"/>
            </button>
            {currentDescription === 1 ?
                <>
                    <img className="ellipsePink ellipseleft" src={ellipsePink} alt="ellipse"/>
                    <img className="ellipse ellipseright" src={ellipse} alt="ellipse"/>
                </>
                :
                <>
                    <img className="ellipse ellipseleft" src={ellipse} alt="ellipsePink"/>
                    <img className="ellipsePink ellipseright" src={ellipsePink} alt="ellipsePink"/>
                </>
            }

            <button className="btnCloseButton" onClick={nextClick}>
                <img className="next" src={next} alt="next"/>
            </button>

        </>
    );
}

export default Popup;