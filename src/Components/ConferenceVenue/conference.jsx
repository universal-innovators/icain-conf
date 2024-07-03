import Footer from "../Footer/footer";
import ImpDate from "../impDates/impDtext";
import Venue from "./gtbit.jpg";
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
          <Carousel autoPlay='true' renderThumbs={disableRender} >
            <div>
              <img src={gtbit} alt="Venue" style={{'borderRadius':'10px'}}/>
            </div>
            <div>
              <img src={Venue} alt="Venue" style={{'borderRadius':'10px'}}/>
            </div>
            </Carousel>
            <div className="coAddress">
            

              <h1>Venue:</h1>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9418491745473!2d77.11393427447791!3d28.63150488412918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0351baff6933%3A0x48a94e3504dadb9e!2sGuru%20Tegh%20Bahadur%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1717868655285!5m2!1sen!2sin" width={600} height={450} style={{border: 0,display:'flex',margin:'1rem auto'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <li>Guru Tegh Bahadur Institute of Technology (GTBIT)(GGSIPU)</li>
              <li> Rajouri Garden</li>
              <li>New Delhi, Delhi,</li>
              <li>Pincode: 110064</li>
              <li>INDIA</li>
              

           
            
              
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
