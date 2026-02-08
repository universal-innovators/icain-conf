import "./ResPayPal.css";
import AOS from "aos";
import "aos/dist/aos.css";
import upi from "./upi-ui-inov.jpeg";
AOS.init();
function UPI() {
  return (
    <>
      <div className="payPal" data-aos="zoom-in">
        <h1>Pay via UPI</h1>
        <p>
          For Payments using UPI, scan the following QR code:
        </p>
        <p className="submissionLinkhead">
          <img src={upi} style={{'height':'300px'}}/>
        </p>
      </div>
    </>
  );
}

export default UPI;
