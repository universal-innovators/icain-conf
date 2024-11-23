import React from 'react'
import CardsContainer from './CardsContainer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from './images/1.jpeg';
import img2 from './images/2.jpeg';
import img3 from './images/burj.jpg';
import img4 from './images/mosque.jpg';



const Guide = () => {
  const disableRender=()=>{
    return [];
  }
  return (
    <div>
      {/* <Carousel  renderThumbs={disableRender} showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            style={{ height: '500px' }}>
            <div >
              <img src={img1} alt="Venue" style={{ height: '50%' }}/>
            </div>
            <div>
              <img src={img2} alt="Venue" style={{ height: '50%' }}/>
            </div>
            <div>
              <img src={img3} alt="Venue" style={{ height:'60vh',width:'100%' }}/>
            </div>
            <div>
              <img src={img4} alt="Venue" style={{  height:'50vh',objectFit:'contain'}}/>
            </div>
      </Carousel> */}
        <CardsContainer />
    </div>
  )
}

export default Guide;