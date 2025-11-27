import React, { useState } from "react";
import "./keynote.css";

export default function Keynote({ speakersByYear }) {
  const years = Object.keys(speakersByYear);
  const [selectedYear, setSelectedYear] = useState(years[0]);

  return (
    <div className="keynoteWrapper">

      {/* Year Tabs */}
      <div className="yearTabs">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`yearTabBtn ${
              selectedYear === year ? "active" : ""
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Speaker Cards */}
      <div className="keynoteSpeaker">
        {speakersByYear[selectedYear].map((speaker, index) => (
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
    </div>
  );
}
