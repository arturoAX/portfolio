import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './portfolio.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../images/BriWithWings.png';
import slide_image_2 from '../images/Kimiko_3750.jpg';
import slide_image_3 from '../images/Shanara-71.jpg';
import slide_image_4 from '../images/WindMaster.png';
import slide_image_5 from '../images/genshinpeeps.png';
import slide_image_6 from '../images/j-fashion.jpg';
import slide_image_7 from '../images/DangAndGhost.png';
import slide_image_8 from '../images/HeXuan_3785.jpg';
import slide_image_9 from '../images/Birthday.jpg';
import slide_image_10 from '../images/Amy_3786.jpg';
import slide_image_11 from '../images/SkullyHuaCheng.png';
import slide_image_12 from '../images/Jinx_3784.jpg';
import slide_image_13 from '../images/SailorMoon.jpg';




function portfolio() {
  return (
    <section id='portfolio'>
    <div className="container">
      <h1 className="heading">Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_11} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_12} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_13} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    <div className='more'>
        <p>Want to see more?</p>
        <a href='https://photo855.pixieset.com/?fbclid=PAZXh0bgNhZW0CMTEAAabn9cRg8FnssVJ8xzq1ZyXebUd8mi8qE3yka_xhTlj1BPjhYyausGyLZFM_aem_3ct2ifslTvzbd-Q10CV4jg' target="_blank" className='btn btn-primary'>Full Gallery</a>

    </div>


    </section>
  );
}


export default portfolio;