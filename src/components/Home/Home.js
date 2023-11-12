import React, { useRef } from "react";

import ApexPie from "../Charts/ApexPie";

import ApexBar from "../Charts/ApexBar";

import "./Home.css";


import TargetButtons from "./TargetButtons";




function Home() {
  const childRef = useRef();
  // Function to trigger the function in ChildComponent
  const triggerChildFunction = (cardName) => {
    childRef.current.toggleDataSeries(cardName);
  };
  const triggerChildFunction_reset = () => {
    childRef.current.resetBar();
  };



  return (
    <div className="p-3 bg-light">
      
      <div className="container-fluid">
        <div className="row justify-content-center g-2">
          <div className="col-sm-4">
            <div
              className="card cursor-pointer card-hover-shadow p-3 mb-5 bg-body rounded card-equal-height"
              onClick={triggerChildFunction_reset}
            >
              <div className="card-body text-center">
                <div className="card-title"></div>
                <div className="card-subtitle">
                  <div className="d-flex justify-content-between p1-md align-items-center bg-white">
                    <i class="bi bi-person-fill fs-1"></i>
                    <div>
                      <span className="text-muted small-text">Applicants</span>
                      <h2>1000</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div
              className="card cursor-pointer card1-hover p-3 mb-5 bg-body rounded card-equal-height"
              onClick={() => triggerChildFunction("Approved")}
            >
              <div className="card-body text-center">
                <div className="card-title "></div>
                <div className="card-subtitle custom-card-subtitle">
                  <div className="d-flex justify-content-between p1-md align-items-center bg-white">
                    <i class="bi bi-person-fill fs-1"></i>
                    <div>
                      <span className="text-muted small-text">Approved</span>
                      <h2>234</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div
              className="card cursor-pointer card2-hover p-3 mb-5 bg-body rounded card-equal-height"
              onClick={() => triggerChildFunction("Not Approved")}
            >
              <div className="card-body text-center">
                <div className="card-title"></div>
                <div className="card-subtitle">
                  <div className="d-flex justify-content-between p1-md align-items-center bg-white">
                    <i class="bi bi-person-fill fs-1"></i>
                    <div>
                      <span className="text-muted  small-text">
                        Not approved
                      </span>
                      <h2>234</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-md-none"><TargetButtons /></div>

        <div className="row">
          <div className="col-12 col-md-6 p-3">
            <ApexPie />
          </div>
          <div className="col-12 col-md-6 p-3">
            <ApexBar ref={childRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
