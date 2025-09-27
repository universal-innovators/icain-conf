import React from 'react';
import './keynote.css';

export default function Keynote({ speakers }) {
  return (
    <div className="keynoteSpeaker">
      {speakers.map((speaker, index) => (
        <div className="keynoteCard" key={index}>
          <img 
            src={speaker.image} 
            alt={speaker.name} 
            style={speaker.imageStyle || {}} 
          />
          <p>
            <strong>{speaker.name}</strong>
            <br /> {speaker.designation}
          </p>
        </div>
      ))}
    </div>
  );
}
