import React, {useRef,useEffect, useState} from 'react'
import rectangle from "./img/Rectangle 1.png";
import btn_page1 from "./img/btn.png";
import Layer3copy2 from "./img/Layer 3 copy 2.png";
import Layer3copy3 from "./img/Layer 3 copy 3.png";
import Layer3copy4 from "./img/Layer 3 copy 4.png";
import Layer3copy5 from "./img/Layer 3 copy 5.png";
import Layer3copy6 from "./img/Layer 3 copy 6.png";

import './Page1.css'
import Header from "../../component/Header/Header";

function Page1({current, setCurrent}) {
    const scroll = useRef(null)
    const bar = useRef(null)
    const message = useRef(null)

    const [startY, setStartY] = useState(0)
    const [endY, setEndY] = useState(0)
    const [endScrollMes, setEndScrollMes] = useState(0)

    const preventDefault  = e => e.preventDefault()

    const handlerTouchMove = (e) => {
        if (e.touches[0].clientY >= startY+ scroll.current.getBoundingClientRect().height/2 && e.touches[0].clientY <= ((startY + endY) - scroll.current.getBoundingClientRect().height/2)) {
            if(e.touches[0].clientY > 500){
                scroll.current.style.top = `${e.touches[0].clientY - startY-20}px`
                message.current.scrollTop = (e.touches[0].clientY - startY+50)
            }else{
                scroll.current.style.top = `${e.touches[0].clientY - startY-30}px`
                message.current.scrollTop = (e.touches[0].clientY - startY-50)
            }
        }
    };

    useEffect(() => {
        setStartY(bar.current.getBoundingClientRect().y)
        setEndY(bar.current.getBoundingClientRect().height)
        setEndScrollMes(message.current.scrollHeight - message.current.clientHeight)
        message.current.addEventListener('wheel', preventDefault)
    }, [])

    useEffect(() => {
        setEndScrollMes(message.current.scrollHeight - message.current.clientHeight)
    }, [endScrollMes])

    return (
        <>
            <Header current={current} setCurrent={setCurrent} />
            <img src={Layer3copy4} className="Layer3copy4" alt="layer"/>
            <img src={Layer3copy2} className="Layer3copy2" alt="layer"/>
            <img src={Layer3copy6} className="Layer3copy6" alt="layer"/>
            <img src={Layer3copy3} className="Layer3copy3" alt="layer"/>
            <img src={Layer3copy5} className="Layer3copy5" alt="layer"/>

            <span className="textHello">ТЕКСТ СООБЩЕНИЯ</span>
            <img src={rectangle} ref={bar} className="rectangle" alt="rectangle"/>
            <img src={btn_page1} ref={scroll}  onTouchMove={handlerTouchMove}  className="btn_page1" alt="btn_page1"/>

            <span className="blockText"  ref={message}>
                <b>Lorem ipsum dolor sit amet,</b> consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi
                tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget
                felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam
                dignissim diam quis enim lobortis. Est sit amet facilisis magna.
                Neque laoreet suspendisse interdum consectetur libero id.
                Nec ullamcorper sit amet risus nullam eget felis eget.
                Mollis aliquam ut porttitor leo a diam sollicitudin tempor id.
                Euismod quis viverra nibh cras pulvinar mattis nunc.
                Massa massa ultricies mi quis. Sit amet massa vitae tortor
                condimentum lacinia. Et malesuada fames ac turpis egestas
                integer eget. Elementum pulvinar etiam non quam lacus suspendisse
                faucibus interdum posuere.
                <br />
                <br />
                Amet justo donec enim diam vulputate ut pharetra sit.
                Risus ultricies tristique nulla aliquet enim tortor at auctor.
                Velit sed ullamcorper morbi tincidunt ornare massa.
                Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim
                diam quis enim. Gravida neque convallis a cras. Ut enim blandit
                volutpat maecenas volutpat. Mauris sit amet massa vitae tortor
                condimentum lacinia quis vel.
                </span>
        </>
    );
}

export default Page1;