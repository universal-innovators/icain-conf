import React from "react";
import "./ElevatexAwards.css";

const awards2025 = [
  { name: "Jaya Vardhani Mamidala", award: "AI-Driven Cloud Transformation Excellence Award" },
  { name: "Mahadev A. Gawas", award: "Young Researcher Excellence Award – Global Research Star" },
  { name: "Sheshang Degadwala", award: "Best Researcher Award (Global Research Trailblazer)" },
  { name: "Anala Venkata Sai Abhishek", award: "Best Researcher Award (Global Research Trailblazer)" },
  { name: "Anil Kumar Verma", award: "Global Diversity Champion in Academia – Global Inclusion Advocate" },
  { name: "Aniruddha Arjun Singh", award: "AI-Driven Transformation Excellence Award" },
  { name: "Anupam Agrawal", award: "Sustainable Innovation Award – Global Green Researcher" },
  { name: "Arnab Saha", award: "Young Researcher Excellence Award – Global Research Star, AI & Data Science Impact Award" },
  { name: "Arunkumar Yadava", award: "Youth Empowerment Through Innovation – Global Summit Youth Impact Award" },
  { name: "Aryender Tyagi", award: "Special Recognition Award - Global Technology Leader" },
  { name: "Avinash Attipalli", award: "Cloud Security and Distributed Systems Engineering Excellence Award" },
  { name: "Balaji Krishnan", award: "Excellence in AI Innovation Award" },
  { name: "Balavignesh Vemparala", award: "Young Researcher Excellence Award – Global Research Star, AI & Data Science Impact Award" },
  { name: "Chandra Sekhar Kubam", award: "Global Excellence Award in Artificial Intelligence and Machine Learning" },
  { name: "Diana George", award: "Women in Research Excellence – Global Woman of Science Award" },
  { name: "Dinesh Rajendran", award: "Engineering Excellence in Cloud Architecture and AI Innovation Award" },
  { name: "Jagan Kurma", award: "Cloud Technologies for the Cloud Migration and Modernization Champion Award" },
  { name: "Kallol Kanti Mondal", award: "Breakthrough in Health Sciences – Global Biomedical Pioneer" },
  { name: "Krunal Patel", award: "Smart Manufacturing Innovation Award – For Accelerating Productization and Scaling Manufacturing Processes within the Industry 4.0 Era" },
  { name: "Md. Hossain", award: "Young Researcher Excellence Award – Global Research Star" },
  { name: "Milankumar Rana", award: "Excellence in Patented Innovations – Global Inventor of the Year" },
  { name: "Musfikul Islam", award: "Young Researcher Excellence Award in Business Analytics – Global Research Star" },
  { name: "Naresh Kiran Kumar Reddy Yelkoti", award: "Excellence in Cloud Security Award" },
  { name: "Natarajan Ravikumar", award: "Excellence in Cloud Security Award" },
  { name: "Nihari Paladugu", award: "AI & Data Science Impact Award – Global Summit Digital Vision" },
  { name: "Numair Bin Sharif", award: "Young Researcher Excellence Award – Global Research Star" },
  { name: "Parul Yadav", award: "Women in Research Excellence – Global Woman of Science Award" },
  { name: "Prasanth Kosaraju", award: "Leadership in Networking, Infrastructure & Security Award" },
  { name: "Prateek Sharma", award: "Special Recognition for Excellence in Retail Optimization" },
  { name: "Prerna Ajmani", award: "Women in Research Excellence – Global Woman of Science Award" },
  { name: "Prince Kumar", award: "Best Researcher Award (Global Research Trailblazer)" },
  { name: "Quazi Taif Sadat", award: "Outstanding Contribution to Higher Education" },
  { name: "Raghava Chellu", award: "Global Pioneering Excellence Award in Quantum-Safe Cloud & Nano-Secure Data Exchange" },
  { name: "Raghuvaran Kendyala", award: "Excellence in AI-Driven Secure Data Engineering and Cloud Governance Innovation Award" },
  { name: "Rajender Chilukala", award: "North America Fintech Innovation Excellence Award" },
  { name: "Rajesh Sura", award: "International Excellence Award: Digital Transformation & Innovation Leader of the Year" },
  { name: "Ramadevi Sannapureddy", award: "Cloud Migration & Modernization Champion Award" },
  { name: "Rami Reddy Kothamaram", award: "Hybrid Cloud and AI Infrastructure Excellence Award" },
  { name: "Ravi Teja Avireni", award: "Cloud Migration & Modernization Champion Award" },
  { name: "Sandeep Kumar Thota", award: "Best Researcher Award (Global Research Trailblazer)" },
  { name: "Sanjay Nakhrau Prasad Kumar", award: "Outstanding Machine Learning Implementation Award" },
  { name: "Sanketh Nelavelli", award: "Cloud Migration & Modernization Champion Award" },
  { name: "Sathish Krishna Anumula", award: "Emerging Innovator of the Year – Global Summit Visionary" },
  { name: "Sathishkumar V E", award: "AI & Data Science Impact Award – Global Summit Digital Vision" },
  { name: "Sindhu Prabhakaran", award: "Cloud Technologies for the Cloud Migration & Modernization Champion Award" },
  { name: "Sivaprasad Yerneni Khaga", award: "Software Architecture Excellence Award" },
  { name: "Sri Harsha Koneru", award: "Best Cloud Architecture Innovation Award" },
  { name: "Srinivasa Rao Kasisomayajula", award: "Lifetime Achievement in Higher Education (Global Edition)" },
  { name: "Sukumar Reddy Beeredddy", award: "Excellence Award in Fintech & AI Innovation" },
  { name: "Sunil Jacob Enokkaren", award: "Cloud Payroll Analytics & Insight Leadership Award" },
  { name: "Svetlana Bodrunova", award: "Women in Research Excellence – Global Woman of Science Award" },
  { name: "Vaibhav Maniar", award: "Digital Transformation and Cloud Adoption Award" },
  { name: "Varun Bitkuri", award: "AI-Driven Cloud Computing Championship Award" },
  { name: "Venkata Deepa Namburi", award: "Digital Modernization and Enterprise Architecture Excellence Award" },
  { name: "Venkatraman Viswanathan", award: "Emerging Innovator of the Year – Global Summit Visionary" },
  { name: "Venu Madhav Nadella", award: "Leadership in Networking, Infrastructure & Security Award" },
  { name: "Vetrivelan Tamilmani", award: "Next-Gen SAP Architecture Award" },
];

export default function ElevatexAwards() {
  return (
    <div className="awards-container">
      <header className="awards-header">
        <h1>ElevateX Awards 2025</h1>
        <p>Celebrating Excellence and Innovation</p>
      </header>

      <div className="awards-list-container">
        {awards2025.map((awardee, index) => (
          <div key={index} className="award-card">
            <h3 className="awardee-name">{awardee.name}</h3>
            <p className="award-title">{awardee.award}</p>
          </div>
        ))}
      </div>

      <footer className="awards-footer">
        © {new Date().getFullYear()} ElevateX Awards. All rights reserved.
      </footer>
    </div>
  );
}
