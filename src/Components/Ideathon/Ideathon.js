import React from "react";
import {
  Award,
  Building2,
  CalendarDays,
  CheckCircle2,
  Globe2,
  Lightbulb,
  MapPin,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";
import "./InnostormInfo.css";

const eventStats = [
  { label: "Event Dates", value: "26-28 November 2026", icon: CalendarDays },
  { label: "Venue", value: "BITS Pilani Dubai Campus", icon: MapPin },
  { label: "Mode", value: "Hybrid: online and on-site", icon: Globe2 },
  { label: "Prize Pool", value: "USD 1,750+", icon: Award },
  { label: "Abstract Deadline", value: "30 October 2026", icon: CheckCircle2 },
];

const participationBenefits = [
  "Transform innovative ideas into impactful real-world solutions",
  "Present before an international jury of experts",
  "Receive mentorship from distinguished academicians and industry professionals",
  "Validate ideas with researchers, entrepreneurs, and innovation leaders",
  "Build global academic and industrial collaborations",
  "Connect with startup ecosystems and investors",
  "Gain international visibility and recognition",
  "Learn from successful innovators and entrepreneurs",
  "Develop entrepreneurial and innovation management skills",
  "Showcase ideas on an international platform",
  "Explore startup, incubation, and commercialization opportunities",
];

const tracks = [
  {
    title: "Artificial Intelligence, Data Science & Emerging Technologies",
    description:
      "Artificial Intelligence, Machine Learning, Generative AI, Robotics, Computer Vision, NLP, Quantum Computing, Intelligent Automation, and Big Data Analytics.",
  },
  {
    title: "Cybersecurity, Privacy & Digital Infrastructure",
    description:
      "Cybersecurity, Blockchain, Web3, Secure Communication, Cloud Security, Digital Identity, Privacy Preservation, and Digital Trust.",
  },
  {
    title: "Healthcare, Biotechnology & Digital Wellness",
    description:
      "Digital Health, AI in Healthcare, Telemedicine, Bioinformatics, Medical Imaging, Wearable Technologies, and Smart Diagnostics.",
  },
  {
    title: "Smart Cities, IoT & Sustainable Living",
    description:
      "Smart Mobility, IoT Applications, Smart Energy, Urban Innovation, Waste Management, Water Conservation, and Intelligent Infrastructure.",
  },
  {
    title: "AgriTech & Rural Innovation",
    description:
      "Precision Agriculture, Smart Irrigation, Food Security, Agricultural Analytics, Rural Technologies, and Digital Farming.",
  },
  {
    title: "Climate Technology & Circular Economy",
    description:
      "Renewable Energy, Green Computing, Environmental Monitoring, Carbon Reduction, Circular Economy, and Sustainable Innovation.",
  },
  {
    title: "Education, Finance & Inclusive Technology",
    description:
      "EdTech, FinTech, Accessibility Technologies, Digital Learning, Financial Inclusion, and Digital Skills Development.",
  },
  {
    title: "Open Innovation (Wild Card)",
    description:
      "Ideas beyond predefined categories that demonstrate exceptional creativity, scalability, and societal impact.",
  },
];

const specialActivities = [
  "Innovation Showcase",
  "Prototype Demonstrations",
  "Startup Pitch Sessions",
  "Mentor Clinics",
  "Innovation Roundtables",
  "Industry Networking Meet",
  "Investor Connect Forum",
  "Patent & IPR Consultation",
  "Innovation Exhibition",
  "Grand Awards Ceremony",
];

const grandAwards = [
  {
    title: "Winner",
    amount: "USD 1,000",
    perks: ["Trophy", "Certificate", "Mentorship Support"],
  },
  {
    title: "First Runner-Up",
    amount: "USD 500",
    perks: ["Trophy", "Certificate", "Incubation Assistance"],
  },
  {
    title: "Second Runner-Up",
    amount: "USD 250",
    perks: ["Trophy", "Certificate"],
  },
];

const recognitionAwards = [
  "Best Innovation Award",
  "Best Artificial Intelligence Solution",
  "Best Startup Idea",
  "Patent Potential Award",
  "Best Prototype Award",
  "Best Industry Solution",
  "Social Impact Innovation Award",
  "Sustainable Innovation Award",
  "Outstanding Research Innovation",
  "Young Innovator Award",
  "Jury Appreciation Award",
];

const supportServices = [
  {
    title: "Startup Mentorship & Business Development",
    fee: "USD 100",
    icon: Rocket,
    items: [
      "Startup validation",
      "Business model development",
      "Market strategy",
      "Product commercialization",
      "Go-to-market planning",
      "Pitch refinement",
    ],
  },
  {
    title: "Patent & Intellectual Property (IPR) Consultation",
    fee: "USD 100",
    icon: ShieldCheck,
    items: [
      "Patentability assessment",
      "Prior-art search",
      "Patent filing strategy",
      "Copyright protection",
      "Intellectual Property Rights",
      "Technology commercialization",
    ],
  },
  {
    title: "Incubation Support & Startup Registration Guidance",
    fee: "USD 100",
    icon: Building2,
    items: [
      "Connections with reputed incubation centres",
      "Startup registration guidance",
      "Mentor matching",
      "Innovation ecosystem support",
      "Commercialization pathways",
    ],
  },
  {
    title: "Investor Connect & Funding Readiness",
    fee: "USD 100",
    icon: Users,
    items: [
      "Investment readiness mentoring",
      "Pitch deck review",
      "Investor pitching guidance",
      "Angel investor connect, where applicable",
      "Startup ecosystem networking",
    ],
  },
  {
    title: "Personalized Expert Mentorship",
    fee: "USD 100",
    icon: Lightbulb,
    items: [
      "Technical guidance",
      "Product development",
      "Research validation",
      "Business strategy",
      "Prototype refinement",
      "Commercialization roadmap",
    ],
  },
];

const participantTypes = [
  "Students",
  "Research Scholars",
  "Faculty Members",
  "Innovators",
  "Startup Founders",
  "Entrepreneurs",
  "Engineers",
  "Developers",
  "Product Designers",
  "Researchers",
  "Industry Professionals",
  "AI & Data Science Practitioners",
  "Technology Consultants",
  "Innovation Centers",
  "Incubators",
  "Investors",
  "Venture Capital Representatives",
];

const importantNotes = [
  "The Abstract Submission Fee of USD 20 is mandatory for all participating teams.",
  "Only shortlisted teams will be invited to the Final Presentation Round.",
  "Shortlisted teams must complete the applicable presentation registration: USD 50 for Online Presentation or USD 100 for Offline Presentation at BITS Pilani Dubai Campus.",
  "Professional Innovation Support Services are optional and may be availed independently based on participant requirements.",
  "Participation in optional support services does not guarantee incubation, investment, startup registration, patent approval, or commercialization.",
];

const InnostormInfo = () => {
  return (
    <main className="innostorm-page">
      <section className="innostorm-hero">
        <div className="innostorm-hero__content">
          <p className="innostorm-eyebrow">The Official International Ideathon of ICAIN 2026</p>
          <h1>INNOSTORM 2026</h1>
          <p className="innostorm-subtitle">Ignite. Collaborate. Innovate.</p>
          <p className="innostorm-lede">
            The Premier Innovation & Startup Summit of ICAIN 2026, transforming bold
            ideas into global breakthroughs.
          </p>
          <div className="innostorm-actions">
            <a
              className="innostorm-button"
              href="https://forms.gle/2UZ3H8DxisbNfsuv5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit Your Idea
            </a>
            <a className="innostorm-button innostorm-button--secondary" href="mailto:chair@universal-inovators.com">
              Contact Organizers
            </a>
          </div>
        </div>

        <div className="innostorm-hero__panel" aria-label="Event summary">
          <p>Ideate | Build | Pitch | Validate | Innovate</p>
          <strong>Organized by BITS Pilani Dubai & IIIT Allahabad</strong>
          <span>Dubai, UAE | During ICAIN 2026</span>
        </div>
      </section>

      <section className="innostorm-stats" aria-label="Important event details">
        {eventStats.map(({ label, value, icon: Icon }) => (
          <article className="innostorm-stat" key={label}>
            <Icon aria-hidden="true" size={24} />
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </section>

      <section className="innostorm-section innostorm-intro">
        <div>
          <p className="innostorm-section-label">About The Ideathon</p>
          <h2>Where great ideas become tomorrow's innovations.</h2>
        </div>
        <div className="innostorm-copy">
          <p>
            Co-located with ICAIN 2026, the International Conference on Artificial
            Intelligence and Networks, INNOSTORM 2026 brings together innovators,
            researchers, startup founders, industry experts, investors, academicians,
            policymakers, and technology leaders from around the world.
          </p>
          <p>
            The ideathon encourages multidisciplinary teams to develop practical,
            scalable, and sustainable solutions that create meaningful impact across
            society, healthcare, education, agriculture, smart cities, finance, climate
            action, cybersecurity, artificial intelligence, and digital transformation.
          </p>
          <p>
            Whether you are a student with a breakthrough idea, a startup founder
            validating a solution, or a researcher developing cutting-edge technologies,
            INNOSTORM 2026 provides an international platform to transform ideas into
            real-world innovations.
          </p>
        </div>
      </section>

      <section className="innostorm-section">
        <div className="innostorm-section-heading">
          <p className="innostorm-section-label">Why Participate</p>
          <h2>Accelerate your innovation journey.</h2>
          <p>
            Participating in INNOSTORM is more than competing for prizes. It is an
            opportunity to validate, refine, showcase, and scale your innovation.
          </p>
        </div>
        <div className="innostorm-check-grid">
          {participationBenefits.map((benefit) => (
            <div className="innostorm-check" key={benefit}>
              <CheckCircle2 aria-hidden="true" size={18} />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="innostorm-section">
        <div className="innostorm-section-heading">
          <p className="innostorm-section-label">Challenge Tracks</p>
          <h2>Innovation themes for global impact.</h2>
          <p>Participants are invited to submit innovative ideas under these themes.</p>
        </div>
        <div className="innostorm-track-grid">
          {tracks.map((track, index) => (
            <article className="innostorm-track-card" key={track.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="innostorm-section innostorm-two-column">
        <div>
          <p className="innostorm-section-label">Key Highlights</p>
          <h2>Pitch, demonstrate, and connect.</h2>
          <div className="innostorm-highlight-list">
            <article>
              <h3>International Innovation Challenge</h3>
              <p>
                Present breakthrough ideas, research concepts, innovative solutions,
                and working prototypes addressing real-world challenges.
              </p>
            </article>
            <article>
              <h3>Grand Pitch Competition</h3>
              <p>
                Pitch your innovation before an international jury of researchers,
                startup founders, entrepreneurs, investors, academicians, and
                technology leaders.
              </p>
            </article>
          </div>
        </div>
        <div className="innostorm-activity-card">
          <h3>Special Activities</h3>
          <ul>
            {specialActivities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="innostorm-section">
        <div className="innostorm-section-heading">
          <p className="innostorm-section-label">Awards & Recognition</p>
          <h2>Celebrating excellence, impact, and scalability.</h2>
        </div>
        <div className="innostorm-awards-grid">
          {grandAwards.map((award) => (
            <article className="innostorm-award-card" key={award.title}>
              <span>{award.title}</span>
              <strong>{award.amount}</strong>
              <ul>
                {award.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="innostorm-recognition">
          <h3>Special Recognition Awards</h3>
          <div>
            {recognitionAwards.map((award) => (
              <span key={award}>{award}</span>
            ))}
          </div>
          <p>Each awardee will receive a Certificate of Recognition.</p>
        </div>
      </section>

      <section className="innostorm-section innostorm-fees">
        <div className="innostorm-section-heading">
          <p className="innostorm-section-label">Registration & Participation Fees</p>
          <h2>A two-stage participation process.</h2>
        </div>
        <div className="innostorm-fee-grid">
          <article>
            <span>Stage 1</span>
            <h3>Abstract Submission</h3>
            <strong>USD 20 per team</strong>
            <ul>
              <li>Technical evaluation of the submitted abstract</li>
              <li>Eligibility for shortlisting to the final presentation round</li>
              <li>Review by the Technical Program Committee</li>
            </ul>
          </article>
          <article>
            <span>Stage 2</span>
            <h3>Online Presentation</h3>
            <strong>USD 50 per team</strong>
            <ul>
              <li>Live online presentation</li>
              <li>Jury evaluation</li>
              <li>Participation certificate</li>
              <li>Access to networking sessions, where applicable</li>
            </ul>
          </article>
          <article>
            <span>Stage 2</span>
            <h3>Offline Presentation</h3>
            <strong>USD 100 per team</strong>
            <ul>
              <li>Live presentation before the International Jury</li>
              <li>Participation in the Grand Finale</li>
              <li>Networking opportunities</li>
              <li>Conference access, as applicable</li>
              <li>Presentation certificate</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="innostorm-section">
        <div className="innostorm-section-heading">
          <p className="innostorm-section-label">Innovation Support</p>
          <h2>Startup enablement beyond the competition.</h2>
          <p>
            Optional professional support services help promising ideas evolve through
            mentorship, startup guidance, intellectual property support, incubation
            facilitation, and investor connections.
          </p>
        </div>
        <div className="innostorm-support-grid">
          {supportServices.map(({ title, fee, icon: Icon, items }) => (
            <article className="innostorm-support-card" key={title}>
              <div>
                <Icon aria-hidden="true" size={24} />
                <span>{fee}</span>
              </div>
              <h3>{title}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="innostorm-disclaimer">
          Incubation, investor interactions, and partner support are facilitated based on
          project suitability, partner availability, and independent evaluation criteria.
        </p>
      </section>

      <section className="innostorm-section innostorm-two-column">
        <div>
          <p className="innostorm-section-label">Who Should Participate</p>
          <h2>Open to builders, researchers, founders, and innovation ecosystems.</h2>
          <div className="innostorm-pill-grid">
            {participantTypes.map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
        </div>
        <div className="innostorm-steps">
          <h3>Ready to Innovate?</h3>
          <ol>
            <li>
              <strong>Step 1</strong>
              <span>Form a team of 1-7 members.</span>
            </li>
            <li>
              <strong>Step 2</strong>
              <span>Submit your preliminary abstract by 30 October 2026.</span>
            </li>
            <li>
              <strong>Step 3</strong>
              <span>
                If shortlisted, present online or live at BITS Pilani Dubai Campus.
              </span>
            </li>
          </ol>
        </div>
      </section>

      <section className="innostorm-section innostorm-notes">
        <div>
          <p className="innostorm-section-label">Important Information</p>
          <h2>Participation notes</h2>
        </div>
        <ul>
          {importantNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section className="innostorm-cta">
        <p className="innostorm-section-label">Join INNOSTORM 2026</p>
        <h2>Ignite ideas. Build solutions. Create impact.</h2>
        <p>
          Showcase your innovation, collaborate with global experts, receive mentorship,
          explore startup and investment opportunities, and become part of an
          international innovation ecosystem.
        </p>
        <div className="innostorm-actions">
          <a
            className="innostorm-button"
            href="https://forms.gle/2UZ3H8DxisbNfsuv5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit Your Idea
          </a>
          <a className="innostorm-button innostorm-button--secondary" href="mailto:chair@universal-inovators.com">
            chair@universal-inovators.com
          </a>
        </div>
      </section>
    </main>
  );
};

export default InnostormInfo;
