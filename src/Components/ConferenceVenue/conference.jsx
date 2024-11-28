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
              
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.88237920098!2d55.902384299999994!3d25.741403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef675d1d9d95243%3A0x95bd1dabe7ead2ae!2sUniversity%20of%20Stirling%2C%20RAK!5e0!3m2!1sen!2sin!4v1732373933912!5m2!1sen!2sin" width={600} height={450} style={{border: 0,display:'flex',margin:'1rem auto'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <li>University of Stirling</li>
              <li>RAKEZ Academic Zone</li>
              <li>Al Dhait South - Ras Al Khaimah</li>
              <li>United Arab Emirates</li>      
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
