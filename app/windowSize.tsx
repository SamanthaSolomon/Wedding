import { useState, useEffect } from "react";

export default function windowSize() {
    const [windowSize, setWindowSize] = useState({
        responsiveWidth: 0
    })

    useEffect(() => {
        if (typeof window !== 'undefined'){
            setWindowSize({
                responsiveWidth: window.innerWidth
            })
        }
    }, [])
    return windowSize
}
