import Pcyear from "../pcYear";
import PcMainBody from "../pcMainbody";
import PcLinks from "../pcLinks";
import Footer from "../../Footer/footer";
import ImpDate from "../../impDates/impDates";
import PcImages from "../pcImages.jsx";
import "../PCcmnCss/PCcss.css";

// images
import Img1 from "./PcImages25/1.jpg";
import Img2 from "./PcImages25/2.jpg";
import Img3 from "./PcImages25/3.jpg";
import Img4 from "./PcImages25/4.jpg";
import Img5 from "./PcImages25/5.jpg";
import Img6 from "./PcImages25/6.jpg";
import Img7 from "./PcImages25/7.jpg";
import Img8 from "./PcImages25/8.jpg";
import Img9 from "./PcImages25/9.jpg";
import Img10 from "./PcImages25/10.jpg";
import Img11 from "./PcImages25/11.jpg";
import Img12 from "./PcImages25/12.jpg";
import Img13 from "./PcImages25/13.jpg";
import Img14 from "./PcImages25/14.jpg";
import Img15 from "./PcImages25/15.jpg";
import Img16 from "./PcImages25/16.jpg";

function PreConf25() {
    const images =[Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,Img11,Img12,Img13,Img14,Img15,Img16]
  let Mybody =
    "The <b>Second International Conference on Artificial Intelligence and Networking (ICAIN-2025)</b> was proudly organized by BITS Pilani, Dubai Campus in association with the <b>Indian Institute of Information Technology, Allahabad & Universal Inovator</b> on <b>06th -07th</b> October 2025. ICAIN-2025 received over <b>1450 paper submissions</b> from researchers, academicians, and industry professionals across the globe. After a rigorous peer-review process, <b>20% of the submitted papers were accepted and registered for presentation</b>.<br/><br/>The conference attracted submissions from more than 30 countries, reflecting its truly international scope and growing recognition within the global research community. ICAIN-2025 brought together distinguished speakers, authors, and delegates to discuss cutting-edge innovations in artificial intelligence, networking technologies, and their multidisciplinary applications, fostering collaboration and knowledge exchange among academia and industry.<br/><br/><b>YOUTUBE LINK OF ICAIN 2025:</b> <a href='https://youtu.be/7ompLI9gm7s'>https://youtu.be/7ompLI9gm7s</a>";
    
    let links=[];

  return (
    <>
      <div className="pcYear">
        <Pcyear year="2025" />
      </div>

      <div className="preConf">
        <div className="preConfMain">
          <PcMainBody myBody={Mybody} />
          <PcLinks
            year="2025" links={links} /> 
        </div>
      </div>

      <div className="imagesPc">
        <PcImages images={images}/>
      </div>
      <Footer />
    </>
  );
}

export default PreConf25;
