import React, {useState} from 'react'
import './Page2.css'
import Popup from "../../component/Popup/Popup";
import bottle from "./img/bottle.png";
import bubble1 from "./img/1.png";
import bubble2 from "./img/2.png";
import bubble3 from "./img/3.png";
import bubble4 from "./img/4.png";
import bubble5 from "./img/5.png";
import bubble6 from "./img/6.png";
import bubble7 from "./img/7.png";
import bubble8 from "./img/8.png";
import btn from "./img/btn.png"
import icon1 from './img/icon1.png'
import icon2 from './img/icon2.png'
import Header from "../../component/Header/Header";

function Page2({current, setCurrent}) {
    const [popup, setPopup] = useState(false);

    const openPopup = () =>{
        setPopup(true)
    }
    return (
        <>
            <Header setCurrent={setCurrent} />
            <img src={bubble3} alt={bubble3} className="bubble3"/>
            <img src={bottle} alt={bottle} className="bottle"/>
            <img src={bubble5} alt={bubble5} className="bubble5"/>
            <img src={bubble1} alt={bubble1} className="bubble1"/>
            <img src={bubble2} alt={bubble2} className="bubble2"/>
            <img src={bubble7} alt={bubble7} className="bubble7"/>
            <img src={bubble8} alt={bubble8} className="bubble8"/>
            <img src={bubble4} alt={bubble4} className="bubble4"/>
            <img src={bubble6} alt={bubble6} className="bubble6"/>
            <span className="textKey">КЛЮЧЕВОЕ СООБЩЕНИЕ</span>
            <div className="textBrend">
                <span>BREND</span>
                <span className="textBrendBold">XY</span>
            </div>
            <img src={icon2} alt={icon2} className="icon2"/>
            <img src={icon1} alt={icon1} className="icon1"/>
            <div className="rectangle1">
                <span className="rectangle1Text">
                    Ehicula ipsum a arcu
                    cursus vitae. Eu non
                    diam phasellus
                    vestibulum lorem sed
                    risus ultricies
                </span>
            </div>
            <div className="rectangle2">
                <span className="rectangle2Text">
                   A arcu cursus vitae
                </span>
            </div>
            <span className="btnPage2Button">
            <button onClick={openPopup} >
                <img src={btn} alt={btn} className="btnPage2"/>
            </button>
            </span>
            {popup && (
                <Popup popup={popup} setPopup={setPopup} />
            )}
        </>
    );
}

export default Page2;