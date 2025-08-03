import React from 'react'
import './keynote.css'
export default function Keynote() {
    return (
        <>
            {/* <h1 className='keynoteHeading'>Keynote Speakers - 2025</h1> */}
            <div className="keynoteSpeaker">                
                
                <div className="keynoteCard">
                    <img src="./thila.jpg" alt="" srcset="" />
                    <p> <strong>Thilakavathi Sankaran</strong>
                        <br />Data Analytics Professional, The Guitar Center Company,  Los Angeles, United States</p>
                </div>
                <div className="keynoteCard">
                    <img src="./prateek.jpg" alt="" srcset="" />
                    <p> <strong>Prateek Sharma</strong>
                        <br />Senior Software Engineer, Nordstrom, Los Angeles, CA, US</p>
                </div>
                <div className="keynoteCard">
                    <img src="./rajesh.jpg" alt="" srcset="" />
                    <p> <strong>Rajesh Sura</strong>
                        <br /> Anna University, Chennai</p>
                </div>
            </div>
        </>
    )
}
