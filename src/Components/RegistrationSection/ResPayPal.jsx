import "./ResPayPal.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function PayPal() {
  return (
    <>
      <div className="payPal" data-aos="zoom-in">
        <h1>Pay via Paypal</h1>
        <p>
          For Payment from International Authors/Attendees, use the following
          paypal link with additional 5% service charges applied
        </p>
        <p className="submissionLinkhead">
          <a
            href="https://www.paypal.com/paypalme/IciccConference?locale.x=en_GB"
            target="_blank"
          >
            Pay via Paypal
          </a>
        </p>
      </div>
    </>
  );
}

export default PayPal;
