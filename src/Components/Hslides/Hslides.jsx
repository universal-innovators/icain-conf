import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// css of the slides
import "./Hslides.css";
import Img3 from "../ConferenceVenue/vste.jpg";
import poster from "./HslidesImages/poster.jpg"
import poster2 from "./HslidesImages/poster2.jpg"



export default function App() {
  return (
    <div className="poster">
        <img src={poster2}/>
    </div>
    
  );
}

