import React from "react";
import "../styles/Navbar.css";



function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav-container">
      <li>
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About 
        </a>
      </li>
      <li>
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          href="#services"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Services" ? "nav-link active" : "nav-link"}
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );

  
}

export default Navbar;





