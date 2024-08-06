import React from "react";
import "./impDates.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const arr = [
  {
    h4: "Deadline for manuscript submission: ",
    p: "August 15th, 2024",
  },
  {
    h4: "Notification of first review:",
    p: "August 25th, 2024",
  },
  {
    h4: "Submission of revised manuscript:",
    p: "August 30th, 2024",
  },
  {
    h4: "Notification of final acceptance:",
    p: "September 05th, 2024",
  },
  {
    h4: "Final manuscript due",
    p: "September 05th, 2024",
  },
  {
    h4: "Conference Date",
    p: "24th - 25th September 2024",
  },
  // {
  //   h4: "Registration Deadline",
  //   p: "September 30th, 2024",
  // },
  // {
  //   h4: "Final Paper Due",
  //   p: "September 30th, 2024",
  // },
];

function ImpDate() {
  return (
    <div className="imp_Date ">
      {/* important Date  */}
      <div className="impDate ">
        <h1>Important Dates</h1>
        <div className="dates">
          {arr.map((a, i) => {
            return (
              <div className="date" key={i}>
                <h5>{a.h4}</h5>
                <p>{a.p}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ImpDate;
