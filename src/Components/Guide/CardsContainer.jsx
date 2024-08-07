import React from 'react';

import './card.css'
import { delhiPlaces, delhiHotels } from './places';
import Footer from '../Footer/footer';
import 'animate.css';
export default function CardsContainer() {
  return (


    <>
      <div className="spSessionHeading">
        <h2>Visitors Guide</h2>
        <hr />
      </div>
      <div className="spSessionCont">
        {/* <h3>Places to visit in Prague</h3> */}
        {/* <hr /> */}
        {/*      
    <div className='main-card SpSessionCard animate__animated animate__bounceInLeft' id='sessCon'>
        {praguePlaces.map((p,ind)=>{
            return(

              <div className="place-card-container">
  <img alt="image" src={p.image} className="place-card-image" />
  <div className="place-card-container1">
    <span className="place-card-text" style={{paddingLeft: 20}}><span>{p.title}</span></span>
    <span className="place-card-text1">
      <span>
        {p.description} 
      </span>
    </span>
    
  </div>
</div>

    
            )
        })}
    
    </div> */}
        <h3>Places to visit in Delhi</h3>
        <hr />

        <div className='main-card SpSessionCard animate__animated animate__bounceInLeft' id='sessCon'>
          {delhiPlaces.map((p, ind) => {
            return (

              <div className="place-card-container">
                <img alt="image" src={p.image} className="place-card-image" />
                <div className="place-card-container1">
                  <span className="place-card-text" style={{ paddingLeft: 20 }}><span>{p.title}</span></span>
                  <span className="place-card-text1">
                    <span>
                      {p.description}
                    </span>
                  </span>

                </div>
              </div>




            )
          })}

        </div>
        <h3>Hotels</h3>
        <hr />

        <div className='main-card SpSessionCard animate__animated animate__bounceInLeft' id='sessCon'>
          {delhiHotels.map((p, ind) => {
            return (

              <div className="place-card-container">
                <img alt="image" src={p.image} className="place-card-image" />
                <div className="place-card-container1">
                  <span className="place-card-text" style={{ paddingLeft: 20 }}><span>{p.title}</span></span>
                  <span className="place-card-text1">
                    <span>
                      {p.description}
                    </span>
                    <br />
                    <span>
                      Address: {p.address}
                    </span>
                    <br />
                    <span>
                      Phone: {p.contact}
                    </span>
                    <br />
                    <span>
                      Link: <a href={p.website} target='_blank' style={{color:"white"}}>{p.website}</a>
                    </span>
                  </span>

                </div>
              </div>

              //             <MDBCard className='card' alignment='center'>
              //   {/* <MDBCardHeader>Featured</MDBCardHeader> */}
              //   <MDBCardTitle className='zero-margin margin-less'>Link</MDBCardTitle>
              //   <MDBCardLink className='card-link' href={qwe.link}>{qwe.title}</MDBCardLink>
              //   <MDBCardBody>
              //     <MDBCardTitle className='zero-margin'>Organisers</MDBCardTitle>
              //     <ul className='ul-zero-margin'>
              //         {qwe.organisers.map((org)=>{
              //             return(<li>{org}</li>)
              //         })}
              //     </ul>
              //   </MDBCardBody>
              //   <MDBCardFooter className='text-muted'>
              //     <MDBCardTitle className='zero-margin'>Listing</MDBCardTitle>
              //     <MDBCardLink className='card-link' href={qwe.link}>{qwe.listing}</MDBCardLink>
              //   </MDBCardFooter>
              // </MDBCard>

            )
          })}

        </div>
      </div>

      <Footer />
    </>
  );
}