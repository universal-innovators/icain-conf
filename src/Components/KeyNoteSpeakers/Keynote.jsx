import React, { useEffect, useState } from "react";
import "./keynote.css";

const API_URL = "https://ui-admin-zj60.onrender.com/api/v1/speakers";

export default function Keynote() {
  const [keynoteSpeakers, setKeynoteSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        setLoading(true);
        setError("");

        const params = new URLSearchParams({
          conference_id: "c2",
          year: "2026",
          type: "homepage",
          speaker_type: "keynote",
        });

        const response = await fetch(`${API_URL}?${params}`);

        if (!response.ok) {
          throw new Error("Failed to fetch keynote speakers");
        }

        const data = await response.json();
        setKeynoteSpeakers(data.items || []);
      } catch (err) {
        console.error("Error fetching keynote speakers:", err);
        setError("Unable to load keynote speakers. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, []);

  return (
    <>
      <h1 className="keynoteHeading">Keynote Speakers - 2026</h1>

      {loading ? (
        <p>Loading keynote speakers...</p>
      ) : error ? (
        <p>{error}</p>
      ) : keynoteSpeakers.length === 0 ? (
        <p>No keynote speakers available for 2026.</p>
      ) : (
        <div className="keynoteSpeaker">
          {keynoteSpeakers.map((speaker) => (
            <div className="keynoteCard" key={speaker.id || speaker.name}>
              <img
                src={speaker.image_url || speaker.image}
                alt={speaker.name}
              />
              <p>
                <strong>{speaker.name}</strong>
                <br />
                {speaker.designation}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}