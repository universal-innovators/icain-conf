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
            The International Conference on Artificial Intelligence and Networking (ICAIN) is organised with the objective of bringing together innovative scientists, professors, research scholars, students, and industry experts in the fields of Computing and Communication on a common platform.<br/>
            The primary goal of the conference is to foster the exchange of innovative scientific information between researchers, developers, engineers, students, and practitioners. Another aim is to facilitate the transformation of fundamental research into institutional and industrial applications and to convert applied research into real-time solutions.<br/>
            Overall, the conference will provide researchers and attendees with opportunities for national and international collaboration and networking among universities and institutions, both in India and abroad, to further research initiatives.
              {/* All the
              accepted papers (after double blinded peer review) will be
              published as proceedings of ICAIN-2025 in{" "}
              <span className="corange">Springer AIS SERIES (Approved)</span>{" "}
              and other reputed databases. */}
            </p>

            <b className="">
            All the papers and the proceedings of ICAIN-2025 will be published in Springer LNNS series (Approved - Indexed in DBLP, EI Compendex, INSPEC, SCImago SCOPUS, WTI AG, zbMATH)
            </b>
            <marquee><b className="reAuthors" style={{color:"#006938"}}>Note: 40% Discount / Custom Fees Registration (Amount based on category of participation or the information conveyed) for online mode registrations</b></marquee>
            <h4>
              All papers must be submitted online via this link:
            </h4>
            
            <p className="submissionLinkhead">
              <a
                href="https://cmt3.research.microsoft.com/ICAIN2025"
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
