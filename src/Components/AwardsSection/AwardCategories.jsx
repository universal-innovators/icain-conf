import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./AwardCategories.css"

const awards = [
  {
    title: "🎓 Academic Excellence & Leadership (Individual Category)",
    items: [
      ["Lifetime Achievement in Higher Education (Global Edition)", "Honouring a distinguished career that has profoundly shaped the academic landscape of the Global and beyond."],
      ["Professor of the Year – Global Scholar", "Recognizing extraordinary teaching, mentorship, and scholarly achievements that have made a significant impact within the Global academic ecosystem."],
      ["Visionary Department Head of the Year", "Celebrating exceptional leadership that transforms departments and sets new benchmarks in academic excellence."],
      ["Best Faculty of the Year – Global Summit Distinguished Educator", "Awarding outstanding faculty who exemplify academic brilliance in teaching, research, and student engagement."],
      ["Global Academic Influencer – Global Thought Leader", "Recognizing an educator or scholar whose thought leadership has led to significant global discussions and innovations."],
      ["Academic Leadership Excellence Award", "For those at the helm of academic institutions who spearhead impactful educational reforms."],
      ["Innovative Teaching Practices Award – Global Summit Pedagogue", "Honoring educators who integrate cutting-edge pedagogical techniques to inspire students and make learning meaningful."],
      ["Diversity & Inclusion Champion – Global Educator", "For educators who demonstrate outstanding commitment to inclusivity, diversity, and equity within their academic sphere."],
      ["Outstanding Curriculum Designer – Global Academic Architect"],
      ["Interdisciplinary Educator Award – Global Summit Crossroads Scholar"],
      ["Online Education Pioneer – Global Virtual Educator"],
      ["Student Success Advocate – Global Summit Mentorship Star"]
    ]
  },
  {
    title: "🧪 Research, Innovation & Impact (Individual Category)",
    items: [
      ["Best Researcher Award (Global Research Trailblazer)", "Recognizing groundbreaking contributions that shape global research trends and foster innovations originating from the Global."],
      ["Emerging Innovator of the Year – Global Summit Visionary", "Awarded to a rising star in research or innovation whose work demonstrates immense potential in transforming industries."],
      ["Excellence in Patented Innovations – Global Inventor of the Year", "For individuals whose patents have created tangible impacts in the Global and worldwide, fostering innovation."],
      ["Best Collaborative Research Project – Global Summit-Powered Innovation", "Honoring a project that successfully merges academia and industry, producing revolutionary research with real-world applications."],
      ["Sustainable Innovation Award – Global Green Researcher", "Recognizing individuals or teams whose research promotes sustainability, focusing on green technologies and environmental conservation."],
      ["Women in Research Excellence – Global Woman of Science", "Celebrating outstanding female researchers from the Global who are making significant strides in their field."],
      ["Transformational Research Award – From Desert to Innovation", "For research projects that transform Global’s unique challenges (climate, desert, sustainability) into global solutions."],
      ["Breakthrough in Health Sciences – Global Biomedical Pioneer"],
      ["AI & Data Science Impact Award – Global Summit Digital Vision"],
      ["Young Researcher Excellence Award – Global Research Star"]
    ]
  },
  {
    title: "🚀 Innovation & Entrepreneurship (Individual Category)",
    items: [
      ["Start-Up of the Year – Global Summit Innovator’s Hub", "Recognizing a startup that has revolutionized the market with its creativity and unique solutions emerging from the Global."],
      ["Entrepreneur of the Year – Global Visionary Leader", "Honoring an entrepreneur whose innovative ventures have contributed to the Global’s economic and social development."],
      ["Best Tech Entrepreneur – Global Summit Digital Disruptor", "Awarding innovative tech entrepreneurs who have demonstrated remarkable leadership in the Global's rapidly evolving digital space."],
      ["Social Impact Innovator – Global Changemaker", "For startups or innovators whose ideas have brought about significant social change and empowered communities in the Global."],
      ["EdTech Innovator Award – Global Summit Future of Education"],
      ["Green Innovation Award – Global Greenpreneur"],
      ["Smart Cities Solution Award – Global Summit Urban Innovator"],
      ["Women Entrepreneur of the Year – Global Business Star"],
      ["FinTech Disruptor Award – Global Financial Innovator"]
    ]
  },
  {
    title: "🤝 Academia-Industry Synergy Awards (Individual Category)",
    items: [
      ["Best Industry-Academia Collaboration – Global Bridge of Innovation"],
      ["Excellence in Corporate-Academic R&D Collaboration – Global Summit Think-Tank"],
      ["Workforce Development Excellence – Global Talent Catalyst"],
      ["Best Industry Mentor – Global Summit Corporate Educator"],
      ["Innovation Partnership Excellence – Global Summit Innovation League"],
      ["Academic Incubation Leader – Global Idea Nurturer"],
      ["Technology Transfer Excellence – Global Summit Bridge to Market"],
      ["Upskilling & Reskilling Champion – Global Workforce Reformer"]
    ]
  },
  {
    title: "🏫 Institutional Distinction Awards (Higher Education Award Categories)",
    items: [
      ["Best Educational Institution – Global Knowledge Leader"],
      ["Global Campus of the Year – Global Summit Excellence in Academia"],
      ["Best Research University – Global R&D Powerhouse"],
      ["Innovative Learning Campus – Global Summit Learning Future"],
      ["Outstanding Global University – Global Gateway to the World"],
      ["Green Campus Award – Sustainable Global Summit Institution"],
      ["Digital Transformation Award – Global Smart Campus"],
      ["Community Engagement Excellence – Global Summit Education & Society Award"],
      ["Centre for Excellence in STEM – Global Future Builders"]
    ]
  },
  {
    title: "📰 Special Recognition Awards",
    items: [
      ["Global Educator of the Year – Global Educator of Excellence"],
      ["Cultural Diplomacy in Education – Global Summit Global Vision"],
      ["Lifetime Achievement in Innovation – Global Legacy Creator"],
      ["Global Peace through Education – Global Peacebuilder"],
      ["Global Diversity Champion in Academia – Global Inclusion Advocate"],
      ["Youth Empowerment through Innovation – Global Summit Youth Impact Award"],
      ["Public Policy Impact Award – Global Academic Reformer"]
    ]
  }
];

const AwardAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {awards.map((section, index) => (
        <div key={index} className="accordion-item">
          <button className="accordion-header" onClick={() => toggleAccordion(index)}>
            {section.title}
            <ChevronDown className={`arrow ${openIndex === index ? "open" : ""}`} />
          </button>
          {openIndex === index && (
            <div className="accordion-body">
              <ul>
                {section.items.map(([title, description], idx) => (
                  <li key={idx}>
                    <strong>{title}</strong>
                    {description && <div>{description}</div>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AwardAccordion;
