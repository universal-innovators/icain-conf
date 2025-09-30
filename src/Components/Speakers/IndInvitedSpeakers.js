import React from "react";
import "../AbtConference/abtConference.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Keynote from "./Keynote";
import Footer from "../Footer/footer";


// import Pdf4 from "../Downloads/pdfs/ICICC_Brochure.pdf";
// import Pdf5 from "../Downloads/pdfs/sponsorship_Proposal.pdf";
AOS.init();

function IndInvitedSpeakers() {
  const speakers = [
  {
    name: "Thilakavathi Sankaran",
    designation: "Data Analytics Professional, The Guitar Center Company, Los Angeles, United States",
    image: "./thila.jpg",
  },
  {
    name: "Prateek Sharma",
    designation: "Senior Software Engineer, Nordstrom, Los Angeles, CA, US",
    image: "./prateek.jpg",
  },
  {
    name: "Rajesh Sura",
    designation: "Head of Data Engineering and Analytics, Amazon, USA",
    image: "./rajesh.jpg",
  },
  {
    name: "Venkatraman Viswanathan",
    designation: "Director - Novalink Solutions LLC, Duluth, Georgia, United States",
    image: "./venkat.jpg",
  },
  {
    name: "Bala Krishna Rao Guntupalli",
    designation: "Technical Product Owner, Elevance Health, US",
    image: "./bala.jpg",
  },
  {
    name: "Himanshu Shah",
    designation: "Vice President Data Architecture, WorldPay, US",
    image: "./shah.jpg",
  },
  {
    name: "Ranjith Goud Karvanga",
    designation: "Data Analysis Manager, Capital One Financial Corporation, US",
    image: "./ranjith.jpg",
  },
  {
    name: "Aakash Mor",
    designation: "Academic Board Member, University of the Arts London | Artificial Intelligence Researcher, Advancing Trustworthy and Transparent AI",
    image: "./aakash.jpg",
  },
  {
    name: "Sukumar Reddy Beereddy",
    designation: "Treasury & ERP Systems Solution Architect, USA",
    image: "./sukumar.jpg",
  },
  {
    name: "Siva Sai Krishna Suryadevara",
    designation: "Senior Software Engineer, T. Rowe Price, USA",
    image: "./siva.jpg",
    imageStyle: { objectPosition: "top" },
  },
  {
    name: "Mr. Krishna Mula",
    designation: "Principal Software Engineer, ZumeIT Inc., US",
    image: "./krishna.jpeg",
  },
  {
    name: "Gayatri Tavva",
    designation: "Senior Data Engineer at Amazon, Greater Seattle Area, Washington, US",
    image: "./gayatri.jpeg",
  },
  {
    name: "Arjun Chaudhary",
    designation: "Senior Executive, Infosys (AI/ML, Project Management, and Game Development at Disney, Fintech)",
    image: "./Arjun.jpeg",
  },
  {
    name: "Aditya Gupta",
    designation: "Software Development Engineer II, AWS | Ex-ZS, Senior Fellow AI2030, Seattle, Washington, US",
    image: "./aditya.jpg",
  },
  {
    name: "Kartheek Kalluri",
    designation: "Navy Federal Credit Union, Virginia, United States",
    image: "./Kartheek.jpeg",
  },
  {
    name: "Ravi Chandra Thota",
    designation: "REI Systems, Virginia, United States",
    image: "./ravi.jpg",
  },
  {
    name: "Rahul Modak",
    designation: "AVP, LPL Financial, US",
    image: "./rahul.jpg",
  },
  {
    name: "Shalini Sivasamy",
    designation: "Senior AI Engineer, Webster Bank, USA",
    image: "./shalini.jpg",
  },
  {
    name: "Narasimha Rao Vanaparthi",
    designation: "Assistant Vice President (AVP), State Street Financial Corp, Boston, MA, USA",
    image: "./narasimha.jpg",
  },
  {
    name: "Sarat Mahavratayajula",
    designation: "The Sherwin-Williams Company, Senior Software Engineer | Senior IEEE Member",
    image: "./sarat.jpg",
  },
  {
    name: "Harshini Gadam",
    designation: "SM IEEE, Staples Inc, Finance Manager, Massachusetts, USA",
    image: "./harshini.jpg",
  },
  {
    name: "Balaji Krishnan",
    designation: "Senior Technical Architect, Salesforce, USA",
    image: "./balaji.jpg",
  },
  {
    name: "Sunil Agarwal",
    designation: "Software Engineering Technical Lead at Cisco Systems Inc, San Jose, California, United States",
    image: "./sunil.jpg",
  },
  {
    name: "Rajesh Ediga",
    designation: "Wipro Ltd, USA",
    image: "./rajesh1.jpg",
  },
  {
    name: "Saurabh Kohli",
    designation: "BNY , Livingston, New Jersey, United States",
    image: "./saurabh.jpg",
  },
  {
    name: "Sarvesh Ganesan",
    designation: "University of Texas, US",
    image: "./sarvesh.jpg",
  },
  {
    name: "Suresh Kumar Maddala",
    designation: "University of Hyderabad, India",
    image: "./suresh.jpg",
  },
  {
    name: "Abhyudaya Gurram",
    designation: "Northwest Missouri State University, USA",
    image: "./abhyudaya.jpg"
  },
  {
    name: "",
    designation: "Software Development Manager at Amazon Web Services, Bedrock AI group, USA",
    image: "./sp.jpg"
  }
];

  return (
    <>
    <div className="conference">
      <div className="ccontainer">
        <div className="heading">
          <h1 style={{ "color": "white" }}>Invited Speakers From Industry</h1>
        </div>
        <hr />

        <div >
          {/* Left about  */}
          <div className="Labout">
            <p>
            We are pleased to invite you to join as an Invited Session Speaker at the International Conference on Artificial Intelligence and Networking (ICAIN-2025), to be held on 6th–7th October 2025 at BITS Pilani, Dubai Campus, in association with IIIT Allahabad. The conference brings together leading researchers, practitioners, and industry innovators in the fields of AI, ML, and intelligent networking systems.<br/><br/>

Your expertise in the industry would provide valuable insights to our global audience of academics and professionals. 
<br/><br/>

We look forward to your inspiring contribution.
            </p>           
            <Keynote speakers={speakers}/>

          </div>

         
        </div>
      </div>
    </div>
      <Footer />
      </>
  );
}

export default IndInvitedSpeakers;
