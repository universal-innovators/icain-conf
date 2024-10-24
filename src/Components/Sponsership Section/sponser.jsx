import React from "react";
import ImpDate from "../impDates/impDtext";
import Footer from "../Footer/footer";
import SponsorImg from "./sponsor.png";
// import SponsorPdf from "./sponsor.pdf";
import "./sponser.css";
// import "./about.css"

function Sponsorships() {
  return (
    <>
      <div className="about">
        <div className="abcontainer">
          <div className="abHeadTop">
            <h1>Sponsorship</h1>
          </div>
          <hr />

          <div className="aboutMain">
            <h2>INVITATION LETTER FOR SPONSORSHIP</h2>

            <div className="abLeftRight">
              {/* left  */}
              <div className="abLeft">
                <p className="sponsorPara ">
                  <h4>Dear Technology Leader,</h4>
                  In the era of digital revolution where world is becoming
                  smaller and a lot of new technologies are being launched
                  simultaneously. The ongoing saga of the computing and
                  communication digital revolution, the new mantra - Extend and
                  Adapt, has produced ripples of excitement in the industry and
                  academia! Therefore, to make a developed India and to match
                  the speed of these above mentioned challenges joint efforts
                  from Industry and Academia are required. Academia is doing its
                  bit by organizing the international conference ICAIN-2025 and
                  bringing together worlds the best technological brains and
                  ideas under one roof. This kind of initiative require lot of
                  efforts and funding.ICAIN is organized with the objective of
                  bringing together innovative scientists, professors, research
                  scholars, students and industrial experts in the field of
                  Computing and Communication to a common forum. The primary
                  goal of the conference is to promote the exchange of
                  innovative scientific information between researchers,
                  developers, engineers, students, and practitioners. This
                  conference will try to take the research to the new level with
                  the motive of applying research into the development of
                  startups and industry-based applications. It will also bridge
                  the gap between industry/ Start-up requirements and
                  research-based activities that further will give a new
                  direction to the research happening in and around the world.
                  Another goal is to promote the transformation of fundamental
                  research into institutional and industrialized research and to
                  convert applied exploration into real time application.
                  Overall the conference will provide the researchers and
                  attendees with prospects for national and international
                  collaboration and networking among universities and
                  institutions from India and abroad for promoting research.
                  {/* ICAIN 2025 will be hosted by Guru Tegh Bahadur Institute of
                  Technology (GTBIT) (GGSIPU) , a place to pursue knowledge
                  beyond traditional boundaries. An institute initiated to
                  impart quality education to the youth while equipping them
                  with knowledge and skills which would enable them to leave
                  their individual mark in the business world. */}
                </p>

                <p className="sponsorPara">
                  The committee of professionals dedicated towards the
                  conference is striving to achieve a high quality technical
                  program with Tracks on Innovative Computing, Innovative
                  Communication Network and Security, and Internet of Things The
                  highlights of the conference are as follows:
                </p>

                <div className="sponsorImg">
                  <img src={SponsorImg} alt="" />
                </div>

                <br />
                <p className="sponsorPara">
                  As a spearheading force in the industry driving forward this
                  revolution, ICAIN provides just the right platform and
                  visibility to showcase your company, its vision and its
                  technological offerings to a wide spectrum of professionals.
                  Your participation will give an opportunity to nurture the
                  talent pool and spur a collaborative atmosphere necessary for
                  progress. Kindly see the various sponsorship packages and
                  offers and give us an opportunity to collaborate on this
                  initiative and work together for its success right from the
                  outset
                </p>

                <br />
                <div id="sponsorPara">
                  <h3>Yours Sincerely,</h3>
                  <h3>General Chair</h3>
                  {/* <a href={SponsorPdf}>
                    <u>Sponsorship</u>{" "}
                  </a> */}
                </div>
              </div>

              {/* right */}
              <div>
                <ImpDate />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="abFooter">
        <Footer />
      </div>
    </>
  );
}

export default Sponsorships;
