import React from "react";
// import nitImage from "./Himages/nitpatna.jpeg";
// import delhiImgae from "./Himages/unidelhi.png";
import sapien from "./Himages/sapientia.png";
// import logo from "./Himages/logosdcn.png";
import gtbit from "./Himages/gtbit.jpg";
import springer from "./Himages/springeer.png";
import portagul from "./Himages/portagal.jpg";
import sdcn from "./Himages/sdcn.png"
import vste from "./Himages/vste.jpg"
import uos from "./Himages/logo-2.svg"
import uiedu from "./Himages/ui-edu.webp"
import uiinov from "./Himages/ui-inov.jpeg"
import bits from "./Himages/bits.jpg"

import "./header.css";

function HeaderMain() {
  return (
    <div className="headerMain">
      <div className="hcontainer">
        {/* images  */}

        <div className="headerLogo">
          <img src={bits} style={{"width":"200px"}}/> 
          {/* <img src={uiedu} className="logoImg1"/>   */}
          

          
        </div>
        {/* <div className="headerLogo">
          <img src={vste} className="logoImg" />
          <img src={require("../Footer/Himages/ksmv.png")} className="logoImg" style={{ "margin": "0 auto", "width": "8rem", "height": "auto" }} />

        </div> */}


      </div>
      {/* main top part  */}
      <div className="hTopPart">
        <div className="htop1">
          <p style={{ "color": "green" }}>
            International Conference on Artificial Intelligence and Networking <br />(ICAIN-2025)
          </p>

        </div>
        <div className="htop2">
          <p className="hhead">
            ORGANISED BY :{" "}
            {/* <span className="hblue">
             
              </span> */}
            <br />
            <span style={{'color':'#006938',fontSize:'1.25rem'}}>BITS Pilani Dubai Campus, UAE</span>
            <br/><span > in association with</span>{" "}
            <div className="headerLogo">
              {/* <img src={gtbit} className="logoImg"/>    */}
              {/* <img src={uos} className="logoImg1" /> */}
            </div>
            <span style={{'color':'#006938',fontSize:'1.25rem'}}>
              Indian Institute of Information Technology, Allahabad

            </span>
            {/* and <br /><span className="hblue">Institute of Technology and Business in České Budějovice, Czech Republic</span><br /> &
            <span className="hblue"> Keshav Mahavidyalaya, Delhi University</span> */}
          </p>
          <p className="hspringer">Springer LNNS (Indexed in DBLP EI Compendex, INSPEC, SCImago, SCOPUS , WTI AG, zbMATH)</p>
          <p style={{ "color": "green" }}>6th - 7th October 2025<br /><span ></span></p>
        </div>
      </div>


      <div className="headerLogo" > 
              <img src={gtbit} className="logoImg"/>   

      {/* <img src={uiedu} className="logoImg1"/>   */}
              {/* <img src={springer} className="logoImg" style={{"margin":"0 auto","width":"8rem","height":"auto"}}/>    */}

      </div>


    </div>

  );
}

export default HeaderMain;
