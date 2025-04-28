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
        },
        {
            name: "Dr. Kathrin Kind",
            title: "Member of the Board of Advisors, Swiss School of Business and Management; Chief Data Scientist / AI Director Global Growth Markets (EMEA/APAC), Cognizant",
            image: "kat.jpg"
        },
        
    ]
};

export default function PrevKeynote() {
    const years = Object.keys(speakersData);
    const [activeYear, setActiveYear] = useState('2024');

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
