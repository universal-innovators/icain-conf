import ImpDate from "../../impDates/impDtext";
import "./Call_for_papers.css";
import Footer from "../../Footer/footer";
const Call_for_papers = () => {
  return (
    <>
      <div className="cfp">
        <h2 className="bold">Call For Papers</h2>
        <div className="Call_con">
          <div className="call_desc">
            <p style={{color:"black"}}>
             We are pleased to announce the upcoming "International Conference on Artificial Intelligence and Networking" (ICAIN), which will be held from         <b> 6th - 7th October 2025 </b>. ICAIN is a premier forum for researchers, professionals, and practitioners from academia and industry to exchange knowledge and share the latest advancements in the fields of computer science and information technology. We invite researchers and experts worldwide to
             submit their original research papers and participate in this prestigious event.
            </p>
            <br />
            <hr />
            <br />
            <h5>ICAIN 2025 tracks:</h5>
            <p className="bold1">
              1. Artificial Intelligence and Machine Learning
            </p>
            <ul>
              <li>
                {" "}
                <p>Deep learning algorithms</p>
              </li>
              <li>Natural language processing</li>
              <li>Pattern recognition and computer vision</li>
              <li>Intelligent systems and robotics</li>
              <li>Data Science and Analytics</li>
            </ul>
            <p className="bold1"> 2. Big data processing and management</p>
            <ul>
              <li>Data mining and knowledge discovery</li>
              <li>Predictive modelling and analysis</li>
              <li>Data visualisation and exploration</li>
              <li>Cybersecurity and Privacy</li>
            </ul>

            <p className="bold1">
              {" "}
              3. Network security and intrusion detection
            </p>
            <ul>
              <li>Cryptography and encryption techniques</li>
              <li>Environmental Monitoring</li>
              <li>Secure software development</li>
              <li> Cloud Computing and Distributed Systems</li>
              <li>Secure communication in UAVs</li>
            </ul>

            {/* 4th  */}

            <p className="bold1"> 4. Cloud infrastructure and services</p>
            <ul>
              <li>Virtualization technologies</li>
              <li>Edge and fog computing</li>
              <li>Distributed algorithms and systems</li>
              <li> Human-Computer Interaction</li>
            </ul>

            {/* 5th  */}

            <p className="bold1"> 5. User interface design and evaluation</p>
            <ul>
              <li>User experience and usability</li>
              <li>Interaction techniques and technologies</li>
              <li>Accessibility and assistive technologies</li>
              <li> Internet of Things and Sensor Networks</li>
            </ul>

            {/* 6th  */}

            <p className="bold1"> 6. IoT architectures and protocols</p>
            <ul>
              <li>Wireless sensor networks</li>
              <li>IoT data analytics and applications</li>
              <li>Security and privacy in IoT</li>
              <li> Software Engineering and Agile Development</li>
            </ul>

            {/* 7th  */}

            <p className="bold1"> 7. Software testing and quality assurance</p>
            <ul>
              <li>Agile methodologies and practices</li>
              <li>Requirements engineering</li>
              <li>Software maintenance and evolution</li>
              <li> Computer Networks and Communications</li>
            </ul>

            {/* 8th  */}

            <p className="bold1"> 8. Network protocols and architectures</p>
            <ul>
              <li>Wireless and mobile networks</li>
              <li>Network performance analysis</li>
              <li>Internet of Everything (IoE)</li>
            </ul>

            <p className="bold1"> 9. AI-Driven Innovations in Networking, Financial Technologies, and Supply Chain Optimization</p>
            <ul>
            <li>AI-driven Financial Analytics </li>
            <li>Blockchain and Cryptocurrencies in Networking</li>
            <li>Fintech Innovations and Networking</li>
            <li>Risk Management and Fraud Detection with AI</li>
            <li>Algorithmic Trading and Network Optimization</li>
            <li>AI in E-commerce Optimization and Networking</li>
            <li>Supply Chain Intelligence, Automation, and AI Integration</li>
            <li>AI-based Procurement Strategies</li>
            <li>Predictive Analytics for Demand Forecasting and Networked Systems</li>
            <li>AI-powered Logistics, Inventory Management, and Networking</li>
            </ul>
            
          </div>

          <div className="imp_dates">
            <ImpDate />
          </div>
        </div>

        <div className="cfp_info">
        <h3>Note:</h3>
          <li>
          The papers submitted to the conference will be peer-reviewed and published as proceedings by Springer (Approved). 
          </li>

          <li>
          All papers will undergo a blind peer-review process, and all accepted papers will be published in the ICAIN 2025 conference e-proceedings with an e-ISBN number. The conference organisers encourage the submission of academic and research papers that explore multidisciplinary/interdisciplinary themes, covering Management, Science, and Social Studies, through one of the following sub-themes, though submissions of other relevant topics are also welcome.
          </li>
        </div>

        <div className="callpaperEnd">
          <p>
            {" "}
            Join us at ICAIN to connect with researchers, industry experts, and
            fellow enthusiasts from around the world. Together, let's advance
            the frontiers of computer science and information technology. For
            more information, please visit the
            <a href=" https://www.icain-conf.com/"> conference website</a> .
            Should you have any inquiries, feel free to contact us at
            <span> icain.conf@gmail.com</span>
          </p><br/>
          <p className="cpaperColor">
            We look forward to your valuable contributions and your presence at
            ICAIN 2025.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Call_for_papers;
