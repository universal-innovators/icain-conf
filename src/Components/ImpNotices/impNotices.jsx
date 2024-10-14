import React from "react";
import "./impNotices.css";

const arr = [
  {
    h4: "ICAIN-2025 will be organised by Guru Tegh Bahadur Institute of Technology (GTBIT) affiliated to Guru Gobind Singh Indraprastha University , Delhi, India on 26th - 27th September 2025."
  },
];

function ImpNotices() {
  return (
    <div className="imp_Notices">
      {/* important Date  */}
      <div className="impNotices">
        <h1>Important Notices</h1>
        <div className="notices">
          {arr.map((a, i) => {
            return (
              <div className="notice" key={i}>
                <h4>{a.h4}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ImpNotices;
