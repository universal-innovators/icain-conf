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
  const speakers2024 = [
    {
      name: "Ramachandra Handaragal",
      image: "./ram.jpg",
      designation: "Senior Manager, Peloton Consulting Group, USA",
    },
    {
      name: "Ankush Gupta",
      image: "./ankush.jpg",
      designation: "Senior Solution Architect, HCLTech, USA"
    }
  ];
  const speakers2025 = [
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
    name: "Janakiram Meka",
    designation: "Independent Researcher, USA",
    image: "./jana.jpg"
  },
  {
    name: "Bhanu Teja Reddy Maryala",
    designation: "Southern Illinois University, US",
    image: "./bhanu.jpg"
  },{
    name: "Manevannan Ramasamy",
    designation: "Solutions Architect, Cisco Systems, Inc., US",
    image: "./mane.jpg"
  },
  {
    name: "Srinivasa Rao Gunda",
    designation: "Independent Speaker, US",
    image: "./srini.jpg"
  },
  {
    name: "Kishore Epuri",
    designation: "OSMANIA UNIVERSITY, US",
    image: "./kishore.jpg"
  },
  {
    name: "Rahul Kiran Talaseela",
    designation: "Senior Application Developer at Source America, US",
    image: "./rahul_kiran.jpg"
  },
  {
    name: "Surendra Annanki",
    designation: "Numeric Technologies Inc, USA",
    image: "./surendra.jpg"
  },
  {
    name: "Amaan Javed",
    designation: "Application Engineer, Texas McCombs, USA",
    image: "./amaan.jpg"
  },
  {
    name: "Dr. Kalyan Vijay Kumar Pasumarthi",
    designation: "Indian Institute of Technology - Madras",
    image: "./kalyan.jpg"
  },
  {
    name: "Raghavendra Reddy Kapu",
    designation: "Quality Performance Engineer at Akshaya Inc, USA",
    image: "./raghavendra.jpg"
  },
  {
    name: "Venkata Krishna Reddy Kovvuri",
    designation: "Software Developer IV - KEEN INFO TEK INC., USA",
    image: "./venkata.jpg"
  },
  {
    name: "Dineshreddy Singireddy",
    designation: "Product Manager - CGI, USA",
    image: "./dinesh.jpg"
  },
  {
    name: "Tejendra Patel",
    designation: "California State University, Los Angeles, USA",
    image: "./tejendra.jpg"
  },
  {
    name: "Suresh Padala",
    designation: "Campbellsville University, Kentucky, USA",
    image: "./suresh1.jpg"
  },
  {
    name: "Premreddy",
    designation: "Northwestern Polytechnic University( alias San Francisco Bay University), USA",
    image: "./prem.jpg"
  },
  {
    name: "Dr. Sanjay Nakharu Prasad Kumar",
    designation: "Senior Member IEEE",
    image: "./sanjay.jpg"
  },
  {
    name: "Sagar Kukkamudi",
    designation: "Deloitte LLP, USA",
    image: "./sagar.jpg"
  },
  {
    name: "Venkateswarlu Jayakumar",
    designation: "Anna University, Chennai, India",
    image: "./venkatesh.jpg"
  },
  {
    name: "Kasee Palaniappan",
    designation: "Ariba Inc (SAP America), USA",
    image: "./kasee.jpg"
  },
  {
    name: "Varghese Paul",
    designation: "Mahatma Gandhi University, Kerala, India",
    image: "./varghese.jpg"
  },
  {
    name: "Mr. Vinay Kumar Deeti",
    designation: "Independent Researcher, USA",
    image: "./vinay.jpg"
  },
  {
    name: "Anil Putapu",
    designation: "Senior Java Full Stack Developer, US",
    image: "./anil.jpg"
  },
  {
    name: "Praveen Kodakandla",
    designation: "Senior Data Engineer, USA",
    image: "./praveen.jpg",
  }, 
  {
    name: "Jigar Babaria",
    designation: "Senior Network Engineer, Amazon, USA",
    image: "./jigar.jpg",
  },
   
  
];
const speakers2026 = [
  
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
            <Keynote
                            speakersByYear={{
                              2024: speakers2024,
                              2025: speakers2025
                              // 2026: speakers2026
                            }}
                          />

          </div>

         
        </div>
      </div>
    </div>
      <Footer />
      </>
  );
}

export default IndInvitedSpeakers;
