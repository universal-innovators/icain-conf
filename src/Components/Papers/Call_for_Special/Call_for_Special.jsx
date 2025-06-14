import "./Call_for_Special.css";
import Footer from "../../Footer/footer";
import pdf1 from "../../Downloads/pdfs/SESSION PROPOSAL.docx";
const Call_for_Special = () => {
  return (
    <>
      <div className="callSpecialMain">
        <div className="Special_container">
          <h2> Invitation to Conduct a Special Session at ICAIN 2025</h2>

          <span className="greet">Dear Sir/ Madam</span>

          <p className="CfSletter">
            Greeting from ICAIN-2025!<br/>
            The ICAIN-2025 Conference team is pleased to invite you to organise a special session at the inaugural <b>International Conference on Artificial Intelligence and Networking (ICAIN-2025)</b>which will be held on
            <b> 6th - 7th October 2025. </b> We are committed to bringing together some of the most knowledgeable researchers and industry leaders from around the world to explore key topics in the field of research. This two-day conference will feature workshops, technical sessions, and keynote presentations on cutting-edge technologies relevant to our industry. The conference website:{" "}
            <a href="www.icain-conf.com" style={{textDecoration:'none',color:"var(--color-green)"}}>
              icain-conf.com
            </a>
            .<br/>ICAIN-2025 is organised with the goal of bringing together innovative scientists, professors, research scholars, students, and industrial experts in the fields of Computing and Communication. The primary aim of the conference is to promote the exchange of innovative scientific information among researchers, developers, engineers, students, and practitioners. Furthermore, we aim to bridge the gap between fundamental research and industrial application.<br/>
            We would be honoured if you could enhance the value of this conference by participating as a session chair and organising your own session within your research domain. Your reputation in networking and your ability to identify quality research papers are well known, and we believe your involvement will significantly enrich the conference.
          </p>

          {/* Highlights of the conference  */}
          <div className="callSpecialHighlight">
            <h2>Highlights of the conference and Special Session Benefits:</h2>
            
            <ol>
              <li><b>Publication in Conference Proceedings: </b>
                
                All accepted papers will be published in the proceedings of ICAIN-2025, and these proceedings will be submitted to SCOPUS for evaluation.
              </li>
              <li>
                <b>Session Chair Incentive: </b>
                You will receive 15% of the total fees collected for your session.
              </li>
              <li><b>Paper Length Requirement: </b>The minimum length for papers is 10 pages.</li>
              <li>
                <b>Extended Paper Publication: </b>
                Extended papers will be considered for publication in prestigious SCI/SCOPUS/ESCI/DBLP/ACM Digital Library journals. We have already secured approval from several high-quality journals, and more details will be announced soon.
              </li>
              <li>
                <b>Publisher Collaboration: </b>
                Renowned publishing houses such as Elsevier, Inderscience, IEEE, Bentham Science, IGI Global, and others are involved in this conference.
              </li>
              <li> <b>Session Chair Opportunity: </b>You will have the opportunity to chair your own session at the conference.</li>
              <li>
                <b>Discount for Your Paper: </b>
                Special discounts will be provided for your personal paper if the minimum number of papers required for your session is registered.
              </li>
              <li>
                <b>Additional Weightage for Extended Papers: </b>
                Extra support will be given to extended papers from your session for consideration in SCI/SCOPUS journals.
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

          <p className="CfSletter">
          If you are interested in conducting a special session, 
            If you are interested to conduct a special session, please submit your special session proposal to {" "}
            <a href="mailto:icain.conf@gmail.com" className="greet">
              icain.conf@gmail.com
            </a>{" "}
            by 30th July 2025, using the template provided below.
            <br/>

            ICAIN-2025 aims to bring together innovative research in the fields of Computing and Communication on a common platform. The conference seeks to promote research and development activities and foster scientific information exchange between researchers, developers, engineers, students, and practitioners worldwide.
            <br/>
            All accepted papers (after a double-blind peer review process) will be published in the <b>Springer LNNS series</b> (Approved). Furthermore, extended versions of accepted papers will be published in special issues of SCI/SCOPUS/WoS/DBLP/ACM/EI indexed journals.
            <br/>
            <br/>

            We look forward to your participation in ICAIN-2025.
            <p>Sincerely</p>
            <p> Organizer and Convener</p>
            <p className="greet">ICAIN-2025</p>
          </p>
          <p className="submissionLinkhead">
            <a href={pdf1} target="_blank">
              Session Proposal Template
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Call_for_Special;
