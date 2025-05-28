import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// css of the slides
import "./Hslides.css";
import Img3 from "./HslidesImages/img3.png";
import poster from "./HslidesImages/poster.jpg"
import poster1 from "./HslidesImages/poster1.jpeg"



export default function App() {
  return (
    <div className="poster">
        <img src={poster}/>
    </div>
    
  );
}

