import React, {useEffect, useState} from 'react'
import Footer from "../Footer/Footer";
import Home from "../../page/Home/Home";
import Page1 from "../../page/Page1/Page1";
import Page2 from "../../page/Page2/Page2";

function ImageSlider({diffx, diffy}) {
    let [current, setCurrent] = useState(0);

    useEffect(()=>{
        if(Math.abs(diffx) > Math.abs(diffy)){
            if(diffx > 0) setCurrent(current === 0 ? 3 - 1 : current - 1)
            else setCurrent(current === 3 - 1 ? 0 : current + 1)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [diffx, diffy])

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