import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import styles from '../components/Slider.module.css'



// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);



export default function App() { 
  
  return (
    <>
    <Swiper loop={true} pagination={{"clickable": true}} slidesPerView={1} spaceBetween={0} className="mySwiper">
        <SwiperSlide> 
          <div>
            <img className={styles.hello}  src="/images/img-main-section-1-1.png" alt="test1"/>
            <div>hello</div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
         <img className={styles.hello} src="/images/img-main-section-1-2.png" alt="test1"/>
        </SwiperSlide>
        <SwiperSlide>
        <img className={styles.hello}  src="/images/img-main-section-1-3.png" alt="test1"/>
        </SwiperSlide>
     </Swiper>
    </>
  )
}



