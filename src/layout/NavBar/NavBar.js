import React from "react";
import './NavBar.css';

function NavBar({toggle}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top custom-navbar">
      <div className="container-fluid">
        <button className="navbar-brand d-none d-lg-block bg-transparent border-0">
          Dashboard
        </button>
        <button className="bg-transparent border-0 navbar-brand d-block d-lg-none" onClick={toggle}>
          <i className="bi bi-justify custom-btn" style={{borderRadius:'10px'}}></i>
        </button>
        <button
          className="navbar-toggler custom-btn px-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ms-auto my-2 mb-lg-0">
            <li className="nav-item border-0 ms-auto">
              <button className="btn custom-btn nav-link" aria-current="page">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
