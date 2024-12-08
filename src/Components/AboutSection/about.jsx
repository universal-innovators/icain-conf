import React from "react";
import ImpDate from "../impDates/impDtext";
import Footer from "../Footer/footer";
import "./about.css";
import "animate.css";
import clg from "../ConferenceVenue/unnamed.jpg";
function About() {
  return (
    <div>
      <div className="about">
        <div className="abcontainer animate__animated animate__backInRight">
          <div className="abHeadTop ">
            <h1>About University of Stirling</h1>
          </div>
          <hr />

          {/* <div className="aboutMain">
            <h2>Guru Tegh Bahadur Institute of Technology (GTBIT) (GGSIPU)</h2>
            <hr />

            <div className="abLeftRight">
              <div className="abLeft">
                <p>
                  The high standards of excellence give GTBIT the phenomenal and
                  undeniable edge we are recognized for. And these standards are
                  endlessly pushed beyond the horizon. This lays down the
                  foundation of our biggest asset: Unrest. At GTBIT, we are
                  never content. The inverse correlation between our
                  satisfaction and our progress is an acknowledged and appointed
                  theory at GTBIT. This is the GTBIT difference. What sets GTBIT
                  apart from other colleges is our recognition that every
                  student is different. At GTBIT, we strive to identify and
                  maintain that 'difference'. We constantly endeavor to create
                  opportunities for skill development in different areas of
                  interest and to cater to the diverse needs of the students.
                  The fact that GTBIT doesn't believe in a one-size-fits-all
                  policy is evident in its placement process, where companies
                  from as many as fifteen sectors, including consulting,
                  insurance, knowledge services, real estate, media, investment
                  banking, PR, IT, shipping, and financial services recruited
                  students. The curriculum and the college atmosphere promote
                  inquisition, innovation, leadership, and team spirit. Apart
                  from possessing a clear understanding of the fundamentals of
                  management as well as a considerable degree of corporate
                  exposure, our students are resourceful, versatile, and
                  enthusiastic. It is this marked difference that has helped the
                  college set new benchmarks with every placement season.
                </p>
              </div>

              <div className="abRight">
                <ImpDate />
              </div>
            </div>
          </div> */}
          <div className="aboutMain">
            {/* <h2>University of Stirling</h2> */}
            <hr />

            <div className="abLeftRight">
              <div className="abLeft">
                <img src={clg} style={{ "width": "100%", height: "50vh", objectFit: "contain" }} />
                <br />
                <br />
                <p>
                  The University of Stirling, RAK Campus is a global university with a reputation for high-quality teaching and research. We help our graduates, staff and students to shape the world. We’re an agent for change, connecting people, innovating and transforming the lives of our students, staff and the global communities we serve.
                </p><br />
                <h3 style={{"color":"#006938","fontFamily":"Calibri"}}>Why Stirling?</h3>
                <p>Highly rated courses, high rate of employability

                  We’re proud of the way we prepare our students with life-long career and employability skills. It’s why 91% of all undergraduates and 95% of our postgraduates were in employment or further study fifteen months after graduation (Graduate Outcomes Survey 2021, HESA)

                  Our students love the way we teach. As part of the QS Stars University Ratings 2022, the University of Stirling was awarded 5 stars in the areas of teaching and employability. Students gave us a 96% satisfaction rate for lecturer expertise (International Student Barometer 2018).

                  The University of Stirling regularly performs well in a wide array of global higher education surveys. Here are some of the accolades we’ve received:
                  <ul style={{ listStyleType: "disc" }}>

                    <li> One of world's top 500 universities (Times Higher Education World University Rankings 2020)</li>
                    <li> Top 60 in the world in the Times Higher Education Golden Age University Rankings 2020</li>
                    <li> 79.6% student satisfaction (National Student Survey 2021)</li>
                    <li> The University of Stirling ranked 28th in the UK in the The Guardian University Guide 2021</li>
                  </ul>
                </p>
              </div>

              <div className="abRight">
                <ImpDate />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="abFooter">
        <Footer />
      </div>
    </div>
  );
}

export default About;
