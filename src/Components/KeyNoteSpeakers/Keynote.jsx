import React from 'react'
import './keynote.css'

const keynoteSpeakers = [
    {
        name: "Dr. Ummer Iqbal ",
        designation: "Scientist-D , National Institute of Electronics and Information Technology Srinagar",
        image: "ummer.jpg",
    }
    
]

export default function Keynote() {
    return (
        <>
            <h1 className='keynoteHeading'>Keynote Speakers - 2026</h1>
            <div className="keynoteSpeaker">
                {keynoteSpeakers.map((speaker) => (
                    <div className="keynoteCard" key={speaker.name}>
                        <img src={speaker.image} alt={speaker.name} />
                        <p>
                            <strong>{speaker.name}</strong>
                            <br />{speaker.designation}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}
