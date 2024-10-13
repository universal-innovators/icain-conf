import "./RegistrationFee.css";

function RegFee() {
  return (
    <>
      <div className="reFeeMain">
        <hr />
        <h3>Registration Fee For ICAIN 2025</h3>

        <div className="reFeeTable">
          {/* table head  */}
          <div className="reFeetd">
            <h2>Category</h2>
            <h2>Early Registration (before 20th August, 2025)</h2>
            <h2>Late Registration (after 20th August, 2025)</h2>
          </div>

          {/* tr1  */}
          <div className="reFeetr">
            <p>Research Scholar/Student (SAARC Nations)</p>
            <p>INR 10000</p>
            <p>INR 11000</p>
          </div>

          {/* tr2 */}
          <div className="reFeetr">
            <p>Academician (SAARC Nations)</p>
            <p>INR 11000</p>
            <p>INR 12000</p>
          </div>

          {/* tr3  */}
          <div className="reFeetr">
            <p>Industrial Participants (SAARC Nations)</p>
            <p>INR 12000</p>
            <p>INR 13000</p>
          </div>

          {/* tr4  */}
          <div className="reFeetr">
            <p>Research Scholar/Student (International)</p>
            <p>USD 200</p>
            <p>USD 250</p>
          </div>

          {/* tr5  */}
          <div className="reFeetr">
            <p>Academician (International)</p>
            <p>USD 250</p>
            <p>USD 300</p>
          </div>

          {/* tr6  */}
          <div className="reFeetr">
            <p>Industrial Participant (International)</p>
            <p>USD 300</p>
            <p>USD 350</p>
          </div>
        </div>
        <div className="reSpDiscount">
          <h1>
            Special Discount of 10% for{" "}
            <span className="greet">Universal Inovator (UI) Member</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default RegFee;
