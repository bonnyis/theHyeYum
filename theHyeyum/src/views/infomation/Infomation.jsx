import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import certify1 from "@img/certification_4.jpg";
import certify2 from "@img/certification_2.jpg";
import certify3 from "@img/certification_3.jpg";
import certify4 from "@img/certification_5.jpg";

const CompanyInfo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const imgSrc = [
    { alt: 'certify3', src: certify3, idx: `certify-4` },
    { alt: 'certify1', src: certify1, idx: `certify-1` },
    { alt: 'certify2', src: certify2, idx: `certify-2` },
    
    { alt: 'certify4', src: certify4, idx: `certify-5` },
  ];
  

  return (
    <div className="company-info p-10 max-w-7xl mx-auto">
      {/* 기업소개 + 간단한 비전 / 미션 문구 */}
      <section className="mb-16">
        {/* <h2 className="text-3xl font-bold mb-4">(주) 더 혜윰 소개 및 연혁</h2> */}
        <p className="mb-6 text-xl md:text-lg leading-relaxed text-gray-700">
          2021년 12월 설립된 (주) 더 혜윰은 MDF, HPL, LPM, 집성목 등 맞춤형 가구와 목재 가공 전문 기업입니다.  
          초기 설립 이후 빠르게 성장하며, 품질과 고객 만족을 최우선으로 삼고 있습니다.  
          앞으로도 혁신적인 디자인과 친환경 소재를 통해 국내외 가구 시장을 선도하는 기업이 되고자 합니다.
        </p>
        {/* 간단한 연혁 요약 */}
        <div className="border-l-4 border-blue-600 pl-6 space-y-4 border-logoColor">
          <div>
            <p className="font-semibold text-blue-600 mb-2">2024년</p>
            <div className="text-lg">벤처기업 인증 (제 2024 0207030017호)</div>
          </div>
          <div>
            <p className="font-semibold text-blue-600 mb-2">2022년</p>
            <div className="text-lg">여성기업 인증 획득</div>
          </div>
          <div>
            <p className="font-semibold text-blue-600 mb-2">2021년 ~ 2022년</p>
            <div className="text-lg">주식회사 더 혜윰 설립 및 합병</div>
          </div>
          <div>
            <p className="font-semibold text-blue-600 mb-2">1988년 ~ 2008년</p>
            <div className="text-lg">형제가구</div>
          </div>
        </div>
      </section>

      {/* 인증서 슬라이더 */}
      <section className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-3/4">
          <Swiper
            slidesPerView={1}
            thumbs={{ swiper: thumbsSwiper }}
            navigation
            effect={'fade'}
            loop={true}
            modules={[Navigation, Pagination, EffectFade, Thumbs, FreeMode]}
            pagination={{ type: 'fraction' }}
          >
            {imgSrc.map((val) => (
              <SwiperSlide key={val.idx} className="text-center">
                <div className="lg:p-8">
                  <img src={val.src} alt={val.alt} className="mx-auto" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full lg:w-1/4">
          <Swiper
            onSwiper={(swiper) => setThumbsSwiper(swiper)}
            direction={'vertical'}
            spaceBetween={0}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {imgSrc.map((item, idx) => (
              <SwiperSlide key={`thumb-${idx}`}>
                <img src={item.src} alt={item.alt} className="cursor-pointer" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default CompanyInfo;
