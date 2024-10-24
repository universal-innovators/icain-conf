import React from "react";

const arr = [
  {
    h4: "ICAIN-2025 will be organised on 26th - 27th September 2025.",
  },
];
const ImpNtext = () => {
  return (
    <>
      <div className="container">
        <div className="gradient-cards">
          {/* 1st card  */}
          <div className="card ">
            <div className="container-card bg-white-box ">
              <svg
                viewBox="-92.16 -92.16 1208.32 1208.32"
                class="icon"
                version="1.1"
                stroke-width="25.056"
                stroke="#2FCB89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
                  <path
                    d="M183 146.2h585.15v402.28h73.14V73.06H109.86v877.71h402.16v-73.14H183z"
                    fill=""
                  ></path>
                  <path
                    d="M256.14 219.34H695v73.14H256.14zM256.14 365.63h365.71v73.14H256.14zM256.14 511.91h219.43v73.14H256.14zM731.57 585.06c-100.99 0-182.86 81.87-182.86 182.86s81.87 182.86 182.86 182.86 182.86-81.87 182.86-182.86-81.87-182.86-182.86-182.86z m0 292.57c-60.5 0-109.71-49.22-109.71-109.71 0-60.5 49.22-109.71 109.71-109.71 60.5 0 109.71 49.22 109.71 109.71 0 60.49-49.21 109.71-109.71 109.71z"
                    fill=""
                  ></path>
                  <path d="M658.16 740.48h146.29v54.86H658.16z" fill=""></path>
                </g>
              </svg>
              <p className="card-title ">Important Notices :</p>
              {arr.map((a, i) => {
                return (
                  <div className="date-description" key={i}>
                    <h4 className="card-description-title">{a.h4}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImpNtext;
