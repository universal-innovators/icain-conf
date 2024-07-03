import Pcyear from "../pcYear";
import PcMainBody from "../pcMainbody";
import PcLinks from "../pcLinks";
import Footer from "../../Footer/footer";
import ImpDate from "../../impDates/impDates";
import "../PCcmnCss/PCcss.css";
function PreConf22() {
  let Mybody =
    "Fifth version of International Conference in innovative Computing and Communication (ICICC-2022) was organized at Guru Tegh Bahadur Institute of Technology (GTBIT) in association with National Institute of Technology Patna, University of Valladolid Spain and Korea Institute of Digital Convergence South Korea on 19-20 February 2022 at New Delhi, India. ICICC-2022 received 864 papers from approximately 3600 authors and a total of 200 papers were accepted with an acceptance ratio of 23%. All accepted papers were published in Springer's Lecture Notes on Networks and Systems, an scopus indexed series. A total of 550 participants attended the conference including authors, keynotes, delegates, academicians, and industry experts. ICICC-2022 received papers from 30 countries. Due to unexpected COVID-19, ICICC-2022 was organized in hybrid mode.";

  return (
    <>
      <div className="pcYear">
        <Pcyear year="2022" />
      </div>

      <div className="preConf">
        <div className="preConfMain">
          <PcMainBody myBody={Mybody} />
          <PcLinks
            year="2022"
            link1="https://link.springer.com/book/10.1007/978-981-19-2821-5"
          />
        </div>
        <ImpDate />
      </div>

      <Footer />
    </>
  );
}

export default PreConf22;
