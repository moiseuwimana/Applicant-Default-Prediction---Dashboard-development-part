import React, { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./SideBar.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import reportPdf from '../../files/Applicant-default-prediction.pdf';

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



  const downloadFileAtURL = (url)=>{
    fetch(url)
    .then(response=>response.blob())
    .then(blob=>{
      const blobURL = window.URL.createObjectURL(new Blob([blob]))
      const fileName = url.split("/").pop();
      const aTag = document.createElement("a");
      aTag.href = blobURL;
      aTag.setAttribute("download",fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();

    })
  }

  return (
    <div
      className={`${display} sidebar justify-content-between flex-column bg-dark text-white py-3 ps-3 pe-4 vh-100 sticky-block`}
    >
      <div className="align-item-center">
        <Link to="/" className=" text-decoration-none text-white d-flex align-items-center">
          <img
            className="logo"
            src={logo}
            style={{ width: "33px", transition: "width 0.3s" }}
            alt="Logo"
          />
          <span className="ms-3 project-title">
            <strong>Loan Management</strong>
          </span>
        </Link>
        <hr className="text-white mt-2" />
        <ul className="nav nav-pills flex-column mt-3">
          <li
            className={active === 1 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(1)}
          >
            <Link to="/" className="p-1 text-decoration-none text-white">
              <div className="row">
                <i className="bi bi-speedometer2 me-3 fs-4  d-flex justify-content-center"></i>
                <span className="fs-6 d-flex justify-content-center">
                  <strong>Dashboard</strong>
                </span>
              </div>
            </Link>
          </li>
          <li
            className={active === 3 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(3)}
          >
            <Link to="/records" className="p-1 text-decoration-none text-white">
              <div className="row">
                <i className="bi bi-table me-3 fs-4 d-flex justify-content-center"></i>
                <span className="d-flex justify-content-center fs-6">
                  <strong>Records</strong>
                </span>
              </div>
            </Link>
          </li>

          <li
            className={active === 4 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(4)}
          >
            <Link to="/report" className="p-1 text-decoration-none text-white">
              <div className="row">
                <i className="bi bi-graph-up-arrow me-3 fs-4 d-flex justify-content-center"></i>
                <span className="fs-6 justify-content-center d-flex">
                  <strong>Prediction</strong>
                </span>
              </div>
            </Link>
          </li>

          <li
            className={ "nav-item p-2"}   
          >
            <button className="p-1 bg-transparent text-white border-0 p-4" onClick={()=>{downloadFileAtURL(reportPdf)}}>
              <div className="row">
                <i className="bi bi-file-earmark-arrow-down-fill me-3 fs-4 d-flex justify-content-center"></i>
                <span className="fs-6 justify-content-center d-flex">
                  <strong>Technical Report</strong>
                </span>
              </div>
            </button>
          </li>
        </ul>
      </div>

      <div>
        <hr className="text-white" />
        <div className="nav-item p-2">
          <button className="p-1 text-decoration-none text-white bg-transparent border-0 d-flex justify-content-center">
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
