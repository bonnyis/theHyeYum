/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const SubHeader = () => {
    const {pathname} = useLocation();
    const [title, setTitle] = useState('')
    const [mainTitle, setMainTitle] = useState('')
    
    const typeCheckTitle = () => {
        switch (pathname) {
            case '/notice':
                return setTitle('공지사항')
            case '/info':
                return setTitle('기업소개')
            case '/greetings':
                return setTitle('CEO 인사말')
            case '/history':
                setMainTitle('기업소개')
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
                <div className="flex justify-between py-4">
                <h2 className="font-semibold text-2xl "> {title} </h2>
         

                <div className="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5  inline-block">
                <path fillRule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clipRule="evenodd" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mx-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <p>{mainTitle ? mainTitle :''}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mx-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <p>{title ? title : ''}</p>
                </div>
                </div>
        </div> : null
        }
        
    </>
  )
}

export default SubHeader