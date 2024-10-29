import Pcyear from "../pcYear";
import PcMainBody from "../pcMainbody";
import PcLinks from "../pcLinks";
import Footer from "../../Footer/footer";
import ImpDate from "../../impDates/impDates";
import PcImages from "../pcImages.jsx";
import "../PCcmnCss/PCcss.css";

// images
import Img1 from "./PcImages24/icain1.jpeg";
import Img2 from "./PcImages24/icain2.jpeg";
import Img3 from "./PcImages24/icain3.jpeg";
import Img4 from "./PcImages24/icain4.jpeg";
import Img5 from "./PcImages24/icain5.jpeg";
import Img6 from "./PcImages24/icain6.jpeg";
import Img7 from "./PcImages24/icain7.jpeg";
import Img8 from "./PcImages24/icain8.jpeg";
import Img9 from "./PcImages24/icain9.jpeg";
import Img10 from "./PcImages24/icain10.jpeg";
import Img11 from "./PcImages24/icain11.jpeg";
import Img12 from "./PcImages24/icain12.jpeg";
import Img13 from "./PcImages24/icain13.jpeg";
import Img14 from "./PcImages24/icain14.jpeg";
import Img15 from "./PcImages24/icain15.jpeg";
import Img16 from "./PcImages24/icain16.jpeg";

function PreConf18() {
    const images =[Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,Img11,Img12,Img13,Img14,Img15,Img16]
  let Mybody =
    "The International Conference on Artificial Intelligence & Networking (ICAIN-2024) was held on 24th-25th September 2024 at Guru Tegh Bahadur Institute of Technology, New Delhi, in collaboration with Portalegre Polytechnic University, Portugal, Institute of Technology and Business in České Budějovice, Czech Republic, and Keshav Mahavidyalaya, Delhi University. The conference received 650 paper submissions from over 1,500 authors across 15 countries, with 120 papers accepted at an 18% acceptance rate. All accepted papers were published in Springer’s Lecture Notes on Networks and Systems, a Scopus-indexed series. With 250+ participants attending both online and offline, including authors, keynote speakers, delegates, academicians, and industry experts, ICAIN-2024 successfully showcased research and developments in AI and networking through a hybrid format.";

  return (
    <>
      <div className="pcYear">
        <Pcyear year="2024" />
      </div>

      <div className="preConf">
        <div className="preConfMain">
          <PcMainBody myBody={Mybody} />
          {/* <PcLinks
            year="2018"
            link1="https://link.springer.com/book/10.1007/978-981-13-2324-9"
          /> */}
        </div>
        <ImpDate />
      </div>

      <div className="imagesPc">
        <PcImages images={images}/>
      </div>
      <Footer />
    </>
  );
}

export default PreConf18;
