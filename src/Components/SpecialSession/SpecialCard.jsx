import React from 'react';

import './SpecialCard.css'
import data from './SpecialData.jsx';
import Footer from '../Footer/footer';
import 'animate.css';
export default function SpecialCard() {
  return (


    <>
     <div className="spSessionHeading">
      <h2>Special Sessions</h2>
      <hr />
     </div>
    <div className='main-card SpSessionCard animate__animated animate__bounceInLeft' id='sessCon'>
        {data.map((qwe,ind)=>{
            return(

              <div className='card' alignment='center'>
              {/* <MDBCardHeader>Featured</MDBCardHeader> */}
              <b className='zero-margin margin-less'>{`Session - ${ind+1}`}:</b>
              <a className='card-link' href={qwe.link} target='_blank'>{qwe.title}</a>
              <div>
                <div className='zero-margin'>Organisers</div>
                <ul className='ul-zero-margin'>
                    {qwe.organisers.map((org)=>{
                        return(<li>{org}</li>)
                    })}
                </ul>
              </div>
              <div className='text-muted'>
                <div className='zero-margin'>Listing</div>
                <a className='card-link' href={qwe.link} target='_blank'>{qwe.listing}</a>
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

    <Footer/>
    </>
  );
}