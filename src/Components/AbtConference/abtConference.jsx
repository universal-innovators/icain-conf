import React from "react";
import "./abtConference.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Pdf1 from "../Downloads/pdfs/Manuscript.pdf";
import Pdf2 from "../Downloads/pdfs/Checklist.pdf";
import Pdf3 from "../Downloads/pdfs/SESSION PROPOSAL.docx";
import '../RegistrationSection/registration.css'

// import Pdf4 from "../Downloads/pdfs/ICICC_Brochure.pdf";
// import Pdf5 from "../Downloads/pdfs/sponsorship_Proposal.pdf";
AOS.init();

function AboutConference() {
  return (
    <div className="conference">
      <div className="ccontainer">
        <div className="heading">
          <h1 style={{ "color": "white" }}>About Conference</h1>
        </div>
        <hr />

        <div className="about">
          {/* Left about  */}
          <div className="Labout">
            <p>
            The International Conference on Artificial Intelligence and Networking (ICAIN) is organized by the Department of Computer Science at BITS Pilani, Dubai, which is committed to producing world-class computer engineers and advancing cutting-edge research. The conference aims to bring together innovative scientists, professors, research scholars, students, and industry experts in the fields of Computing and Communication on a common platform. Its primary goal is to foster the exchange of innovative scientific information among researchers, developers, engineers, students, and practitioners. Another key objective is to facilitate the transformation of fundamental research into institutional and industrial applications, as well as to convert applied research into real-time solutions.<br/>
            Overall, ICAIN provides a dynamic opportunity for national and international collaboration and networking among universities and institutions, both in India and abroad, to advance ongoing and future research initiatives.
              {/* All the
              accepted papers (after double blinded peer review) will be
              published as proceedings of ICAIN-2026 in{" "}
              <span className="corange">Springer AIS SERIES (Approved)</span>{" "}
              and other reputed databases. */}
            </p>

            <b className="">
            All the papers and the proceedings of ICAIN-2026 will be published in Springer LNNS series (Approved - Indexed in DBLP, EI Compendex, INSPEC, SCImago SCOPUS, WTI AG, zbMATH)
            </b>
            <marquee><b className="reAuthors" style={{color:"#211D70"}}>Note: 40% Discount / Custom Fees Registration (Amount based on category of participation or the information conveyed) for online mode registrations</b></marquee>
            <h4>
              All papers must be submitted online 
              via this link:
            </h4>
            
            <p className="submissionLinkhead">
              <a
                href="https://cmt3.research.microsoft.com/ICAIN2026"
                target="_blank"
                className="aboutLink"
              >
                Paper Submission Link
              </a>
            </p>


          </div>

          {/* Right about  */}
          <div className="Rabout">
            <h1 style={{ "color": "white" }}>Downloads</h1>

            <div class="Docard">
              {/* <div class="tools">
                <div class="circle">
                  <span class="red dobox"></span>
                </div>
                <div class="circle">
                  <span class="yellow dobox"></span>
                </div>
                <div class="circle">
                  <span class="green dobox"></span>
                </div>
              </div> */}
              <div class="card__content dwnldSection">
                <p>
                  {" "}
                  <a href={Pdf1} target="_blank">
                    Manuscript Guidelines
                  </a>
                </p>
                <p>
                  {" "}
                  <a href={Pdf2} target="_blank">
                    Checklist
                  </a>
                </p>
                <p>
                  <a href={Pdf3} target="_blank">
                    Special Session Proposal Template
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutConference;
