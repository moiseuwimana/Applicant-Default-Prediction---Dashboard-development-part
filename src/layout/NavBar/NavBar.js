import React from "react";

function NavBar({toggle}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-brand d-none d-lg-block">
          Dashboard
        </button>
        <button className="bg-transparent border-0 navbar-brand d-block d-lg-none" onClick={toggle}>
          <i className="bi bi-justify"></i>
        </button>
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item border rounded">
              <button className="nav-link text-white" aria-current="page">
                <i className="bi bi-search"></i>
                Search
              </button>
            </li>
            <li className="nav-item mx-2 rounded border">
              <button className="nav-link text-white" aria-current="page">
                Account
              </button>
            </li>
            <li className="nav-item border rounded">
              <button className="nav-link text-white" aria-current="page">
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
