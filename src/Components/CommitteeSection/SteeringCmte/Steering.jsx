import "./Steering.css";
import SCcards from "./SCcards/SCcards";
import ImpDate from "../../impDates/impDtext";
import Footer from "../../Footer/footer";
function StCommittee() {
  return (
    <>
      <div className="steering">
        <h4 className="heading">Steering Committee</h4>
        <hr />
        <div className="stCommittee">
          <div className="stScards">
            <SCcards />
          </div>

          <div className="stImpdate">
            <ImpDate />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default StCommittee;
