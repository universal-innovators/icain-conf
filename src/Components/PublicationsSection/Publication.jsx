import "./Publication.css";
import ImpDate from "../impDates/impDtext";
import Footer from "../Footer/footer";
// Publication and books imgages
import PhyComm from "./PuImages/phy_com.jpg";
import CompElect from "./PuImages/compElec.jpg";
import ExSystem from "./PuImages/Expert.jpg";
import IntDecision from "./PuImages/Intelligent.jpg";
import hbet from "./PuImages/hbet.jpg"
// import CompModel from "./PuImages/cmes.jpeg";
// import Journal from "./PuImages/journal.jpg";

import Indexing from "./Indexing";

function Publication() {
  return (
    <>
      <div className="Publication">
        <h2>Publications</h2>
        <hr />

        <div className="publicationMain">
          {/* left  */}
          <div className="pubProceedings">
            <h3>PUBLICATION- PROCEEDINGS</h3>
            {/* <p>
              All the accepted papers of ICAIN-2024 will be published as a{" "}
              <span className="porange">Springer AIS SERIES (Approved)</span>{" "}
              proceedings of ICAIN-2024 indexed by Web of Science, Google scholar
              and zbMATH and other reputed databases.
            </p> */}
            <p className="porange">
            All the papers and the proceedings of ICAIN-2024 will be sent to
              SCOPUS for evalution!{" "}
            </p>
            <p>
              High-quality selected extended papers of the conference will be
              invited to submit for publication in the special issues of the
              following journals :
            </p>

            {/* // PuImages  */}
            <div className="puImages">
              {/* img 1  and data*/}
              <div className="imgdata">
                <div className="puimg">
                  <img src={PhyComm} alt="Physical communication" />
                </div>
                <p>Physical Communication, Elsevier (SCIE indexed) IF 2.37</p>
              </div>

              {/* img2 and data  */}
              <div className="imgdata">
                <div className="puimg">
                  <img
                    src={CompElect}
                    alt="Computers and Electrical Engineering"
                  />
                </div>
                <p>
                  Computer & Electrical Engineering, Elsevier (SCIE indexed) IF
                  4.15
                </p>
              </div>

              {/* img 3 and data*/}
              <div className="imgdata">
                <div className="puimg">
                  <img src={ExSystem} alt="Expert System" />
                </div>
                <p>Expert Systems, Wiley (SCIE indexed) IF 2.81</p>
              </div>

              {/* img 4 and data */}
              <div className="imgdata">
                <div className="puimg">
                  <img src={IntDecision} alt="Intelligent Decision" />
                </div>
                <p>
                  Intelligent Decision Technologies (Indexed by SCOPUS & ESCI)
                </p>
              </div>

              {/* img 5 and data*/}
              <div className="imgdata">
                <div className="puimg">
                  <img src={hbet} alt="CMES" />
                </div>
                <p>
                Human Behavior and Emerging Technologies, Wiley- ESCI & Scopus
                </p>
              </div>

              {/* img 6 and data */}
              {/* <div className="imgdata">
                <div className="puimg">
                  <img src={Journal} alt="Journal" />
                </div>
                <p>Journal of Mobile Multimedia(River)(Scopus and ESCI)</p>
              </div> */}
            </div>

            {/* Indexing  */}
            <div>
              <Indexing />
            </div>
          </div>

          {/* right  */}
          <div className="puImpdate">
            <ImpDate />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Publication;
