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
const DefaultLayout = () => {

  return (
    <div className="bg-defaultColor">
    <div className="w-screen md:w-auto mx-auto font-Interop max-w-screen-xl font-normal relative ">
      <Header />
        <section className="px-9 min-h-lvh">
        <SubHeader />
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
        <Route path={"*"} element={<NotFound />}/>
      </Route>

    </Routes>
   </>
  )
}

export default App