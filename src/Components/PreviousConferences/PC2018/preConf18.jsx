import Pcyear from "../pcYear";
import PcMainBody from "../pcMainbody";
import PcLinks from "../pcLinks";
import Footer from "../../Footer/footer";
import ImpDate from "../../impDates/impDates";
import PcImages from "../pcImages.jsx";
import "../PCcmnCss/PCcss.css";

// images
import Img1 from "./PcImages18/icicc1.png";
import Img2 from "./PcImages18/icicc2.png";
import Img3 from "./PcImages18/icicc3.png";
import Img4 from "./PcImages18/icicc4.png";
import Img5 from "./PcImages18/icicc5.png";
import Img6 from "./PcImages18/icicc6.jpeg";
import Img7 from "./PcImages18/icicc7.jpeg";
import Img8 from "./PcImages18/icicc8.jpeg";

function PreConf18() {
  let Mybody =
    "First SmartDataCom: International Conference on Smart Data-Processing , Communication and Networking SDCN was organized at Guru Tegh Bahadur Institute of Technology (GTBIT), New Delhi, India on 16th-17th September. SDCN received 468 papers from approximately 1872 authors and a total of 92 papers were accepted with an acceptance ratio of 19%. All accepted papers were published in Springer’s Lecture Notes on Networks and Systems, an scopus indexed series. A total of 462 participants attended the conference including authors, keynotes, delegates, academicians, and industry experts. ICICC-2018 received papers from 20 countries and got lot of recommendations from the science community for the organization and the quality of papers.";

  return (
    <>
      <div className="pcYear">
        <Pcyear year="2018" />
      </div>

      <div className="preConf">
        <div className="preConfMain">
          <PcMainBody myBody={Mybody} />
          <PcLinks
            year="2018"
            link1="https://link.springer.com/book/10.1007/978-981-13-2324-9"
          />
        </div>
        <ImpDate />
      </div>

      <div className="imagesPc">
        <PcImages
          img1={Img1}
          img2={Img2}
          img3={Img3}
          img4={Img4}
          img5={Img5}
          img6={Img6}
          img7={Img7}
          img8={Img8}
        />
      </div>
      <Footer />
    </>
  );
}

export default PreConf18;
