import React from 'react'
import './Home.css'
import layer8 from "./img/Layer 8.png";
import layer7 from "./img/Layer 7.png";
import layer4 from "./img/Layer 4.png";
import layer4copy from "./img/Layer 4 copy.png";
import layer4copy2 from "./img/Layer 4 copy 2.png";
import layer5 from "./img/Layer 5.png";
import pink_sperm from "./img/pink_sperm.png";
import pink_sperm1 from "./img/pink_sperm_1.png";
import btn from "./img/btn.png";
import bakti from "./img/bakti_1.png";
import Header from "../../component/Header/Header";

function Home({current, setCurrent}) {
    return (
        <>
            <Header current={current} setCurrent={setCurrent}/>
            <div className="home">
                <img className="layer4copy2" src={layer4copy2} alt="layer4copy2"></img>
                <img className="layer5" src={layer5} alt="layer5"></img>
                <img className="layer7" src={layer7} alt="layer7"></img>
                <img className="pink_sperm1" src={pink_sperm1} alt="pink_sperm1"></img>
                <span className="textHello">ПРИВЕТ,</span>
                <img className="layer8" src={layer8} alt="layer8"></img>
                <span className="textTask">
                ЭТО <span style={{fontFamily: "Gilroy ExtraBold"}}>НЕ</span> КОММЕРЧЕСКОЕ ЗАДАНИЕ
            </span>
                <img className="btnHome" src={btn} alt="btn"></img>
                <img className="bakti" src={bakti} alt="bakti"></img>
                <img className="pink_sperm" src={pink_sperm} alt="pink_sperm"></img>
                <img className="layer4copy" src={layer4copy} alt="layer4copy"></img>

                <img className="layer4" src={layer4} alt="layer4"></img>
            </div>
        </>
    );
}

export default Home;