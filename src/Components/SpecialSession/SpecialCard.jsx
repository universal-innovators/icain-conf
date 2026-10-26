import React, { useEffect, useState } from 'react';

import './SpecialCard.css';
import Footer from '../Footer/footer';
import 'animate.css';

export default function SpecialCard() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await fetch(
          'https://ui-admin-zj60.onrender.com/api/v1/sessions?conference_id=c2'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch special sessions.');
        }

        const data = await response.json();
        setSessions(data.items || []);
      } catch (err) {
        setError(err.message || 'Something went wrong while loading sessions.');
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, []);

  return (
    <>
      <div className="spSessionHeading">
        <h2>Special Sessions</h2>
        <hr />
      </div>

      <div
        className="main-card SpSessionCard animate__animated animate__bounceInLeft"
        id="sessCon"
      >
        {loading && <p>Loading special sessions...</p>}

        {!loading && error && <p>{error}</p>}

        {!loading && !error && sessions.length === 0 && (
          <p>No special sessions available.</p>
        )}

        {!loading &&
          !error &&
          sessions.map((session, ind) => (
            <div
              className="card"
              alignment="center"
              key={`${session.conference_id}-${session.session_id}`}
            >
              <b className="zero-margin margin-less">
                Session - {ind + 1}:
              </b>

              <a
                className="card-link"
                href={session.pdf_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {session.title}
              </a>

              <div>
                <div className="zero-margin">Organisers</div>

                <ul className="ul-zero-margin">
                  {(session.organisers || []).map((org, index) => (
                    <li key={`${session.session_id}-organiser-${index}`}>
                      {[org.name, org.designation]
                        .filter(Boolean)
                        .join(', ')}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-muted">
                <div className="zero-margin">Listing</div>

                <a
                  className="card-link"
                  href={session.pdf_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {session.session_id}
                </a>
              </div>
            </div>
          ))}
      </div>

      <Footer />
    </>
  );
}