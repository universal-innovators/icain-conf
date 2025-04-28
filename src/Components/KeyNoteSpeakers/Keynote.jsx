import React from 'react'
import './keynote.css'
export default function Keynote() {
    return (
        <>
            <h1 className='keynoteHeading'>Keynote Speakers - 2025</h1>
            <div className="keynoteSpeaker">
                
                <div className="keynoteCard">
                    <img src="obaid.jpg" alt="" srcset="" />
                    <p> <strong>Dr. Ahmed J. Obaid </strong>
                        <br />Associate Professor of Computer Science at the University of Kufa, Iraq, specializing in web mining, AI-driven healthcare applications, and computational intelligence</p>
                </div>
                <div className="keynoteCard">
                    <img src="korhan.jpg" alt="" srcset="" />
                    <p> <strong>Dr. Korhan Cengiz</strong>
                        <br />Associate Research Professor, Department of Electrical Engineering, Prince Mohammad Bin Fahd University, KSA</p>
                </div>
            </div>
        </>
    )
}
