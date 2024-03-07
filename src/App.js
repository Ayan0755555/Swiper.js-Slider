import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
      <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
    </SwiperSlide>
      </Swiper>
    </>
  );
}

