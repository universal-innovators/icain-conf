import React from "react";
import ImpDate from "../impDates/impDtext";
import Footer from "../Footer/footer";
import "./about.css";
import "animate.css";
import logoui from "./uilogo.webp";
function AboutUniversal() {
  return (
    <>
      <div className="about">
        <div className="abcontainer animate__animated animate__backInRight">
          <div className="aboutMain">
            <h2>About Univeral Inovators</h2>
            <hr />

            <div className="abLeftRight">
              {/* left  */}
              <div className="abLeft">
              <img src={logoui}  style={{width:"50vw", height:"30vh", objectFit:"contain"}}/>
                <p>
                  Every success story begins with a vision. The Universal
                  Innovators (UI) is a private and autonomous body promoting
                  research based activities all over the world. The UI aims to
                  do non-profit collaborative research in the field of
                  engineering, applied sciences and management. We aim to be the
                  leading independent academic and professional body working in
                  collaboration with academicians, faculties, students,
                  researchers and educational institutes. This leads us to be
                  playing a creative and critical role in the society by
                  disseminating teaching and research on a global scale, the
                  cornerstones of which are good, long-term relationships, a
                  focus on real life applications necessary for the welfare of
                  the mankind, and an ability to combine quality and innovation.
                  The mission of Universal Innovators is to cultivate and carry
                  out research in high- tech methodologies. We deal in
                  conducting FDP's, workshops, seminars, and conferences. As a
                  recognized body, Universal Innovators (UI) seeks to facilitate
                  the availability of academic excellence and disseminate
                  innovative knowledge worldwide.
                </p>
              </div>

              {/* right */}
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
    </>
  );
}

export default AboutUniversal;
