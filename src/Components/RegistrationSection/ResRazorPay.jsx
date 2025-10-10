import "./ResRazorPay.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function RazorPay() {
  return (
    <>
      <div className="razorPay" data-aos="zoom-in">
        <h1>Pay via RazorPay</h1>
        <p>
          For payment from Indian Authors/Attendees, use the following payment
          link Pay via Razorpay
        </p>
        <p className="submissionLinkheadRazor">
          <a
            href="https://rzp.io/l/DihIANNqD"
            target="_blank"
          >
            Pay via RazorPay
          </a>
        </p>
      </div>
    </>
  );
}

export default RazorPay;
