import React from "react";
import "./impDates.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const arr = [
  {
    h4: "Deadline for manuscript submission: ",
    p: "March 30th, 2025",
  },
  {
    h4: "Notification of first review:",
    p: "April 10th 2025",
  },
  {
    h4: "Submission of revised manuscript:",
    p: "April 20th , 2025",
  },
  {
    h4: "Notification of final acceptance:",
    p: "April 30th, 2025",
  },
  {
    h4: "Final manuscript due",
    p: "May 15th, 2025",
  },
  {
    h4: "Conference Date",
    p: "10th - 11th October 2025",
  },
  // {
  //   h4: "Registration Deadline",
  //   p: "September 30th, 2025",
  // },
  // {
  //   h4: "Final Paper Due",
  //   p: "September 30th, 2025",
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
