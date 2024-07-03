import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// css of the slides
import "./Hslides.css";
import Img3 from "../ConferenceVenue/vste.jpg";
import icain from "./HslidesImages/icain.jpg"


export default function App() {
  return (
    <div className="poster">
        <img src={icain}/>
    </div>
    
  );
}

