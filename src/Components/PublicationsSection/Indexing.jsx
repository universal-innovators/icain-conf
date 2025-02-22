import React from "react";
import "./Publication.css";
import Scopus from "./PuImages/Scopus.png";
import Inspec from "./PuImages/Iet.jfif";
import Frankfurt from "./PuImages/Frankfurt.jfif";
import Eg from "./PuImages/egg.png";
import Scimago from "./PuImages/ScImago.png";
import Zbmath from "./PuImages/zbMath.png";
import GoogleI from "./PuImages/google.png";
import Isi from "./PuImages/IsiProceddings.png";
import Springer from "./PuImages/springer.png";
function Indexing() {
  return (
    <div className="index">
      
      <b style={{fontSize:'18px',color:"white"}}>Abstracted and indexed in (Springer Series , Proposal Applied)
</b>
      <div className="IndexImages">
        {/* 1st  */}
        <div className="indexImg">
          {/* <img src={Scopus} alt="Scopus" /> */}
          DBLP

        </div>

        {/* 2nd  */}
        <div className="indexImg">
        EI Compendex

        </div>

        {/* 3rd  */}
        <div className="indexImg">
        INSPEC

        </div>

        {/* 4th  */}
        <div className="indexImg">
        
        zbMATH
        </div>

        {/* 5th  */}
        <div className="indexImg">
        SCImago

        </div>

        {/* 6th  */}
        <div className="indexImg">
        SCOPUS

        </div>

        {/* 7th  */}
        <div className="indexImg">
        WTI Frankfurt eG
        
        </div>

        {/* 8th  */}
        <div className="indexImg">
        
        Japanese Science and Technology Agency (JST)
        </div>

        {/* 9th  */}
        {/* <div className="indexImg">
          <img src={Springer} alt="Springer" />
        </div> */}
      </div>
    </div>
  );
}

export default Indexing;
