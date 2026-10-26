import React, { useEffect, useState } from "react";
import "./keynote.css";

const API_URL = "https://ui-admin-zj60.onrender.com/api/v1/speakers";

export default function PrevKeynote() {
  const [speakersByYear, setSpeakersByYear] = useState({
    2024: [],
    2025: [],
  });
  const [activeYear, setActiveYear] = useState("2025");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const years = ["2024", "2025"];

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        setLoading(true);
        setError("");

        const responses = await Promise.all(
          years.map(async (year) => {
            const params = new URLSearchParams({
              conference_id: "c2",
              year,
              type: "homepage",
              speaker_type: "keynote",
            });

            const response = await fetch(`${API_URL}?${params}`);

            if (!response.ok) {
              throw new Error(`Failed to fetch speakers for ${year}`);
            }

            const data = await response.json();

            return {
              year,
              speakers: (data.items || []).map((speaker) => ({
                ...speaker,
                image: speaker.image_url || speaker.image || "",
                title: speaker.designation || speaker.title || "",
              })),
            };
          })
        );

        const updatedSpeakers = {
          2024: [],
          2025: [],
        };

        responses.forEach(({ year, speakers }) => {
          updatedSpeakers[year] = speakers;
        });

        setSpeakersByYear(updatedSpeakers);
      } catch (err) {
        console.error("Error fetching previous keynote speakers:", err);
        setError("Unable to load previous keynote speakers. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, []);

  const speakers = speakersByYear[activeYear] || [];

  return (
    <div className="keynoteContainer">
      <h1 className="keynoteHeading">Previous Keynote Speakers</h1>

      <div className="tabs">
        {years.map((year) => (
          <button
            key={year}
            className={`tabButton ${
              year === activeYear ? "active" : ""
            }`}
            onClick={() => setActiveYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading keynote speakers...</p>
      ) : error ? (
        <p>{error}</p>
      ) : speakers.length === 0 ? (
        <p>No keynote speakers available for {activeYear}.</p>
      ) : (
        <div className="keynoteSpeaker">
          {speakers.map((speaker) => (
            <div
              className="keynoteCard"
              key={speaker.id || speaker.name}
            >
              <img src={speaker.image} alt={speaker.name} />
              <p>
                <strong>{speaker.name}</strong>
                <br />
                {speaker.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}