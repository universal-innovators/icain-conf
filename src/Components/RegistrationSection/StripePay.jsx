import "./ResRazorPay.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function StripePay() {
  return (
    <>
      <div className="razorPay" data-aos="zoom-in">
        <h1>Pay via Stripe/Razorpay</h1>
        <p>
        For Payment from International Authors/Attendees, use the following
        Stripe/Razorpay payment link with additional 5% service charges applied
        </p>
        <p className="submissionLinkheadRazor">
          <a
            href="https://buy.stripe.com/cN29CX9m7aKUco04gV"
            target="_blank"
          >
            Pay via Stripe
          </a>
        </p>
        <p className="submissionLinkheadRazor">
          <a
            href="https://rzp.io/rzp/2XqVFyHn"
            target="_blank"
          >
            Pay via Razorpay
          </a>
        </p>
      </div>
    </>
  );
}

export default StripePay;
