import { Swiper, SwiperSlide  } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import certify1 from "@img/certification_4.jpg"
import certify2 from "@img/certification_2.jpg"
import certify3 from "@img/certification_3.jpg"
import certify4 from "@img/certification_5.jpg"

const Infomation = () => {
  return (
    <div className="infomation">
      <ul className="p-10 list-disc">
        <li>회사명 : (주) 더 혜윰</li>
        <li>대표자 : 최보람</li>
        <li>설립일 : 2021년 12월</li>
        <li>주요업무 : MDF, HPL, LPM, 집성목, 합판, 목재가공, 포장, 업소용 철제다리, 선반 외 주문제작 가구</li>
      </ul>
      <div>
        <strong>인증서</strong>
      <Swiper 
          slidesPerView={1}
          navigation
          modules={[Navigation]}
      >
          <SwiperSlide  className="text-center">
            <div className="slide-item">
              <img src={certify1} alt="" className="inline-block" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-item"><img src={certify2} alt="" /></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-item"><img src={certify3} alt="" /></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-item"><img src={certify4} alt="" /></div>
          </SwiperSlide>

      </Swiper>
      <div className="custom-buttons">
        <button className="custom-prev bg-gray-200 p-2 text-gray"></button>
        <button className="custom-next bg-gray-200 p-2"></button>
      </div>
      </div>
    </div>
  )
}

export default Infomation