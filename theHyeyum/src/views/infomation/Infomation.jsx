import {useState} from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react'
import { Navigation, Pagination, EffectFade, Thumbs, FreeMode  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import certify1 from "@img/certification_4.jpg"
import certify2 from "@img/certification_2.jpg"
import certify3 from "@img/certification_3.jpg"
import certify4 from "@img/certification_5.jpg"


const Infomation = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const imgSrc = [
    {
      alt: 'certify1', src: certify1, idx: `certify-1`
    },
    {
      alt: 'certify2', src: certify2, idx: `certify-2`
    },
    {
      alt: 'certify3', src: certify3, idx: `certify-4`
    },
    {
      alt: 'certify4', src: certify4, idx: `certify-5`
    },    
  ]
  const onThumb = (event) => {
    setThumbsSwiper(event);
    console.log(event)

  }
  return (
    <div className="infomation">
      <ul className="p-10 list-disc">
        <li>회사명 : (주) 더 혜윰</li>
        <li>대표자 : 최보람</li>
        <li>설립일 : 2021년 12월</li>
        <li>주요업무 : MDF, HPL, LPM, 집성목, 합판, 목재가공, 포장, 업소용 철제다리, 선반 외 주문제작 가구</li>
        <li>기업 인증서</li>
      </ul>
      <div className="flex justify-between">
        {/* 좌측 실제 슬라이더 */}
        <div className="w-3/4 lg:mt-36 mr-4 pr-4">
        <Swiper 
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper }}
          navigation
          effect={'fade'}
          loop={true}
          modules={[Navigation, Pagination, EffectFade, Thumbs, FreeMode]}
          pagination={{
            type: 'fraction',
          }}>
             {imgSrc.map((val) =>
    
                <SwiperSlide key={`${val.idx}`} className="text-center"> 
                  <div className="lg:p-14"><img src={val.src} alt={val.alt} style={{width: ''}} /></div>
                </SwiperSlide>
        
              )}
          </Swiper>
        </div>
        {/* 우측 세로 슬라이드 내역 */}
        <div className="w-1/4">
          <div className="lg:p-14">
            <Swiper  
            onSwiper={(event) => onThumb(event)}
            className="lg:max-1200"
            direction={'vertical'}
            spaceBetween={0}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}>
              {imgSrc.map((item,idx) =>
                <SwiperSlide key={`item-${idx+1}`}>
                  <div className=""><img src={item.src} alt={item.alt} /></div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        
        </div>
      </div>

    </div>
  )
}

export default Infomation