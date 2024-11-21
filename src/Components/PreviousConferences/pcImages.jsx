import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./pcImages.css";

import { Pagination, Navigation } from "swiper";

export default function PcImages({ images }) {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="swiper"
      breakpoints={{
        320: {
          slidesPerView: 1, // Full-width on very small screens
          slidesPerGroup: 1,
        },
        600: {
          slidesPerView: 2, // Two slides for slightly larger devices
          slidesPerGroup: 2,
        },
        1024: {
          slidesPerView: 3, // Three slides for desktops and larger screens
          slidesPerGroup: 3,
        },
      }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="pcimages">
            <img src={img} alt={`Slide ${index}`} className="PCImage" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
