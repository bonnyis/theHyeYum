import { Outlet, Route, Routes } from 'react-router-dom'
import Infomation from "@/views/Infomation.jsx"
import Header from '@/components/common/Header.jsx'
import SubHeader from '@/components/common/SubHeader.jsx'
import Footer from '@/components/common/Footer.jsx'
import MainView from "@/views/MainView.jsx"
import NoticeList from "@/views/community/NoticeList.jsx"
const DefaultLayout = () => {

  return (
    <div className="bg-defaultColor">
    <div className="h-screen w-screen md:w-auto mx-auto font-Interop max-w-screen-xl font-normal relative ">
      <Header />
        <section className="px-9">
        <SubHeader />
        <Outlet />
        </section>
      <Footer />
  </div>
  </div>
  )
}

const App = () => {
  return (
   <>
    <Routes>
      <Route  path="/"  element={<DefaultLayout />}  >
        <Route index  element={<MainView />} />
        <Route path="/info" element={<Infomation />} /> 

        <Route path='/notice' element={<NoticeList />}/>
      </Route>

    </Routes>
   </>
  )
}

export default App