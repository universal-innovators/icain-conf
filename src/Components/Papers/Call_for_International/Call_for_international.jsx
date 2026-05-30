import "./Call_for_international.css";
import wsp from "../../Downloads/pdfs/WORKHOP PROPOSAL.docx"
import Footer from "../../Footer/footer";
const Call_for_international = () => {
  return (
    <>
      <div className="intern_container">
        <h5>Invitation to Conduct an International Workshop at ICAIN 2026</h5>
        <div className="intern_inner">
          <h3>Dear Researcher/Colleagues,</h3>

          <p>
            Greeting from ICAIN-2026! <br/>The ICAIN Conference team is pleased to invite you to organise an <b>International Workshop at the International Conference on Artificial Intelligence and Networking (ICAIN-2026)</b>,which will be held on
            <b> 26th - 28th November 2026. </b>
          
          </p>

          <p>
          We are committed to bringing together some of the most knowledgeable academicians from around the world, alongside business leaders, to discuss critical research topics. The two-day conference will feature workshops, technical sessions, and keynote presentations on cutting-edge technologies in our industry.
          </p>

          <p>
          By participating in this conference as a workshop organiser and leading your own session, you will significantly contribute to the conference's success. We recognise your networking skills and your ability to identify high-quality research papers, and we would be honoured to have you join us.
          </p>
        </div>

        
        <div className="callSpecialHighlight">
            <h2>Highlights of the International Workshops and Benefits:</h2>
            
            <ol>
              <li><b>Publication in Conference Proceedings: </b>
                
                All accepted papers will be published in the proceedings of ICAIN-2026, and these proceedings will be submitted to SCOPUS for evaluation.
              </li>
              <li>
                <b>Workshop Organiser Incentive: </b>
                As a workshop organiser, you will receive 20% of the total fees collected for your workshop.
              </li>
              <li><b>Minimum Registration Requirement: </b>A minimum of 8 registrations is required for the proposed workshop.</li>
              <li>
                <b>Extended Paper Publication:</b>
                Extended papers will be considered for publication in SCI/SCOPUS/ESCI/DBLP/ACM Digital Library journals. For more details, please visit <a style={{textDecoration:'none',color:'white'}} href="https://www.icain-conf.com/publications">Publications</a>.
              </li>
              <li>
                <b>Publisher Collaboration: </b>
                Renowned publishing houses such as Elsevier, Inderscience, IEEE, Bentham Science, IGI Global, and others are involved in the conference.
              </li>
              <li> <b>Session Chair Opportunity: </b>You will have the opportunity to chair your own session at the conference.</li>
              <li>
                <b>Special Discount for Your Paper: </b>
                You will receive a special discount for your personal paper if the required number of papers is registered for your workshop.
              </li>
              <li>
                <b>Additional Support for Extended Papers: </b>
                Extended papers from your workshop will receive extra
weightage and support for
publication in SCI/SCOPUS journals.
              </li>
              <li>
              <b>Keynote Speakers: </b>
              International and national keynote speakers will present lectures on the latest innovative technologies.
              </li>
              <li>
              <b>Accessible Conference Venue: </b>
              The conference venue is well-connected and easily accessible.
              </li>
            </ol>
          </div>

        <div className="intern_interested">
          <p>
            If you are interested to conduct an International Workshop, please
            email us the workshop proposal at
            <a href="mailto:icain.conf@gmail.com" className="greet">
              {" "}
              icain.conf@gmail.com{" "}
            </a>
            with subject line as <b>“Proposal for ICAIN-2026 International Workshop”</b>
          </p>

          <div>
            <p>Looking to see you in ICAIN-2026.</p>

            <p> Sincerely,</p>

            <p> Organizer and Convener</p>

            <p className="greet">ICAIN-2026</p>
          </div>
        </div>

        <br />
        <p className="submissionLinkhead">
          <a href={wsp}>Workshop Proposal Template</a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Call_for_international;
