import Footer from "../Footer/footer";
import ImpDate from "../impDates/impDtext";
import Venue from "./unnamed.jpg";
import gtbit from "../Hslides/HslidesImages/gtbit.jpg"
import "./conference.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Conference() {
  const disableRender=()=>{
    return [];
  }
  return (
    <>
      <div className="conference">
        <h1>We are located at...</h1>
        <hr />
        <div className="coContainer">
          {/* left  */}
          <div className="coLeft">
          {/* <Carousel autoPlay='true' renderThumbs={disableRender} > */}
            {/* <div>
              <img src={gtbit} alt="Venue" style={{'borderRadius':'10px'}}/>
            </div> */}
            <div>
              <img src={Venue} alt="Venue" style={{'borderRadius':'10px'}}/>
            </div>
            {/* </Carousel> */}
            <div className="coAddress">
            

              <h1>Venue:</h1>              
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.1241233865017!2d55.417502711095494!3d25.131494134265658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f63ecaf0b7683%3A0x178903db8ef63bc7!2sBirla%20Institute%20of%20Technology%20and%20Science%2C%20Pilani-%20Dubai!5e0!3m2!1sen!2sin!4v1752772887415!5m2!1sen!2sin" width={600} height={450} style={{border: 0,display:'flex',margin:'1rem auto'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <li>BITS Pilani, Dubai Campus</li>                 
            </div>
          
            
          </div>

          {/* Right  */}
          <div className="coRight">
            <ImpDate />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Conference;
