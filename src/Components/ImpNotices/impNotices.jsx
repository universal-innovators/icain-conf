import React from "react";
import "./impNotices.css";

const arr = [
  {
    h4: "ICAIN-2024 will be organised by Guru Tegh Bahadur Institute of Technology (GTBIT) affiliated to Guru Gobind Singh Indraprastha University , Delhi, India on 24th - 25th September 2024.",
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