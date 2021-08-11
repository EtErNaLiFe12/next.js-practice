

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"



// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);



export default function App() { 
  
  return (
    <>
    <Swiper loop={true} pagination={{"clickable": true}} slidesPerView={4} spaceBetween={110} className="mySwiper">
 
        <SwiperSlide> 
          <img className={"hello"} style={{ marginLeft: 20 }} src="" alt="test1"/>
          <p style={{ marginLeft: 20 }}>hello</p>
          </SwiperSlide>
          <SwiperSlide>
          <img style={{ marginLeft: 20 }}  src="" alt="test1"/>
          <p>hello</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="test1"/>
          <p>hello</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="test1"/>
          <p>hello</p>
        </SwiperSlide> 
     </Swiper>
    </>
  )
}

