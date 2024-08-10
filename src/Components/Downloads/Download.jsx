// import ImpDate from "../impDates/impDates";
import Footer from "../Footer/footer";
import "./Downloads.css";
import { FaDownload } from "react-icons/fa";
import Pdf1 from "./pdfs/Manuscript.pdf";
import Pdf2 from "./pdfs/Checklist.pdf";
import Pdf3 from "./pdfs/SESSION PROPOSAL.docx";
import Pdf4 from "./pdfs/WORKHOP PROPOSAL.docx";
import Zip from "./Word+Template.zip";
// import Pdf6 from "./pdfs/Elsevier SSRN_Word Template.pdf";
import ImpNotices from "../ImpNotices/ImpNtext";
// import ImpNotices from "./../ImpNotices/impNotices";

function Downloads() {
  return (
    <>
      <div className="downloadMain">
        <div className="download">
          <div className="doHeading">
            <h1>Downloads</h1>
          </div>

          <div className="pdfImp">
            {/* pdfs  */}
            <div className="doContainer doPdf">
              {/* 1st one  */}
              <div className="pdf pdf1">
                <a href={Pdf1} target="blank">
                  <h1>Manuscript Guidelines</h1>
                </a>
                <a href={Pdf1} target="blank">
                  <FaDownload />
                </a>
              </div>

              {/* 2nd one  */}
              <div className="pdf pdf1">
                <a href={Pdf2} target="blank">
                  <h1>Checklist</h1>
                </a>
                <a href={Pdf2} target="blank">
                  <FaDownload />
                </a>
              </div>

              {/* 3rd one  */}
              <div className="pdf pdf1">
                <a href={Pdf3} target="blank">
                  <h1>Special Session Proposal</h1>
                </a>
                <a href={Pdf3} target="blank">
                  <FaDownload />
                </a>
              </div>

              {/* 4th  */}
              <div className="pdf pdf1">
                <a href={Pdf4} target="_blank">
                  <h1>Workshop Proposal</h1>
                </a>
                <a href={Pdf4} target="_blank">
                  <FaDownload />
                </a>
              </div>

              {/* 5th  */}
              <div className="pdf pdf1">
                <a href={Zip} target="_blank">
                  <h1>Springer Word Template</h1>
                </a>
                <a href={Zip} target="_blank">
                  <FaDownload />
                </a>
              </div>

              {/* 6th  */}
              {/* <div className="pdf pdf1">
                <a href={Pdf6} target="_blank">
                  <h1>Elsevier SSRN Paper Template</h1>
                </a>
                <a href={Pdf6} target="_blank">
                  <FaDownload />
                </a>
              </div> */}
            </div>

            {/* impdate  */}
            {/* <div className="pdfimpDate">
            <ImpNotices/>
        </div> */}
          </div>
        </div>

        <div className="downloadNotice">
          <ImpNotices />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Downloads;
