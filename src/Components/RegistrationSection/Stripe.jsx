import "./ResRazorPay.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Stripe() {
  return (
    <>
      <div className="razorPay" data-aos="zoom-in">
        <h1>Pay via Stripe</h1>
        <p>
          For Payment from International Authors/Attendees, use the following
          Stripe payment link with additional 5% service charges applied
        </p>
        <p className="submissionLinkhead">
          <a
            href="https://buy.stripe.com/cN29CX9m7aKUco04gV"
            target="_blank"
          >
            Pay via Stripe
          </a>
        </p>
      </div>
    </>
  );
}

export default Stripe;
