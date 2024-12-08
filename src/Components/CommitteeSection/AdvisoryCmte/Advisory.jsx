import "./Advisory.css";
import AdCards from "./AdCards/Adcards.jsx";
import Footer from "../../Footer/footer";
import ImpDate from "../../impDates/impDtext";
function AdvisoryCmte() {
  return (
    <>
      <div className="AdvisoryCmte">
        <h2>Advisory Committee</h2>
        <hr />
        <div className="AdCmte">
          {/* left  */}
          <div className="AdcmteCards">
            <AdCards />
          </div>

          {/* right  */}
          {/* <div className="AdImpDate">
            <ImpDate />
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdvisoryCmte;
