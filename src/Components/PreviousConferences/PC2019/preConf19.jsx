import Pcyear from "../pcYear";
import PcMainBody from "../pcMainbody";
import PcLinks from "../pcLinks";
import Footer from "../../Footer/footer";
import ImpDate from "../../impDates/impDates";
import PcImages from "../pcImages.jsx";
import "../PCcmnCss/PCcss.css";
// images
import Img2 from "./PcImages19/icicc2.jpeg";
import Img1 from "./PcImages19/icicc1.jpeg";
import Img3 from "./PcImages19/icicc3.jpeg";
import Img4 from "./PcImages19/icicc4.jpeg";
import Img5 from "./PcImages19/icicc5.jpeg";
import Img6 from "./PcImages19/icicc6.jpeg";
import Img7 from "./PcImages19/icicc7.jpeg";
import Img8 from "./PcImages19/icicc8.jpeg";

function PreConf19() {
  let Mybody =
    "Second version of International Conference in innovative Computing and Communication (ICICC-2019) was organized at VSB-Technical University of Ostrava, Czech Republic, Europe on 21-22nd March 2019 with a pre-conference symposium at New Delhi, India on 16th March 2019. ICICC-2019 received 552 papers from approximately 2208 authors and a total of 125 papers were accepted with an acceptance ratio of 22%. All accepted papers were published in Springer's Advances in Intelligent Systems and Computing, an scopus indexed series. A total of 524 participants attended the conference and pre-conference symposium including authors, keynotes, delegates, academicians, and industry experts. ICICC-2019 received papers from 25 countries.";

  return (
    <>
      <div className="pcYear">
        <Pcyear year="2019" />
      </div>

      <div className="preConf">
        <div className="preConfMain">
          <PcMainBody myBody={Mybody} />
          <PcLinks
            year="2019"
            link1="https://link.springer.com/book/10.1007/978-981-15-1286-5"
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

export default PreConf19;
