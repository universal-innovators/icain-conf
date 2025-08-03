import React from "react";
import "../AbtConference/abtConference.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Keynote from "./Keynote";


// import Pdf4 from "../Downloads/pdfs/ICICC_Brochure.pdf";
// import Pdf5 from "../Downloads/pdfs/sponsorship_Proposal.pdf";
AOS.init();

function InvitedSpeakers() {
  return (
    <div className="conference">
      <div className="ccontainer">
        <div className="heading">
          <h1 style={{ "color": "white" }}>Invited Speakers</h1>
        </div>
        <hr />

        <div >
          {/* Left about  */}
          <div className="Labout">
            <p>
            We are pleased to invite you to join as an Invited Session Speaker at the International Conference on Artificial Intelligence and Networking (ICAIN-2025), to be held on 6th–7th October 2025 at BITS Pilani, Dubai Campus, in association with IIIT Allahabad. The conference brings together leading researchers, practitioners, and industry innovators in the fields of AI, ML, and intelligent networking systems.<br/><br/>

Your expertise in the industry would provide valuable insights to our global audience of academics and professionals. 
<br/><br/>

We look forward to your inspiring contribution.
            </p>           
            <Keynote/>

          </div>

         
        </div>
      </div>
    </div>
  );
}

export default InvitedSpeakers;
