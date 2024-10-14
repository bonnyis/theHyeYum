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
            default:
            return;
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