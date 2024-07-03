import "./Technical.css";
import TecCards from "./TecCards/TecCards";
import ImpDate from "../../impDates/impDtext";
import Footer from "../../Footer/footer";
function TechnicalCmte() {
  return (
    <>
      <div className="technicalMain">
        <h2>Technical Committee</h2>
        <hr />
        <div className="technical">
          <div className="tecCards">
            <TecCards />
          </div>
          <div className="tecImpDate">
            <ImpDate />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TechnicalCmte;
