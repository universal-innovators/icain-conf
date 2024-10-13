import React from "react";
import "./flagship.css";

function FlagShip() {
  return (
    <div className="flagship">
      <div className="fcontainer">
        <div className="heading">
          <h2>
            <a
              href="https://scholar.google.com/citations?hl=en&user=fFvhHUAAAAAJ"
              target="_blank"
            >
              A FLAGSHIP CONFERENCE : ICAIN 2025{" "}
            </a>
          </h2>
        </div>

        {/* <div className="submitPaper">
            <button><a href="#">Submit Paper</a></button>
          </div>  */}

        {/* cards start */}

        <div className="flcards">
          {/* card1  */}
          <div className="card1 flcard  ">
            <h1>2494</h1>
            <p>Citations</p>
          </div>

          {/* card2 */}
          <div className="card2 flcard">
            <h1>20</h1>
            <p>H - Index</p>
          </div>

          {/* card3  */}
          <div className="card3 flcard">
            <h1>20</h1>
            <p>H5 - Index</p>
          </div>

          {/* card4 */}
          <div className="card4 flcard">
            <h1>1553</h1>
            <p>No.of Published Papers in Proceedings</p>
          </div>

          {/* card 5 */}
          <div className="card5 flcard">
            <h1>64</h1>
            <p>No.of Keynotes 13</p>
          </div>

          {/* card 6  */}
          <div className="card6 flcard">
            <h1>13</h1>
            <p>No.of Workshops</p>
          </div>

          {/* card 7  */}
          <div className="card7 flcard">
            <h1>23%</h1>
            <p>Acceptance Rate</p>
          </div>

          {/* card 8  */}
          <div className="card8 flcard">
            <h1>49</h1>
            <p>No.of Participating Countries</p>
          </div>

          {/* card9  */}
          <div className="card9 flcard">
            <h1>15</h1>
            <p>No.of Volumes Published</p>
          </div>

          {/* card10  */}
          <div className="card10 flcard">
            <h1>103</h1>
            <p>No.of Published Papers in Extended Journals(Scopus)</p>
          </div>
          {/* card11  */}
          <div className="card11 flcard">
            <h1>59</h1>
            <p>No. of Published Papers in Extended Journals(SCIE)</p>
          </div>

          {/* card 12 */}
          <div className="card12 flcard">
            <h1>3990</h1>
            <p>Total No. of Participation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlagShip;
