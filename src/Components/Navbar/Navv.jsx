import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navv.css";
import { FaSortDown } from "react-icons/fa";

function Navv() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track open dropdown by name
  const [stickyNav, setStickyNav] = useState(false);

  // Toggle main menu for mobile view
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setDropdownOpen(null); // Close dropdown when menu toggles
  };

  // Toggle individual dropdowns
  const toggleDropdown = (name) => {
    setDropdownOpen((prev) => (prev === name ? null : name));
  };

  // Close all menus
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(null);
  };

  // Sticky navigation on scroll
  const handleScroll = () => {
    setStickyNav(window.scrollY >= 140);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <nav className={stickyNav ? "main-nav activee" : "main-nav"}>
      <div className="menu-btn" onClick={toggleMenu}>
        <i className="fas fa-bars fa-2x"></i>
      </div>

      <div id="myLinks">
        <ul className={`main-menu ${menuOpen ? "show" : ""}`}>
          <li onClick={closeMenu}>
            <NavLink to="/">Home</NavLink>
          </li>

          <li className="dropbtn" onClick={() => toggleDropdown("about")}>
            About <FaSortDown />
            <div
              className={`dropdown-content ${
                dropdownOpen === "about" ? "show" : ""
              }`}
            >
              {/* <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  closeMenu();
                  toggleDropdown("about");
                }}
              >
                University of Stirling RAK Campus, UAE
              </a> */}
              <NavLink
                to="/about1"
                onClick={() => {
                  closeMenu();
                  toggleDropdown("about");
                }}
              >
                Universal Innovators
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => {
                  closeMenu();
                  toggleDropdown("about");
                }}
              >
                UI-Educon
              </NavLink>
            </div>
          </li>

          <li className="dropbtn" onClick={() => toggleDropdown("papers")}>
            Papers <FaSortDown />
            <div
              className={`dropdown-content ${
                dropdownOpen === "papers" ? "show" : ""
              }`}
            >
              <NavLink
                to="/callForPapers"
                onClick={() => {
                  closeMenu();
                  toggleDropdown("papers");
                }}
              >
                Call for Papers
              </NavLink>
              <NavLink
                to="/paperSubmissions"
                onClick={() => {
                  closeMenu();
                  toggleDropdown("papers");
                }}
              >
                Paper Submissions
              </NavLink>
              <NavLink
                to="/callForSpecial"
                onClick={() => {
                  closeMenu();
                  toggleDropdown("papers");
                }}
              >
                Call for Special Sessions
              </NavLink>
              <NavLink
                to="/callForInternational"
                onClick={() => {
                  closeMenu();
                  toggleDropdown("papers");
                }}
              >
                Call for International Workshops
              </NavLink>
            </div>
          </li>

          <li onClick={closeMenu}>
            <NavLink to="/spsessions">Special Sessions</NavLink>
          </li>

          <li onClick={closeMenu}>
            <NavLink to="/registrations">Registration</NavLink>
          </li>

          <li className="dropbtn" onClick={() => toggleDropdown("committee")}>
            Committee <FaSortDown />
            <div
              className={`dropdown-content ${
                dropdownOpen === "committee" ? "show" : ""
              }`}
            >
              <NavLink
                to="/steerings"
                onClick={() => {
                  closeMenu();
                  toggleDropdown("committee");
                }}
              >
                Steering Committee
              </NavLink>
              <NavLink
                to="/technicals"
                onClick={() => {
                  closeMenu();
                  toggleDropdown("committee");
                }}
              >
                Technical Program Committee
              </NavLink>
              <NavLink
                to="/advisorys"
                onClick={() => {
                  closeMenu();
                  toggleDropdown("committee");
                }}
              >
                Advisory Committee
              </NavLink>
            </div>
          </li>

          <li onClick={closeMenu}>
            <NavLink to="/publications">Publications</NavLink>
          </li>
          {/* <li onClick={closeMenu}>
            <NavLink to="/conferences">Conference Venue</NavLink>
          </li> */}

          <li onClick={closeMenu}>
            <NavLink to="/downloads">Downloads</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/awards">Awards</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/innostorm">Innostorm</NavLink>
          </li>

          <li onClick={closeMenu}>
            <NavLink to="/guide">Visitors Guide</NavLink>
          </li>

          <li onClick={closeMenu}>
            <NavLink to="/policy">Policy</NavLink>
          </li>

          <li
            className="dropbtn"
            onClick={() => toggleDropdown("previousConferences")}
          >
            Previous Conferences <FaSortDown />
            <div
              className={`dropdown-content ${
                dropdownOpen === "previousConferences" ? "show" : ""
              }`}
            >
              <NavLink
                to="/pcConferences24"
                onClick={() => {
                  closeMenu();
                  toggleDropdown("previousConferences");
                }}
              >
                ICAIN 2024
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navv;
