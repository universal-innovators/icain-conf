import React, { useEffect, useState } from "react";
import "../AbtConference/abtConference.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Keynote from "./Keynote";
import Footer from "../Footer/footer";

const API_URL = "https://ui-admin.vercel.app/api/v1/speakers";

function IndAcademicSpeakers() {
  const [speakersByYear, setSpeakersByYear] = useState({
    2025: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init();

    const fetchSpeakers = async () => {
      try {
        setLoading(true);
        setError("");

        const params = new URLSearchParams({
          conference_id: "c2",
          year: "2025",
          type: "academics",
          speaker_type: "invited",
        });

        const response = await fetch(`${API_URL}?${params}`);

        if (!response.ok) {
          throw new Error("Failed to fetch academic speakers");
        }

        const data = await response.json();

        const speakers = (data.items || []).map((speaker) => ({
          ...speaker,
          image: speaker.image_url || speaker.image || "",
        }));

        setSpeakersByYear({
          2025: speakers,
        });
      } catch (err) {
        console.error("Error fetching academic speakers:", err);
        setError("Unable to load academic speakers. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, []);

  return (
    <>
      <div className="conference">
        <div className="ccontainer">
          <div className="heading">
            <h1 style={{ color: "white" }}>
              Invited Speakers from Academics
            </h1>
          </div>

          <hr />

          <div>
            <div className="Labout">
              <p>
                We are pleased to invite you to join as an Invited Speaker at
                the International Conference on Artificial Intelligence and
                Networking (ICAIN-2025), to be held on 6th–7th October 2025 at
                BITS Pilani, Dubai Campus, in association with IIIT Allahabad.
                The conference brings together leading researchers,
                practitioners, and industry innovators in the fields of AI, ML,
                and intelligent networking systems.
                <br />
                <br />
                Your expertise in the industry would provide valuable insights
                to our global audience of academics and professionals.
                <br />
                <br />
                We look forward to your inspiring contribution.
              </p>

              {loading ? (
                <p>Loading academic speakers...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                <Keynote speakersByYear={speakersByYear} />
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default IndAcademicSpeakers;