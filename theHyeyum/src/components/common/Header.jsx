/* eslint-disable react/prop-types */
import logoImg from "@img/test2.png"
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useResize from '@/utils/useResize.js'
const menuList = [
  { mainName: '기업소개',
    mainPath: 'info',
    list: [
      {name: 'CEO 인사말', path: '/greetings'},
      {name: '기업소개', path: '/info'},
      {name: '연혁', path: '/history'},
      {name: '오시는길', path: '/direction'},
    ]
  },
  { 
    mainName: '제품소개',
    mainPath: 'product',
    list: [
      {name: '테이블(모양지)', path: '/product1'},
      {name: '철재', path: '/product2'},
      {name: '집기류', path: '/product3'},
    ]
  },
  { 
    mainPath: 'designLab',
    mainName: '연구개발',
    list: [
      {name: '제품디자인연구소', path: '/designLab'},
    ]
  },
  { mainName: '커뮤니티',
    mainPath: 'community',
    list: [
      {name: '공지사항', path: '/notice'},
      {name: '적용사례', path: '/example'},
      {name: '제품견적문의', path: '/question'},
    ]
  },
]
// 모바일용 헤더 
const MbHeader = ({ mobileYn, setMobileYn }) => {

  return(
    <div id="menu-icon" className="block cursor-pointer w-14" onClick={()=> setMobileYn(!mobileYn)}>
      <div className="w-6 h-1 bg-white mb-1 transition-transform bg-logoColor"></div>
      <div className="w-6 h-1 bg-white mb-1 transition-transform bg-logoColor"></div>
      <div className="w-6 h-1 bg-white transition-transform bg-logoColor"></div>
    </div>
  
  )
}
// 모바일용 메뉴리스트
const MbHeaderMenu = () => {
  return(
    <div className="bg-logoColor absolute right-0 text-defaultColor p-5 rounded-md top-20 h-full bg-white shadow-lg transform transition-transform duration-300">
       <div className="flex flex-col w-52">
          {
            menuList && menuList?.map((section,indx)=> (
              <ul key={`menu + ${indx +1}`}>
                <li className="">
                 <span  className="font-bold"> {section.mainName}</span>
                <ul className="ml-5 my-2">
                {
                  section.list?.map(link => (
                    <li key={link.path}><Link to={link.path}>{link.name}</Link></li>
                  ))
                }
              </ul>
                </li>
              </ul>
           
            ))
          }
          </div>
    </div>
  )
  
}
const Header = () => {
  const { deviceType, activeResize} =  useResize();
  const location = useLocation()

  const [mobileYn, setMobileYn] = useState(false);

  useEffect(() => {
    activeResize();
  }, [window.innerWidth])
  useEffect(() => {
    // 페이지 전환 시 메뉴바 닫기
    if(deviceType === 'MOBILE') {
      setMobileYn(false)
    }
  }, [location])
  
  const titleMenu = [
    {main: 'info', name: '회사소개'},
    {main: 'product', name: '제품소개'},
    {main: 'designLab', name: '연구개발'},
    {main: 'community', name: '커뮤니티'},
  ]

  const changemob = () => {
    setMobileYn(!mobileYn);
    const target = document.querySelector('.sub');
    if(target && target?.classList) {
      target.classList.forEach(list => list.includes('block') ?   target.classList.remove('block') : target.classList.add('block'))
    }
  }
  return (
    <>
    <div className="h-20 w-full flex justify-between items-center mainnav my-3">
      <div className="md:pl-10 pl-5 md:w-1/5 w-36 text-center">
        <img src={logoImg} alt="로고" className="h-12"/>
      </div>
    {
       deviceType === 'MOBILE' ?  <MbHeader mobileYn={mobileYn} setMobileYn={setMobileYn}/> : 
       <ul className="w-4/5 flex md:mt-0 mt-5 items-center relative text-center h-auto real font-semibold">
      {
        titleMenu?.map(item => (
          <li key={item.main} onClick={()=> changemob()} className={'w-1/4'}>{item.name}</li>
        ))
      }
      </ul>
    }
      
    </div>
    {
      deviceType === 'MOBILE' && mobileYn ?  <MbHeaderMenu menuList={menuList} />: 
      <>
      <div className='menu_background bg-defaultColor'></div>
      <div className="sub absolute w-4/5 h-56 z-50 top-24 right-0 min-[320px]:left-8 min-[560px]:left-10">
        <div className="subnav flex">
          {
            menuList?.map((section,indx)=> (
              <ul key={`menu + ${indx +1}`}>
                {
                  section.list?.map(link => (
                    <li key={link.path}><Link to={link.path}>{link.name}</Link></li>
                  ))
                }
              </ul>
            ))
          }
          </div>
        </div>
        </>
    }
      </>


  )
}

export default Header