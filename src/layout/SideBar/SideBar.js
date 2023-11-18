import React, { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./SideBar.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function SideBar({ toggle }) {
  const [active, setActive] = React.useState(1);
  const display = toggle ? "d-none" : "d-flex";

  // useEffect to retrieve the active state from localStorage on component mount
  useEffect(() => {
    const storedActive = localStorage.getItem("active");
    if (storedActive) {
      setActive(parseInt(storedActive, 10));
    }
  }, []);

  // useEffect to update localStorage whenever the active state changes
  useEffect(() => {
    localStorage.setItem("active", active);
  }, [active]);

  return (
    <div
      className={`${display} sidebar justify-content-between flex-column bg-dark text-white py-3 ps-3 pe-5 vh-100 sticky-block`}
    >
      <div className="align-item-center">
        <Link to="/" className=" text-decoration-none text-white">
          <img
            className="text-primary logo"
            src={logo}
            style={{ width: "33px" }}
          />
          <span className="ms-3 project-title">Loan Management</span>
        </Link>
        <hr className="text-white mt-2" />
        <ul className="nav nav-pills flex-column mt-3">
          <li
            className={active === 1 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(1)}
          >
            <Link to="/" className="p-1 text-decoration-none text-white">
              <i className="bi bi-speedometer2 me-3 fs-4 "></i>
              <span className="fs-6">
                <strong>Dashboard</strong>
              </span>
            </Link>
          </li>
          <li
            className={active === 3 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(3)}
          >
            <Link to="/records" className="p-1 text-decoration-none text-white">
              <i className="bi bi-table me-3 fs-4"></i>
              <span className="fs-6">
                <strong>Records</strong>
              </span>
            </Link>
          </li>
          <li
            className={active === 4 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(4)}
          >
            <Link to="/report" className="p-1 text-decoration-none text-white">
              <i className="bi bi-grid me-3 fs-4"></i>
              <span className="fs-6">
                <strong>Report</strong>
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <hr className="text-white" />
        <div className="nav-item p-2">
          <button className="p-1 text-decoration-none text-white bg-transparent border-0">
            <i className="bi bi-person-circle me-3 fs-4"></i>
            <span className="fs-4">
              <strong>Moise</strong>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
