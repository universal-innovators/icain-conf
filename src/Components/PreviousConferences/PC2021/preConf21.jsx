import Pcyear from "../pcYear";
import PcMainBody from "../pcMainbody";
import PcLinks from "../pcLinks";
import Footer from "../../Footer/footer";
import ImpDate from "../../impDates/impDates";
import PcImages from "../pcImages.jsx";
import "../PCcmnCss/PCcss.css";

// images
import Img1 from "./PcImages21/icicc1.jpeg";
import Img2 from "./PcImages21/icicc2.jpeg";
import Img3 from "./PcImages21/icicc3.jpeg";
import Img4 from "./PcImages21/icicc4.jpeg";
import Img5 from "./PcImages21/icicc5.jpeg";
import Img6 from "./PcImages21/icicc6.jpeg";
import Img7 from "./PcImages21/icicc7.jpeg";
import Img8 from "./PcImages21/icicc8.jpeg";

function PreConf21() {
  let Mybody =
    "Fourth version of International Conference in innovative Computing and Communication (ICICC-2021) was organized at Guru Tegh Bahadur Institute of Technology (GTBIT) in association with National institute of Technology Patna and University of Valladolid, Spain on 20-21 February 2021 at New Delhi, India. ICICC-2021 received 900 papers from approximately 3600 authors and a total of 210 papers were accepted with an acceptance ratio of 23%. All accepted papers were published in Springer’s Advances in Intelligent Systems and Computing, an scopus indexed series. A total of 590 participants attended the conference including authors, keynotes, delegates, academicians, and industry experts. ICICC-2021 received papers from 28 countries. Due to unexpected COVID-19, ICICC-2021 was organized in virtual mode.";

  return (
    <>
      <div className="pcYear">
        <Pcyear year="2021" />
      </div>

      <div className="preConf">
        <div className="preConfMain">
          <PcMainBody myBody={Mybody} />
          <PcLinks
            year="2021"
            link1="https://link.springer.com/book/10.1007/978-981-16-2594-7"
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

export default PreConf21;
