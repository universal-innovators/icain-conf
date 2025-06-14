import "./Award.css";
import AwardsCards from "./AwardsCards";
import HiEduAward from "./HiEduAward/HiEduAward";
import Footer from "../Footer/footer";
import Submission from "./Sub_Nom_Paward/SuNoPaward";
import AwardAccordion from "./AwardCategories";
import Selection from "./Selection";
function Awards() {
  return (
    <>
      <div className="elevate-container">
      <div className="elevate-content">
        <h1 className="elevate-title">
          Elevate<span className="highlight">X</span>
        </h1>
        <h2 className="elevate-subtitle">ELEVATEX Awards 2025</h2>
        <p className="elevate-x-meaning">
          X = Excellence, Exploration, Exchange, Innovation
        </p>

        <div className="elevate-theme">
          <h3>Theme</h3>
          <p>"Academic Brilliance Meets Industrial Excellence."</p>
        </div>

        <div className="elevate-details">
          <div className="detail-box">
            <span className="label">📍 Venue:</span>
            <span className="value">Global Summit, Global</span>
          </div>
          <div className="detail-box">
            <span className="label">📅 Date:</span>
            <span className="value">6th – 7th October, 2025</span>
          </div>
          <div className="detail-box full-width">
            <span className="label">🎯 Organized by:</span>
            <span className="value">Universal Inovator & UI-Educon</span>
          </div>
        </div>

        <div className="elevate-description">
          <p>
            <strong>ELEVATE Awards 2025</strong> is an international celebration of innovation, excellence,
            and transformative collaboration across academia, research, industry, and startups.
            Set in the global hub of innovation—Global Summit, Global—this prestigious platform brings together
            pioneering minds, institutions, and organizations that are redefining the future.
          </p>
          <p>
            As a gateway between East and West, Global Summit’s visionary ecosystem makes it the ideal host for recognizing
            those who create real-world impact, accelerate technological advancement, and drive sustainable, cross-sectoral progress.
          </p>
          <p>
            Whether you're an academic shaping the future of learning, a researcher solving high-impact challenges,
            a startup changing the rules, or a corporate leader scaling innovation—<strong>ELEVATE</strong> is where your journey is honoured and amplified.
          </p>
        </div>
        <AwardAccordion/>
         <Selection/>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default Awards;
