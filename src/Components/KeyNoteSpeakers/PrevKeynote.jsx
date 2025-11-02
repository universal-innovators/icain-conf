import React, { useState } from 'react';
import './keynote.css';

const speakersData = {
    2024: [
        {
            name: "Mr. Aninda Bose",
            title: "Executive Editor Interdisciplinary Applied Sciences, Computational Intelligence, Energy, Springer Nature London",
            image: "aninda.jpeg"
        },
        {
            name: "Dr. Biswajit Brahma",
            title: "Data Expert, McKesson Corporation, USA. Over 40 Publications in SCI/Scopus journals. 10+ patents and copyrights",
            image: "biswajit.jpg"
        },
        {
            name: "Prof. Bijaya Ketan Panigrahi",
            title: "Professor, Electrical Engineering Department, IIT Delhi",
            image: "BijayaKetan.jpeg"
        }
        
        
    ],
    2025: [
  {
    name: "Dr. Ahmed J. Obaid",
    title:
      "Associate Professor of Computer Science at the University of Kufa, Iraq, specializing in web mining, AI-driven healthcare applications, and computational intelligence",
    image: "obaid.jpg",
  },
  {
    name: "Dr. Korhan Cengiz",
    title:
      "Associate Research Professor, Department of Electrical Engineering, Prince Mohammad Bin Fahd University, KSA",
    image: "korhan.jpg",
  },
  {
    name: "Associate Professor Marta Harničárová, PhD",
    title:
      "Institute of Technology and Business in České Budějovice, Faculty of Technology, Czech Republic",
    image: "marta.gif",
  },
  {
    name: "Professor Jan Valíček, Ph.D",
    title:
      "Institute of Technology and Business in České Budějovice, Faculty of Technology, Czech Republic",
    image: "jan.gif",
  },
  {
    name: "Dr. Samiya Khan",
    title:
      "Lecturer in Computer Science at University of Southampton Delhi | Expert in Interdisciplinary Data Science with a focus on inclusive computing and social impact technologies",
    image: "samiya.jpg",
  },
  {
    name: "Dr. Kathrin Kind",
    title:
      "Member of the Board of Advisors, Swiss School of Business and Management; Chief Data Scientist / AI A. Director Global Growth Markets (EMEA/APAC) Cognizant",
    image: "kat.jpg",
  }],
    
};

export default function PrevKeynote() {
    const years = Object.keys(speakersData);
    const [activeYear, setActiveYear] = useState('2025');

    const speakers = speakersData[activeYear] || [];

    return (
        <div className="keynoteContainer">
            <h1 className="keynoteHeading">Previous Keynote Speakers</h1>

            {/* Tabs */}
            <div className="tabs">
                {years.map((year) => (
                    <button
                        key={year}
                        className={`tabButton ${year === activeYear ? 'active' : ''}`}
                        onClick={() => setActiveYear(year)}
                    >
                        {year}
                    </button>
                ))}
            </div>

            {/* Speakers */}
            <div className="keynoteSpeaker">
                {speakers.map((speaker, index) => (
                    <div className="keynoteCard" key={index}>
                        <img src={speaker.image} alt={speaker.name} />
                        <p>
                            <strong>{speaker.name}</strong><br />
                            {speaker.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
