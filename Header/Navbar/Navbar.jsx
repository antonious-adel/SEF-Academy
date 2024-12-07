import "./Navbar.css";
import Logo from "../../../assets/seff_logo_transparent.png";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu

const Navbar = () => {
  const [dropdownTech, setDropdownTech] = useState(false);
  const [dropdownCourse, setDropdownCourse] = useState(false);
  const [navScroll, setNavScroll] = useState("");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavScroll("scroll");
      } else {
        setNavScroll("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Navbar">
      {/* Header */}
      <header className="header">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/instructor">Profile</NavLink>
        <NavLink to="/exam">Exams</NavLink>
        <NavLink to="/admin">Admin Panel</NavLink>
      </header>

      {/* Navigation */}
      <div className={`navbar ${navScroll}`}>
        <div className="Logo">
          <img src={Logo} alt="SEF Academy" />
        </div>

        {/* Hamburger Icon for mobile view */}
        <div className="hamburger" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links - Toggle visibility based on isMobileMenuOpen */}
        <nav className={`Links ${isMobileMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>

            {/* Tech Dropdown */}
            <li className="dropdown-group">
              <NavLink
                to="/tech"
                onClick={() => {
                  setDropdownTech(!dropdownTech);
                  setDropdownCourse(false);
                }}
                aria-expanded={dropdownTech}
              >
                Tech {dropdownTech ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </NavLink>
              {dropdownTech && (
                <ul className="dropdown-list">
                  <li>
                    <NavLink to="/laptops">Laptops</NavLink>
                  </li>
                  <li>
                    <NavLink to="/phones">Phones</NavLink>
                  </li>
                  <li>
                    <NavLink to="/tablets">Tablets</NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink to="/business">Business</NavLink>
            </li>
            <li>
              <NavLink to="/security">Security</NavLink>
            </li>
            <li>
              <NavLink to="/sports">Sports</NavLink>
            </li>
            <li>
              <NavLink to="/medical">Medical</NavLink>
            </li>
            <li>
              <NavLink to="/startups">Startups</NavLink>
            </li>
            <li>
              <NavLink to="/apps">Apps</NavLink>
            </li>

            {/* Courses Dropdown */}
            <li className="dropdown-group-courses">
              <NavLink
                to="/courses"
                onClick={() => {
                  setDropdownCourse(!dropdownCourse);
                  setDropdownTech(false);
                }}
                aria-expanded={dropdownCourse}
              >
                Courses {dropdownCourse ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </NavLink>
              {dropdownCourse && (
                <ul className="dropdown-list-courses">
                  <li>
                    <NavLink to="/laptops">Laptops</NavLink>
                  </li>
                  <li>
                    <NavLink to="/phones">Phones</NavLink>
                  </li>
                  <li>
                    <NavLink to="/tablets">Tablets</NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink to="/jobs">Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <button>Contact Us</button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
