/* eslint-disable react/prop-types */
import logoImg from "@img/test2.png"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useResize from '@/utils/useResize.js'
import { useSelector, useDispatch } from 'react-redux';
import {setVisualMbMenu } from "@/store/common/thunkFunctions"
import menuList from '@/utils/menuList'
// 모바일용 헤더 
const MbHeader = () => {
  const dispatch = useDispatch();
  const visualMbMenu = useSelector(state => state.common.visualMbMenu);
  const setViewMbMenu = () => {
    dispatch(setVisualMbMenu(!visualMbMenu))
  }
  return(
    <div id="menu-icon" className="block cursor-pointer w-14" onClick={()=> setViewMbMenu(!visualMbMenu)}>
      <div className="w-6 h-1 bg-white mb-1 transition-transform bg-logoColor"></div>
      <div className="w-6 h-1 bg-white mb-1 transition-transform bg-logoColor"></div>
      <div className="w-6 h-1 bg-white transition-transform bg-logoColor"></div>
    </div>
  )
}

// 모바일용 메뉴리스트
const MbHeaderMenu = () => {
  const dispatch = useDispatch();
  const visualMbMenu = useSelector(state => state.common.visualMbMenu);
  const setViewMbMenu = () => {
    dispatch(setVisualMbMenu(!visualMbMenu))
  }
  return(
    <div className={`bg-logoColor text-defaultColor absolute right-0 top-0 h-full p-5 rounded-l-lg z-50`}>
      <div className="flex flex-col items-end mr-2 mt-2" onClick={()=> setViewMbMenu(!visualMbMenu)}>
        <div className="w-6 h-1 mb-1 transition-all
        rotate-45 translate-y-2 bg-defaultColor right-0"></div>
        <div className={"w-6 h-1 bg-white mb-1 opacity-0 bg-defaultColor right-0"}></div>
        <div className="w-6 h-1  mb-1 transition-all  bg-defaultColor -rotate-45 -translate-y-2 right-0"></div>
      </div>
       <div className="flex flex-col w-52">
          {
            menuList && menuList?.map((section,indx)=> (
              <ul key={`menu + ${indx +1}`}>
                <li className="hover:animate-color">
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
  const dispatch = useDispatch();
  const { deviceType, activeResize, isMobile} =  useResize();
  const location = useLocation()
  const visualMbMenu = useSelector(state => state.common.visualMbMenu);

  useEffect(() => {
    activeResize();
  }, [window.innerWidth])
  useEffect(() => {
    // 페이지 전환 시 메뉴바 닫기
    if(deviceType === 'MOBILE') {
      dispatch(setVisualMbMenu(false))
    }
  }, [location])
  
  const titleMenu = [
    {main: 'info', name: '회사소개'},
    {main: 'product', name: '제품소개'},
    {main: 'designLab', name: '연구개발'},
    {main: 'community', name: '커뮤니티'},
  ]

  const changemob = () => {
    dispatch(setVisualMbMenu(false))
    const target = document.querySelector('.sub');
    if(target && target?.classList) {
      target.classList.forEach(list => list.includes('block') ?   target.classList.remove('block') : target.classList.add('block'))
    }
  }
  return (
    <>
    <div className={`h-20 w-full flex justify-between items-center mainnav mb-3 ${isMobile ? 'shadow-sm' : ''}`}>
      <div className="md:pl-10 pl-5 md:w-1/5 w-36 text-center">
      <Link to={'/'}>
        <img src={logoImg} alt="더혜윰" className="h-12"/>
        </Link>
      </div>
    {
       deviceType === 'MOBILE' ?  <MbHeader /> : 
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
      isMobile && visualMbMenu ?  <MbHeaderMenu />: 
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