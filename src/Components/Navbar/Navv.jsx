import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navv.css";
import { FaSortDown } from "react-icons/fa";
function Navv() {
  function clickHandler() {
    var x = document.querySelector(".main-menu");
    x.classList.toggle("show");
  }

  function subHandler() {
    var x = document.querySelector(".main-menu");
    if (x.classList.contains("show")) {
      x.classList.add("show");
    } else {
      x.classList.remove("show");
    }
  }

  function lHandler(e) {
    var x = document.querySelector(".main-menu");

    x.classList.remove("show");
  }

  const [activee, setActivee] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 140) {
      setActivee(true);
    } else {
      setActivee(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <nav className={activee ? "main-nav activee" : "main-nav"}>
        <div className="menu-btn" onClick={clickHandler}>
          <i className="fas fa-bars fa-2x"></i>
        </div>

        <div id="myLinks">
          <ul className="main-menu ">
            <li onClick={clickHandler}>
              <NavLink to="/">Home</NavLink>
            </li>

            {/* <li onClick={clickHandler}>
            <NavLink to="/about">About Institute</NavLink>
          </li>
          <li onClick={clickHandler}>
            <NavLink to="/about1">Universal Innovators</NavLink>
          </li> */}

            <li onClick={subHandler} className="dropbtn">
              <FaSortDown />
              About
              <div className="dropdown-content">
                <NavLink to="/about" onClick={lHandler}>
                  About Institute
                </NavLink>
                <NavLink to="/about1" onClick={lHandler}>
                  About Universal Innovators
                </NavLink>
              </div>
            </li>

            <li onClick={subHandler} className="dropbtn">
              <FaSortDown />
              Papers
              <div className="dropdown-content">
                <NavLink to="/callForPapers" onClick={lHandler}>
                  Call for Papers
                </NavLink>
                <NavLink to="/paperSubmissions" onClick={lHandler}>
                  Paper Submissions
                </NavLink>
                <NavLink to="/callForSpecial" onClick={lHandler}>
                  Call for Special Sessions
                </NavLink>
                <NavLink to="/callForInternational" onClick={lHandler}>
                  Call for International Workshops
                </NavLink>
              </div>
            </li>

            <li onClick={clickHandler}>
              <NavLink to="/spsessions">Special Sessions</NavLink>
            </li>

            {/* <li  onClick={clickHandler}><NavLink to="/workshops">WorkShops</NavLink> 
          </li> */}

            <li onClick={clickHandler}>
              <NavLink to="/registrations">Registration</NavLink>
            </li>

            <li onClick={clickHandler}>
              <NavLink to="/sponsorships">Sponsorships</NavLink>
            </li>
            <li onClick={clickHandler}>
              <NavLink to="/publications">Publications</NavLink>
            </li>
            <li onClick={subHandler} className="dropbtn">
              <FaSortDown />
              Committe
              <div className="dropdown-content">
                <NavLink to="/steerings" onClick={lHandler}>
                  Steering Committee
                </NavLink>
                <NavLink to="/technicals" onClick={lHandler}>
                  Technical Program Committee
                </NavLink>
                <NavLink to="/advisorys" onClick={lHandler}>
                  Advisory Committee
                </NavLink>
                {/* <NavLink to="/industrys">Industry Expert</NavLink> */}
              </div>
            </li>

            {/* <li onClick={clickHandler}>
              <NavLink to="/awards">Awards</NavLink>
            </li> */}
            <li onClick={clickHandler}>
              <NavLink to="/conferences">Conference Venue</NavLink>
            </li>
            <li onClick={clickHandler}>
              <NavLink to="/downloads">Downloads</NavLink>
            </li>
            <li onClick={clickHandler}>
              <NavLink to="/guide">Visitors Guide</NavLink>
            </li>
            {/* <li onClick={clickHandler}>
              <NavLink to="/policy">Privacy Policy</NavLink>
            </li> */}

            {/* <li  onClick={clickHandler} className="dropbtn">
  <FaSortDown/>
  Previous Conferences
            <div className="dropdown-content">
            <NavLink to="/pcConferences22">Icicc 2022</NavLink>
            <NavLink to="/pcConferences21">Icicc 2021</NavLink>
            <NavLink to="/pcConferences20">Icicc 2020</NavLink>
            <NavLink to="/pcConferences19">Icicc 2019</NavLink>
            <NavLink to="/pcConferences18">Icicc 2018</NavLink>

            </div>
  </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navv;
