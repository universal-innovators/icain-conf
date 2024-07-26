import "./Call_for_Special.css";
import Footer from "../../Footer/footer";
import pdf1 from "../../Downloads/pdfs/SESSION PROPOSAL.docx";
const Call_for_Special = () => {
  return (
    <>
      <div className="callSpecialMain">
        <div className="Special_container">
          <h2> Invitation to conduct special session in ICAIN 2024</h2>

          <span className="greet">Dear Sir/ Mam</span>

          <h3>Greeting from ICAIN-2024!</h3>
          <p className="CfSletter">
            ICAIN-2024 Conference team invites you to organize the special
            session in first version of "International Conference on Artificial Intelligence and Networking"
            (ICAIN-2024), to be held at  Guru Tegh Bahadur Institute of Technology
            (GTBIT)(GGSIPU), New Delhi{" "}
            <span className="greet">during 19th-20th September 2024</span> of your
            research domain. We are diligently working to bring some of the
            most knowledgeable researchers from all over the world along with
            the leaders from the industry to explore the important topics of
            research. The two day conference will include workshop, technical
            sessions and keynotes on cutting edge technologies related to our
            industry. The URL for the conference:{" "}
            <a href="www.icain-conf.com" className="greet">
              icain-conf.com
            </a>
            . "International Conference on Artificial Intelligence and Networking"{" "}
            <span className="greet">ICAIN-2024 </span> is organised with the
            objective of bringing together innovative scientists, professors,
            research scholars, students and industrial experts in the field of
            Computing and Communication to a common forum. The primary goal of
            the conference is to promote the exchange of innovative scientific
            information between researchers, developers, engineers, students,
            and practitioners. Another goal is to promote the transformation of
            fundamental research into institutional and industrialized research
            and to convert applied exploration into real time application.
            Kindly increase the value of the conference by being part of this
            conference as a session chair and heading your own session in this
            esteemed conference. We are aware about your networking skills and
            of having an eye to identify quality research papers.
          </p>

          {/* Highlights of the conference  */}
          <div className="callSpecialHighlight">
            <h2>Highlights of the conference and Special Session Benefits:</h2>
            <ol>
              <li>
                {" "}
                All accepted papers will be published in the proceedings of
                ICAIN-2024 (All the papers and the proceedings of ICAIN-2024 will be sent to
              SCOPUS for evalution!)
              </li>
              <li>
                {" "}
                You will get 20% of the total fees collected in your session.
              </li>
              <li> The minimum number of pages should be 10.</li>
              <li>
                {" "}
                Extended papers in SCI/Scopus/ESCI/DBLP/ACM Digital Library
                journals. We have already got approval from some Scopus and high
                quality journals. (Soon will be declared)
              </li>
              <li>
                {" "}
                High quality publishing houses are part of this conference like
                Elsevier, Inderscience, IEEE, Benthm Science, IGI
                Global and many more.
              </li>
              <li> Opportunity to be Session chair at the conference.</li>
              <li>
                {" "}
                Special discount for your personal paper if above conditions are
                met. (If minimum number of papers get registered in your
                session)
              </li>
              <li>
                {" "}
                Extra weightage and support will be provided for your session
                extended paper in SCI/ Scopus Journal.
              </li>
              <li>
                Many international and national key note speakers will be
                delivering their lectures on latest innovative technologies in
                the conference.
              </li>
              <li>
                Easy accessibility of the well-connected conference venue.
              </li>
            </ol>
          </div>

          <p className="CfSletter">
            If you are interested to conduct a special session, kindly mail us
            the special session proposal at{" "}
            <a href="mailto:icain.conf@gmail.com" className="greet">
              icain.conf@gmail.com
            </a>{" "}
            latest by 30th July 2024 as per the template given below.
          </p>

          <p className="CfSletter">
            ICAIN brings together the innovative research in the field of
            Computing and Communication to a common platform. The primary goal
            of the conference is to promote research and developmental
            activities. Another goal is to promote scientific information
            interchange between researchers, developers, engineers, students,
            and practitioners working in and around the world.
          </p>
          <p className="CfSletter">
            All the accepted papers (after double blinded peer review) will be
            published in a Springer LNNS series (Approved) and further extended
            accepted papers will be published in the special issues of
            SCI/SCOPUS/WoS/DBLP/ACM/EI indexed Journals.
          </p>
          <p className="CfSletter">
            Looking to see you in ICAIN-2024.
            <p>Sincerely</p>
            <p> Organizer and Convener</p>
            <p className="greet">ICAIN-2024</p>
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
