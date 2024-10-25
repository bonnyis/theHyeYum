import {useState, useEffect } from "react";

const useResize = () => {
    const [deviceType, setDeviceType] = useState('PC');
    const [windowSize, setWindowSize] = useState(null);

    const activeResize = () => {
        setWindowSize(window.innerWidth)
        const userAgent = navigator.userAgent
        if(userAgent.indexOf('iPhone') > -1 ||userAgent.indexOf('Android') > -1 || window.innerWidth <= 1060) {
            return setDeviceType('MOBILE')
        } else return setDeviceType('PC')
    }
    useEffect(()=> {

        window.addEventListener('resize', activeResize)

        return() => {
            window.removeEventListener('resize', activeResize)
        }
    },[windowSize])
    
    return {deviceType, windowSize, activeResize}
}

export default useResize