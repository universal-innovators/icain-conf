import React from "react";
import "../AbtConference/abtConference.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Keynote from "./Keynote";
import Footer from "../Footer/footer";


// import Pdf4 from "../Downloads/pdfs/ICICC_Brochure.pdf";
// import Pdf5 from "../Downloads/pdfs/sponsorship_Proposal.pdf";
AOS.init();

function IndKeynoteSpeakers() {
  const speakers2025 = [
  {
    name: "Raghava Chellu",
    designation: "Innovation Technologist | Software Engineering | Support Engineer - Specialist, Equifax Inc, Author and Speaker",
    image: "./raghava.jpg",
  }
];

  return (
    <>
    <div className="conference">
      <div className="ccontainer">
        <div className="heading">
          <h1 style={{ "color": "white" }}>Keynote Speakers From Industry</h1>
        </div>
        <hr />

        <div >
          {/* Left about  */}
          <div className="Labout">
            <p>
            We are pleased to invite you to join as a Keynote Speaker at the International Conference on Artificial Intelligence and Networking (ICAIN-2025), to be held on 6th–7th October 2025 at BITS Pilani, Dubai Campus, in association with IIIT Allahabad. The conference brings together leading researchers, practitioners, and industry innovators in the fields of AI, ML, and intelligent networking systems.<br/><br/>

Your expertise in the industry would provide valuable insights to our global audience of academics and professionals. 
<br/><br/>

We look forward to your inspiring contribution.
            </p>           
            <Keynote
                                        speakersByYear={{
                                          2025: speakers2025
                                          
                                        }}
                                      />

          </div>

         
        </div>
      </div>
    </div>
      <Footer/>
      </>
  );
}

export default IndKeynoteSpeakers;
