import logoImg from "@img/test2.png"
import { Link } from 'react-router-dom'
const Header = () => {
  const menuList = [
    { mainName: 'info',
      list: [
        {name: 'CEO 인사말', path: '/greetings'},
        {name: '기업소개', path: '/info'},
        {name: '연혁', path: '/history'},
        {name: '오시는길', path: '/direction'},
      ]
    },
    { mainName: 'product',
      list: [
        {name: '테이블(모양지)', path: '/product1'},
        {name: '철재', path: '/product2'},
        {name: '집기류', path: '/product3'},
      ]
    },
    { mainName: 'designLab',
      list: [
        {name: '제품디자인연구소', path: '/designLab'},
      ]
    },
    { mainName: 'community',
      list: [
        {name: '공지사항', path: '/notice'},
        {name: '적용사례', path: '/example'},
        {name: '제품견적문의', path: '/question'},
      ]
    },
  ]
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


  )
}

export default Header