import "./Award.css";
import AwardsCards from "./AwardsCards";
import HiEduAward from "./HiEduAward/HiEduAward";
import Footer from "../Footer/footer";
import Submission from "./Sub_Nom_Paward/SuNoPaward";
function Awards() {
  return (
    <>
      <div className="aParticipation">
        <div className="aPartcipationHead">
          <h1>
            CLICK HERE TO SEE THE REGISTRATION DETAILS FOR PARTICIPATION IN UILA
            2022
          </h1>
        </div>

        {/* universal leadership awards  */}
        <div className="aLeaderAwards">
          <div className="aLeaderHeading">
            <h2>4th Universal Inovators LEADERSHIP AWARDS (UILA 2023)</h2>
          </div>
          <hr />

          {/* Leadership awards  */}
          <div className="aLeaderAbout">
            <h1>About Universal Inovators Leadership Awards (UILA)</h1>
            <p>
              UI Leadership Awards is to honor the determined effort and
              achievements of Change makers who have made their performance and
              innovative excellence in their respective field. It is a very
              special and unique set up, it involves International Excellence
              awards in various categories. UI Leadership award creates a
              world-wide recognition and reserves the own space in the Society
              for the winning profiles. As such it also provides participants
              with an ideal opportunity to make their work visible to a wider
              audience.
            </p>
            <p>
              UI Leadership awards will be organized along with 
              "International Conference on Artificial Intelligence and Networking" ICAIN organized jointly by  Guru Tegh
              Bahadur Institute of Technology (GTBIT) Guru Gobind Singh
              Indraprastha University and Universal Inovators New Delhi, India.
            </p>
          </div>

          {/* important dates  */}
          <div className="aImpDates">
            <h2>IMPORTANT DATES:</h2>
            <hr />

            <div className="aImpDatesMain">
              <p>
                Last date for nomination: <span>31st July, 2025</span>
              </p>
              <p>
                Announcement of Result: <span>28th August, 2025</span>
              </p>
            </div>

            <div className="aImpInst">
              <h1>
                NO NOMINATION/AWARD FEES, BUT ALL THE AWARDEES SHOULD REGSITER
                FOR THE CONFERENCE TO PARTICIPATE IN THE AWARD CEREMONY
              </h1>
            </div>
          </div>

          {/* award category  */}
          <div className="aAwardC">
            <h1>AWARD CATEGORY:</h1>
            <hr />
            <h2>
              Leadership awards will honor the awards in the following
              categories:
            </h2>
          </div>

          {/* individual award  */}
          <div className="aIndividual">
            <h2>Individual Award;</h2>

            <div className="aIndividualMain">
              <h3>Life time achievement Award</h3>
              <hr />
              <p>
                To honor outstanding leaders in education who have dedicated
                their life to the enhancement of the Institution/Organization
                and advancing the field of education with their pioneering
                spirit, demonstrated innovation, advocacy and career
                achievements that have improved the education industry. The
                Lifetime Achievement Award would be presented to an individual
                member whose long-term efforts, dedication, and sustained
                commitment has supported the organization/ Society/ Research/
                Mankind.
              </p>
            </div>
          </div>

          {/* young research award  */}
          <div className="aYoung">
            <h3>Young Researcher Award</h3>
            <hr />
            <p>
              To the research scholars, academicians and professionals from
              industries for their research work published in any International
              Journals or Conferences, having age not more than 35.
            </p>
          </div>

          {/* cards section   */}
          <div className="CardsAward">
            <div className="awCard">
              <AwardsCards />
            </div>
          </div>

          {/* higher Education awards  */}
          <div className="HiEdAward">
            <div className="HiAward">
              <HiEduAward />
            </div>
          </div>
        </div>

        {/* submission, nomination, past awardees  */}
        <div className="submissionSection">
          <Submission />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Awards;
