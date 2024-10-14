import logoImg from "@img/test2.png"
import { Link } from 'react-router-dom'
const Header = () => {

  return (
    <>
    <div className="h-20 w-full flex items-center  mainnav my-3">
      <div className="imgBox w-1/5 pl-10 text-center">
        <img src={logoImg} alt="로고" className="h-12"/>
      </div>

      <ul className="w-4/5 flex items-center relative text-center h-auto real">
          <li className='w-1/4'><Link to={'/info'}>회사소개</Link>
           </li>
           <li className='w-1/4'><Link to={''}>제품소개</Link>
           </li>
           <li className='w-1/4'><Link to={''}>연구개발</Link>
           </li>
           <li className='w-1/4'><Link to={''}>커뮤니티</Link>
           </li>
      </ul>
    </div>
    <div className="sub absolute top-20 right-0 w-4/5 h-56 z-50">
      <div className="subnav flex">
          <ul className="">
              <li><Link to={''}>CEO 인사말</Link></li>
              <li><Link to={''}>기업소개</Link></li>
              <li><Link to={''}>연혁</Link></li>
              <li><Link to={''}>오시는 길</Link></li>
          </ul>
          <ul className="">
              <li><Link to={''}>테이블(모양지)</Link></li>
              <li><Link to={''}>철재</Link></li>
              <li><Link to={''}>집기류</Link></li>
            </ul>
            <ul className="">
              <li><Link to={''}>제품디자인연구소</Link></li>
            </ul>
            <ul className="">
              <li><Link to={''}>공지사항</Link></li>
              <li><Link to={''}>적용사례</Link></li>
              <li><Link to={''}>제품견적문의</Link></li>
            </ul>
            </div>
      </div>
      </>


  )
}

export default Header