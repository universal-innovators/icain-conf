import "./Call_for_international.css";
import wsp from "../../Downloads/pdfs/WORKHOP PROPOSAL.docx"
import Footer from "../../Footer/footer";
const Call_for_international = () => {
  return (
    <>
      <div className="intern_container">
        <h5>Invitation to conduct International Workshop in ICAIN 2024</h5>
        <div className="intern_inner">
          <h3>Dear Researcher/Colleagues</h3>

          <p>
            Greeting from ICAIN-2024! ICAIN Conference team invites you to
            organize the
            <span className="greet"> International Workshop </span>
            in the "International Conference on Artificial Intelligence and Networking" (ICAIN-2024) , to be
            held at Guru Tegh Bahadur Institute of Technology (GGSIPU), New Delhi during
            <span className="greet"> 24th - 25th September </span>
            of your research domain.
          </p>

          <p>
            We are diligently working to bring some of the most knowledgeable
            academician from all over the world and business leaders to discuss
            critical research topics. The two-day conference will include a
            workshop, technical workshops and keynotes on our industry's
            cutting-edge technologies.
          </p>

          <p>
            {" "}
            By being part of this conference as a session chair and leading your
            own session at this esteemed conference, please increase the
            importance of the conference. We understand your networking skills
            and have an eye on identifying quality research papers.
          </p>
        </div>

        <div className="intern_highlights">
          <span className="highlight greet">
            <u> Highlights of the International Workshops and Benefits:</u>
          </span>
          <ul>
            <li>
              All accepted papers will be published in the proceedings of
              ICAIN-2024 (All the papers and the proceedings of ICAIN-2024 will be sent to
              SCOPUS for evalution!).
            </li>
            <li>
              The workshop organizers will be entitled to receive a renumeration
              of 20% of the total fees collected in the workshop.
            </li>
            <li>
              The minimum number of registrations should be 8 in the proposed
              workshop.
            </li>
            <li>
              Extended papers in SCI/Scopus/ESCI/DBLP/ACM Digital Library
              journals. For details see
              <a
                href="https://www.icain-conf.com/publications"
                target="_blank"
                className="greet"
              >
                {" "}
                https://www.icain-conf.com/publications
              </a>
            </li>
            <li>
              High quality publishing houses are part of this conference like
              Elsevier, Inderscience, IEEE, Benthm Science, IGI Global
              and many more.
            </li>
            <li>
              Special discount for your personal paper if above conditions are
              met. (If minimum number of papers get registered in your session)
            </li>
            <li>
              Extra weightage and support will be provided for your session
              extended paper in SCI/ Scopus Journal.
            </li>
            <li>
              Many International and National key note speakers will be
              delivering their lectures on latest innovative technologies in the
              conference.
            </li>
            <li>Easy accessibility of the well-connected conference venue.</li>
          </ul>
        </div>

        <div className="intern_interested">
          <p>
            If you are interested to conduct an International Workshop, please
            email us the workshop proposal at
            <a href="mailto:icain.conf@gmail.com" className="greet">
              {" "}
              icain.conf@gmail.com{" "}
            </a>
            with subject line as “Proposal for ICAIN-2024 International Workshop”
          </p>

          <div>
            <p>Looking to see you in ICAIN-2024.</p>

            <p> Sincerely,</p>

            <p> Organizer and Convener</p>

            <p className="greet">ICAIN-2024</p>
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
