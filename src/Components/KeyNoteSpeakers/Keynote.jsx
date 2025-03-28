import React from 'react'
import './keynote.css'
export default function Keynote() {
    return (
        <>
            <h1 className='keynoteHeading'>Previous Keynote Speakers</h1>
            <div className="keynoteSpeaker">
                <div className="keynoteCard">
                    <img src="aninda.jpeg" alt="" srcset="" />
                    <p> <strong>Mr. Aninda Bose</strong>
                        <br /> Executive Editor Interdisciplinary Applied Sciences, Computational Intelligence, Energy             Springer Nature London</p>
                </div>
                <div className="keynoteCard">
                    <img src="biswajit.jpg" alt="" srcset="" />
                    <p> <strong>Dr. Biswajit Brahma </strong>
                        <br />Data Expert, McKesson Corporation, USA.
                        Over 40 Publications in SCI/Scopus journals.
                        10+ patents and copyrights </p>
                </div>
                <div className="keynoteCard">
                    <img src="BijayaKetan.jpeg" alt="" srcset="" />
                    <p> <strong>Prof. Bijaya Ketan Panigrahi </strong>
                        <br />Professor, Electrical Engineering Department, IIT Delhi</p>
                </div>
                <div className="keynoteCard">
                    <img src="kat.jpg" alt="" srcset="" />
                    <p> <strong>Dr. Kathrin Kind </strong>
                        <br />Member of the Board of Advisors. Swiss School of Business and Management ; Chief Data Scientist / AI A. Director Global Growth Markets (EMEA/APAC). Cognizant</p>
                </div>
            </div>
        </>
    )
}
