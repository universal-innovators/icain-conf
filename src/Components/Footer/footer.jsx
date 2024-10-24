import React, { useLayoutEffect } from "react";
import classes from "./footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className={classes.footer}>
      <div className={classes.fmain}>
        {/* footer left  */}
        <div className={classes.fleft}>
          <div className={classes.details}>
          {/* <h1>Partners</h1> */}
            <div className={classes.footerLogo}>
            <img src={require("./Himages/vste.jpg")} className={classes.logoImg}/>
              {/* <img src={require("./Himages/gtbit.jpg")} className={classes.logoImg}/> */}
              <img src={require("./Himages/portagal.jpg")} className={classes.logoImg}/>
            </div>
            <div className={classes.footerLogo}>
              <img src={require("./Himages/du.png")} className={classes.logoImg}/>
              <img src={require("./Himages/ksmv.png")} className={classes.logoImg}/>
            </div>

          </div>
        </div>

        {/* footer middle  */}
        <div className={classes.socialMedia}>
        <h1>Contact Details</h1>
            <p>icain.conf@gmail.com</p>
          <h1>Social Media</h1>

          <div className={classes.social}>
            <a href="mailto:icain.conf@gmail.com">Gmail</a>
            {/* <a href="icain.conf@gmail.com">Gmail</a> */}
            <a href="">Facebook</a>
            <a href="">LinkedIn</a>
          </div>
        </div>

        {/* footer right  */}
        <div className={classes.fright}>
          <div className={classes.links}>
            <h1>Quick Links</h1>

            <NavLink to="/callForPapers">
              <p>Call for papers</p>
            </NavLink>
            <NavLink to="/publications">
              <p>Publications & Important Dates</p>
            </NavLink>

            <NavLink to="/conferences">
              {" "}
              <p>Conference Venue</p>
            </NavLink>

            <NavLink to="/downloads">
              {" "}
              <p>Downloads</p>
            </NavLink>
            <NavLink to="/policy">
              {" "}
              <p>Privacy Policy</p>
            </NavLink>
          </div>
        </div>
      </div>

      <div className={classes.line}>
        <hr />
      </div>

      <div className={classes.f_lower}>
        <h3>
          Copyright ©"International Conference on Artificial Intelligence and Networking" ICAIN | All Rights
          Reserved
        </h3>
        {/* <p>Site By: Akshun Verma</p> */}
      </div>
    </div>
  );
}

export default Footer;
