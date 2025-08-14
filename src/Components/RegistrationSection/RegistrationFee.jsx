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
            <h2>Early Registration (before 15th August 2025)</h2>
            <h2>Late Registration (after 15th August 2025)</h2>
          </div>

         
          {/* tr4  */}
          <div className="reFeetr">
            <p>Research Scholar/Student (International)</p>
            <p>USD 300</p>
            <p>USD 350</p>
          </div>

          {/* tr5  */}
          <div className="reFeetr">
            <p>Academician (International)</p>
            <p>USD 350</p>
            <p>USD 400</p>
          </div>

          {/* tr6  */}
          <div className="reFeetr">
            <p>Industrial Participant (International)</p>
            <p>USD 400</p>
            <p>USD 450</p>
          </div>
          <h4 style={{color:'black',textAlign:'center'}}>Note: 40% Discount / Custom Fees Registration (Amount based on category of participation or the information conveyed) for online mode registrations </h4>
        </div>
    <br/><br/>
        <h3>Registration Fee For ICAIN 2025 Conference Attendee</h3>
        
        <div className="reFeeTable">
          {/* table head  */}
          <div className="reFeetd">
            <h2>Category</h2>
            <h2>Early Registration (before 15th August 2025)</h2>
            <h2>Late Registration (after 15th August 2025)</h2>
          </div>

         
          {/* tr4  */}
          <div className="reFeetr">
            <p>Research Student Attendee</p>
            <p>USD 150</p>
            <p>USD 200</p>
          </div>

          {/* tr5  */}
          <div className="reFeetr">
            <p>Standard Attendee</p>
            <p>USD 200</p>
            <p>USD 250</p>
          </div>
          <h4 style={{color:'black',textAlign:'center'}}>Note: Attendee is participant of the conference attending the conference without any paper registration </h4>
         
        </div>
        
      </div>
    </>
  );
}

export default RegFee;

