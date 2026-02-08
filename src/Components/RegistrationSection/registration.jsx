import "./registration.css";
import Footer from "../Footer/footer";
import PayPal from "./ResPayPal";
import RazorPay from "./ResRazorPay";
import RegistrationFee from "./RegistrationFee";
import UPI from "./UPI.jsx";
import Stripe from "./Stripe";
import StripePay from "./StripePay";

function Registrations() {
  return (
    <>
      <div className="registration  ">
        <div className="reContainer">
          <h1 className="reHeading ">Registration</h1>
          <hr className="reLine" />
          {/* Registration and all  */}
          <div className="RegistrationMain">
            {/* Registrations Details  */}
            <div className="reDetail">
              <div className="rePara">
                <p style={{"color":"black"}}>
                Once your paper is accepted, the registration process will begin.
            
                </p>

                <p>
                
                  <p style={{"color":"black"}}>
                  It is mandatory for at least one author of an accepted paper to register in order for the paper to be included in the proceedings and featured in the Technical Program.
                  </p>
                </p>
              </div>
              
                <h4 style={{'color':'black'}}>Author/Co-Author Registration Fee Includes: </h4>
                <div>
                  <ul style={{'color':'black',listStyle:'disc',paddingLeft:'20px'}}>
                    <li>Welcome reception</li>
                    <li>Conference Badge</li>
                    <li>Conference Kit with Proceeding</li>
                    <li>Participation in the technical program</li>
                    <li>Coffee breaks</li>
                    <li>Lunch</li>
                    <li>Banquet</li>
                  </ul>
                </div><br/>
                <p style={{color:"black"}}><b>Note:</b><br/>A <b>40% Discount </b>is available for online mode registrations. Custom fees may apply
                depending on the category of participation or specific details provided.</p>
              <div className="reAuthors  ">
                <div>
                
                </div>
              </div>
            </div>
            
            {/* Registration Account Details  */}
            <div className="reAccountMain  ">
            <div className="Razor">
                  {/* <Stripe /> */}
                  <StripePay/>
            </div>
            <div className="Razor">
                  <RazorPay />
            </div>
            <div className="Paypal">
                  <PayPal />
              </div>
              <div className="Paypal">
                  <UPI />
                </div>
              {/* <h1 className="reAccountHeading">Registration Account Details</h1>

              <div className="reAccountTransfer">
                <div className="reAccount">
                  <div className="reAccountBank">
                    <h2 className="reAccountBankHeading">
                      Pay via Bank Transfer
                    </h2>

                    <div className="reBankDetails">
                      <div className="reBank1 reBank">
                        <h2>ACCOUNT NAME</h2>
                        <p>UI CONSULTANTS</p>
                      </div>

                      <div className="reBank2 reBank">
                        <h2>ACCOUNT NUMBER</h2>
                        <p>510909010118897</p>
                      </div>

                      <div className="reBank3 reBank">
                        <h2>BANK</h2>
                        <p>City Union Bank</p>
                      </div>

                      <div className="reBank4 reBank">
                        <h2>BRANCH</h2>
                        <p>Sector-8, Rohini Delhi</p>
                      </div>

                      <div className="reBank5 reBank">
                        <h2>BRANCH CODE</h2>
                        <p>244</p>
                      </div>

                      <div className="reBank6 reBank">
                        <h2>IFSC CODE</h2>
                        <p>CIUB0000244</p>
                      </div>
                      <div className="reBank8 reBank">
                        <h2>SWIFT CODE</h2>
                        <p>CIUBIN5M</p>
                      </div>

                      <div className="reBank9 reBank">
                        <h2>ACCOUNT TYPE</h2>
                        <p>CURRENT</p>
                      </div>
                    </div>
                  </div>
                </div>
                
               
                

               
                
              </div> */}
            </div>
          </div>

          {/* Registration Fee part  */}
          <div className="reFee">
            <RegistrationFee />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Registrations;
