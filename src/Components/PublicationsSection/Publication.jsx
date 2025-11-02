import "./Publication.css";
import ImpDate from "../impDates/impDtext";
import Footer from "../Footer/footer";
// Publication and books imgages
import PhyComm from "./PuImages/phy_com.jpg";
import CompElect from "./PuImages/compElec.jpg";
import ExSystem from "./PuImages/Expert.jpg";
import IntDecision from "./PuImages/Intelligent.jpg";
import jbhi from "./PuImages/jbhi.png";
import hcisj from "./PuImages/hcisj.jfif";
import lnns from "./PuImages/lnns.jpg";
import ais from "./PuImages/ais.jpg";
import ijs from "./PuImages/ijs.jpg";
import das from "./PuImages/das.webp";
import cmi from "./PuImages/cmir.gif";
import iet from "./PuImages/iet.jpg";
import fai from "./PuImages/fai.png";



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
          <b style={{fontSize:'18px',color:"white"}}>Publication Proceedings</b>
            {/* <p>
              All the accepted papers of ICAIN-2026 will be published as a{" "}
              <span className="porange">Springer AIS SERIES (Approved)</span>{" "}
              proceedings of ICAIN-2026 indexed by Web of Science, Google scholar
              and zbMATH and other reputed databases.
            </p> */}
            <p className="porange">
            All the papers of ICAIN 2026 will be published in Springer LNNS series (SCOPUS, DBLP, EI Compendex, INSPEC, SCImago, zbMATH).<br/> All the papers of ICAIN 2026 will be published in the Springer LNNS series as proceedings of ICAIN indexed in  SCOPUS, DBLP, EI Compendex, INSPEC, SCImago, zbMATH {" "}
            </p>           
            <div className="puImages">
            <div className="imgdata">
                <div className="puimg">
                  <img src={lnns} alt="Physical communication" />
                </div>
                
              </div>
              {/* <div className="imgdata">
                <div className="puimg">
                  <img src={ais} alt="Physical communication" />
                </div>
                
              </div> */}

            </div>
            <p>
              Some of the High-quality selected extended papers of the conference will be invited to submit for publication in the special issues of the following journals : 
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
                  Computer and Electrical Engineering, Elsevier (SCIE indexed) IF
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
                  Intelligent Decision Technologies (Indexed by SCOPUS and ESCI)
                </p>
              </div>
              {/* img 4 and data */}
              <div className="imgdata">
                <div className="puimg">
                <a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6221020" target="_blank">
                  <img src={jbhi} alt="" />
                  </a>
                </div>
                <p>
                IEEE JOURNAL OF BIOMEDICAL AND HEALTH INFORMATICS( SCI, IF-6. 7)
                </p>
              </div>
              {/* img 4 and data */}
              <div className="imgdata">
                <div className="puimg">
                <a href="http://hcisj.com/" target="_blank">
                  <img src={hcisj} alt="s" />
                  </a>
                </div>
                <p>
                Human-centric Computing and Information Sciences(SCI, IF-3. 9)
                </p>
              </div>

              {/* img 5 and data*/}
              <div className="imgdata">
                <div className="puimg">
                  <img src={ijs} alt="CMES" />
                </div>
                <p>
                International Journal of Sensors, Wireless Communications and Control, BENTHAM SCIENCE
                </p>
              </div>

              {/* img 6 and data */}
              <div className="imgdata">
                <div className="puimg">
                  <img src={iet} alt="Journal" />
                </div>
                <p>IET Signal Processing Journal, Wiley SCI </p>
              </div>

              <div className="imgdata">
                <div className="puimg">
                  <img src={cmi} alt="Journal" />
                </div>
                <p>Current Medical imaging, BENTHAM SCIENCE, IF: 1.1</p>
              </div>

              <div className="imgdata">
                <div className="puimg">
                  <img src={das} alt="Journal" />
                </div>
                <p>Discover Applied Sciences Journal, IF:2.8</p>
              </div>
              <div className="imgdata">
                <div className="puimg">
                  <img src={fai} alt="Journal" />
                </div>
                <p>Frontiers in Artificial Intelligence Journal, SCI-IF 3.0</p>
              </div>
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
