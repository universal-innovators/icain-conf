import React from "react";
import "./ImpDtext.css";



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
const impDtext = () => {
  return (
    <div>
      <div className="container">
        <div className="gradient-cards">
          {/* 1st card  */}
          <div className="card">
            <div className="container-card bg-green-box">
              <svg
                viewBox="-1.44 -1.44 26.88 26.88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#006938"
                height="4rem"
                width="4rem"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                    stroke=""
                    stroke-width="0.288"
                    stroke-linecap="round"
                  ></path>{" "}
                  <rect
                    x="6"
                    y="12"
                    width="3"
                    height="3"
                    rx="0.5"
                    fill=""
                  ></rect>{" "}
                  <rect
                    x="10.5"
                    y="12"
                    width="3"
                    height="3"
                    rx="0.5"
                    fill=""
                  ></rect>{" "}
                  <rect
                    x="15"
                    y="12"
                    width="3"
                    height="3"
                    rx="0.5"
                    fill=""
                  ></rect>{" "}
                </g>
              </svg>
              <p className="card-title">Important Dates :</p>

              {arr.map((a, i) => {
                return (
                  <div className="date-description" key={i}>
                    <p className="card-description-title">{a.h4}</p>
                    <p className="card-description">{a.p}</p>
                    <hr style={{'color':'white'}}/>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default impDtext;
