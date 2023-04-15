import React, {useState} from "react"
import ImageSlider from "./component/ImageSlider/ImageSlider";

function App() {
    const [diffx, setdiffx] = useState(0);
    const [diffy, setdiffy] = useState(0);
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    let x1 = null;
    let y1 = null;

    function handleTouchStart(event) {
        const firstTouch = event.touches[0];
        x1 = firstTouch.clientX;
        y1 = firstTouch.clientY;
    }

    function handleTouchMove(event) {
        if (!x1 || !y1) return false;
        let x2 = event.touches[0].clientX;
        let y2 = event.touches[0].clientY;
        setdiffx(x2 - x1);
        setdiffy(y2 - y1);
        x1 = null;
        y1 = null;
    }

    return (
        <>
            <ImageSlider diffx={diffx} diffy={diffy}/>
        </>
    );
}

export default App;
