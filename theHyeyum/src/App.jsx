import { Outlet, Route, Routes } from 'react-router-dom'
import Infomation from "@/views/infomation/Infomation.jsx"
import Header from '@/components/common/Header.jsx'
import SubHeader from '@/components/common/SubHeader.jsx'
import Footer from '@/components/common/Footer.jsx'
import MainView from "@/views/MainView.jsx"
import NoticeList from "@/views/community/NoticeList.jsx"
import DirectionMap from  "@/views/infomation/DirectionMap.jsx"
import Greetings from  "@/views/infomation/Greetings.jsx"
import History from  "@/views/infomation/History.jsx"
import NotFound from "@/views/NotFound.jsx"
import QnaPage from '@/views/community/QnaPage.jsx'
import { useLocation } from "react-router-dom"
// import { useDispatch } from 'react-redux';
// import { setVisualPcMenu } from "@/store/common/thunkFunctions"

const DefaultLayout = () => {
  const {pathname} = useLocation();
  // const dispatch = useDispatch();
  //TODO 외부 클릭 시 메뉴바 닫히도록 
  //TODO 메뉴바 숨김 보임처리시 애니메이션 처리로 부드럽게 조정
  const outsideMenu = (e) => {
    console.log(e)
  }
  return (
    <div className="bg-defaultColor" >
    <div className="w-screen md:w-auto mx-auto font-Interop max-w-screen-xl font-normal relative" onClick={(event) => outsideMenu(event)}>
      <Header />
        <section className="px-9 min-h-lvh">
          {/*  main에선 서브헤더 안보이게 설정 */}
          {
              pathname !== '/'  ?<SubHeader /> :''
          }
        <Outlet />
        </section>
 
  </div>
  <Footer />
  </div>
  )
}

const App = () => {
  return (
   <>
    <Routes>
      <Route  path="/"  element={<DefaultLayout />}  >
        <Route index  element={<MainView />} />
        {/* 기업소개 */}
        <Route path="/info" element={<Infomation />} /> 
        <Route path="/greetings" element={<Greetings />} /> 
        <Route path="/history" element={<History />} /> 
        <Route path="/direction" element={<DirectionMap />} /> 
        {/* 커뮤니티 */}
        <Route path='/notice' element={<NoticeList />}/>
        <Route path='/question' element={<QnaPage />}/>
        <Route path={"*"} element={<NotFound />}/>
      </Route>

    </Routes>
   </>
  )
}

export default App