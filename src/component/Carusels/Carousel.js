 
 import { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow, Keyboard} from "swiper/modules";
 import 'bootstrap/dist/css/bootstrap.min.css'
 import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { PRODUCT } from '../../data/PRODUCT'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from '../../assets/shopimage/13.jpg'
import img2 from '../../assets/shopimage/14.jpg'

import img4 from '../../assets/shopimage/16.jpg'
import img5 from '../../assets/shopimage/17.jpg'
import img6 from '../../assets/shopimage/18.jpg'
import img7 from '../../assets/shopimage/19.jpg'


export default function Carousel() {
    
  return (
    <div  className="swiperbottom"> 
      <p className="display-5 pt-2 dirr text-center">پرفروشها</p>  
  <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y,Keyboard]}
     breakpoints={{
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }}
     slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
    keyboard={{
      enabled: true,
    }}
     className='pb-5 container d-flex justify-content-center'
    >
      <SwiperSlide ><img className=' imgca1 ' src={img1} alt="img"/></SwiperSlide>
      <SwiperSlide><img className=' imgca1 ' src={img2} alt="img"/></SwiperSlide>
      
      <SwiperSlide ><img className=' imgca1 ' src={img4} alt="img"/></SwiperSlide>
      <SwiperSlide><img className=' imgca1 ' src={img5} alt="img"/></SwiperSlide>
      <SwiperSlide ><img className=' imgca1 ' src={img6} alt="img"/></SwiperSlide>
      <SwiperSlide ><img className=' imgca1 ' src={img7} alt="img"/></SwiperSlide>

    </Swiper>

    </div>
  )
}
