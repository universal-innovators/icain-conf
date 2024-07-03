import Pcyear from "../pcYear";
import PcMainBody from "../pcMainbody";
import PcLinks from "../pcLinks";
import Footer from "../../Footer/footer";
import ImpDate from "../../impDates/impDates";
import PcImages from "../pcImages.jsx";
import "../PCcmnCss/PCcss.css";

// images
import Img1 from "./PcImages20/icicc1.jpeg";
import Img2 from "./PcImages20/icicc2.jpeg";
import Img3 from "./PcImages20/icicc3.jpeg";
import Img4 from "./PcImages20/icicc4.jpeg";
import Img5 from "./PcImages20/icicc5.jpeg";
import Img6 from "./PcImages20/icicc6.jpeg";
import Img7 from "./PcImages20/icicc7.jpeg";
import Img8 from "./PcImages20/icicc8.jpeg";

function PreConf20() {
  let Mybody =
    "Third version of International Conference in innovative Computing and Communication (ICICC-2020) was organized at Guru Tegh Bahadur Institute of Technology (GTBIT) in association with National institute of Technology Patna and University of Valladolid, Spain on 21-23 rd February 2020 at New Delhi, India. ICICC-2020 received 803 papers from approximately 3212 authors and a total of 196 papers were accepted with an acceptance ratio of 24%. All accepted papers were published in Springer's Advances in Intelligent Systems and Computing, an scopus indexed series. A total of 544 participants attended the conference including authors, keynotes, delegates, academicians, and industry experts. ICICC-2020 received papers from 29 countries.";

  return (
    <>
      <div className="pcYear">
        <Pcyear year="2020" />
      </div>

      <div className="preConf">
        <div className="preConfMain">
          <PcMainBody myBody={Mybody} />
          <PcLinks
            year="2020"
            link1="https://link.springer.com/book/10.1007/978-981-15-5113-0"
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

export default PreConf20;
