import React from "react";
import "./Selection.css"
import { Link } from "react-router-dom";

const Selection = () => {
  return (
    <section className="elevatex-container">
      <h2 className="elevatex-title">🏆 ElevateX Awards Selection Process</h2>

      <p className="elevatex-text">
        The ElevateX Awards follow a rigorous, transparent, and merit-based selection process to identify and honor the most deserving individuals and institutions in AI research, academic excellence, and cross-sector innovation. The process involves multiple levels of evaluation:
      </p>

      <ol className="elevatex-list">
        <li>
          <strong>Call for Nominations:</strong> Nominations are open for eligible individuals and organizations. Candidates could be nominated by peers, advisory members, or submit applications directly.
        </li>
        <li>
          <strong>Initial Screening (2–3 Days):</strong> A preliminary review team verified the completeness of each application, ensuring eligibility based on category-specific criteria. Incomplete or ineligible applications were screened out at this stage.
        </li>
        <li>
          <strong>Expert Committee Evaluation (10–12 Days):</strong> Each eligible nomination was reviewed by a panel of domain experts and members of the ElevateX Steering Committee. Evaluations were conducted using predefined and objective criteria, including:
          <ul className="elevatex-sublist">
            <li>Innovation and Originality</li>
            <li>Measurable Impact and Outcomes</li>
            <li>Leadership and Collaboration</li>
            <li>Contribution to Global AI and Technology Ecosystems</li>
          </ul>
        </li>
        <li>
          <strong>Final Review & Approval:</strong> The final awardees were selected by the ElevateX Advisory & Governance Council, based on aggregated review scores, feedback, and strategic alignment with the award’s vision.
        </li>
      </ol>

      <hr className="elevatex-divider" />

      <div className="elevatex-extra">
        <h3>📊 Selection Ratio:</h3>
        <p>Only the top <strong>5–7%</strong> of nominations in each category were selected—highlighting the exceptional quality and transformative impact of the winners.</p>

        <h3>📘 Transparency Note:</h3>
        <p>
          You may view the list of committee members involved in the evaluation process at:<br />
          <Link to="/steerings" className="elevatex-link">🔗 ElevateX Evaluation Committee</Link>
        </p>

        <h3>🗓️ Important Dates:</h3>
        <ul className="elevatex-list">
          <li><strong>Last date for nomination:</strong> 05th September, 2025</li>
          <li><strong>Announcement of Result:</strong> 20th September, 2025</li>
        </ul>

        <div className="elevatex-buttons">
          <a href="ind_awards.docx" className="btn">📝 Individual Award Form</a>
          <a href="high_edu_awards.docx" className="btn">🏫 Higher Education Award Form</a>
        </div>
        <br/>
        <h4>Fill the google form for the nomination :<a href="https://forms.gle/UbdKjMaYQPdiDXFE8" style={{color:"#e6c200"}}> Form Link</a></h4>
        <h4>Contact us :<a href="mailto:chair@universal-inovators.com" style={{color:"#e6c200"}}> chair@universal-inovators.com</a></h4>

      </div>
    </section>
  );
};

export default Selection;
