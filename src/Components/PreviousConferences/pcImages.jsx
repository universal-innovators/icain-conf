import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./pcImages.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function PcImages({ images }) {  // Destructure the images prop
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
        {images.map((img, index) => (  // Use the correct prop and index as key
          <SwiperSlide key={index}>
            <div className="pcimages">
              <img src={img} alt={`Slide ${index}`} className="PCImage" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
