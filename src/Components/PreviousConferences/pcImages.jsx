import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./pcImages.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function PcImages({img1, img2, img3, img4, img5, img6, img7, img8}) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* 1st  */}
        <SwiperSlide>
        <div className="pcimages">
  <img src={img1} alt="" className="PCImage" />
        </div>
        </SwiperSlide>

        {/* 2nd  */}
        <SwiperSlide>
        <div className="pcimages">
  <img src={img2} alt="" className="PCImage" />
        </div>
        </SwiperSlide>

        {/* 3rd  */}
        <SwiperSlide>
        <div className="pcimages">
  <img src={img3} alt="" className="PCImage" />
        </div>
        </SwiperSlide>

        {/* 4th  */}
        <SwiperSlide>
        <div className="pcimages">
  <img src={img4} alt="" className="PCImage" />
        </div>
        </SwiperSlide>

        {/* 5th  */}
        <SwiperSlide>
        <div className="pcimages">
  <img src={img5} alt="" className="PCImage" />
        </div>
        </SwiperSlide>

        {/* 6th  */}
        <SwiperSlide>
        <div className="pcimages">
  <img src={img6} alt="" className="PCImage" />
        </div>
        </SwiperSlide>

        {/* 7th  */}
        <SwiperSlide>
        <div className="pcimages">
  <img src={img7} alt="" className="PCImage" />
        </div>
        </SwiperSlide>

        {/* 8th  */}
        <SwiperSlide>
        <div className="pcimages">
  <img src={img8} alt="" className="PCImage" />
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
