import React, {useEffect, useState} from 'react'
import Footer from "../Footer/Footer";
import Home from "../../page/Home/Home";
import Page1 from "../../page/Page1/Page1";
import Page2 from "../../page/Page2/Page2";

function ImageSlider({ diffx, diffy}) {
    const [current, setCurrent] = useState(0);
    let len = 3;
    useEffect(()=>{
        if(Math.abs(diffx) > Math.abs(diffy)){
            if(diffx > 0) setCurrent(current === 0 ? len - 1 : current - 1)
            else setCurrent(current === len - 1 ? 0 : current + 1)
        }
    }, [diffx, diffy, current, len])

    return (
        <>
            { current === 0 &&
                <Home current={current} setCurrent={setCurrent} />
            }
            { current === 1 &&
            <Page1 current={current} setCurrent={setCurrent}/>
            }
            { current === 2 &&
            <Page2 current={current} setCurrent={setCurrent}/>
            }
            <Footer/>
        </>
    );
}

export default ImageSlider;