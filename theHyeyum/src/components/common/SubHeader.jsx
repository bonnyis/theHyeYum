/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const SubHeader = () => {
    const {pathname} = useLocation();
    const [title, setTitle] = useState('')
    
    const typeCheckTitle = () => {
        switch (pathname) {
            case '/notice':
                return setTitle('공지사항')
            case '/info':
                return setTitle('기업소개')
            case '/greetings':
                return setTitle('CEO 인사말')
            case '/history':
                return setTitle('연혁')
            case '/direction':
                return setTitle('오시는 길')
            default:
            return setTitle('')
        }
    }
    useEffect(() => {
        typeCheckTitle()
    }, [pathname])
    
  return (
    <>  
        { 
            pathname ? 
            <div className="h-12">
            <h2 className="font-semibold text-2xl"> {title} </h2>
        </div> : null
        }
        
    </>
  )
}

export default SubHeader