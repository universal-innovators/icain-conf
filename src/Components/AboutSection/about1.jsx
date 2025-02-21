import React from "react";
import ImpDate from "../impDates/impDtext";
import Footer from "../Footer/footer";
import "./about1.css";
import "animate.css";
import logoui from "./uilogo.webp";
function AboutUniversal() {
  return (
    <>
      <div className="about">
        <div className="abcontainer animate__animated animate__backInRight">
          <div className="aboutMain">
            <div className="">

              <h2>About Univeral Inovators</h2>
              <hr />
              <div className="underlineHeading"></div>
            </div>

            <div className="abLeftRight">
              {/* left  */}
              <div className="abLeft">
                <img src={logoui} style={{ width: "50vw", height: "30vh", objectFit: "contain" }} />
                <p>
                Every success story begins with a vision. The Universal Innovators (UI) is a private and autonomous body promoting research-based activities worldwide. UI aims to conduct non-profit collaborative research in the fields of engineering, applied sciences, and management. We strive to be the leading independent academic and professional body, working in collaboration with academics, faculty, students, researchers, and educational institutions.<br/>
                This positions us to play a creative and critical role in society by disseminating teaching and research on a global scale. The cornerstones of our approach are strong, long-term relationships, a focus on real-life applications essential for the welfare of humankind, and the ability to combine quality with innovation.<br/>
                The mission of Universal Innovators is to cultivate and carry out research using high-tech methodologies. We specialise in conducting FDPs, workshops, seminars, and conferences. As a recognised body, Universal Innovators (UI) seeks to facilitate the availability of academic excellence and disseminate innovative knowledge worldwide.
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
