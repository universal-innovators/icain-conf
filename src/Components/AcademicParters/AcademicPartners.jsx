import React from 'react'
import './AcademicPartners.css'
import uos from "../Header/Himages/logo.PNG";
import vste from "../Header/Himages/vste.jpg";
import port from "../Header/Himages/portagal.jpg";
import du from "../Header/Himages/du.png";
import ksmv from "../Header/Himages/ksmv.png";
import gtbit from "../Header/Himages/gtbit.jpg";





export default function AcademicPartners() {
    const academicPartners=[uos,vste,port,du,ksmv]
    return (
        <>
            <h1 className='keynoteHeading'>Our Academic Partners</h1>
            <div className="academicPartner">
            {academicPartners.map((path)=>{
                return <div className="">
                    <img src={path} className='logoImg'/>                    
                </div>
            })}
            </div>
            {/* <div className="keynoteSpeaker">
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
            </div> */}
        </>
    )
}
