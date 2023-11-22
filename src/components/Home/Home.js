import React, { useRef } from "react";

import ApexPie from "./Charts/ApexPie";

import ApexBar from "./Charts/ApexBar";

import "./Home.css";

import TargetButtons from "./TargetButtons";

import { useData } from "../API/DataContext";
import { useIdentifiers } from "../API/IdentifiersContext";

import DonutChartWithImage from "./Charts/DonutChartWithImage";

import femaleIcon from "./female.png";
import maleIcon from "./male.png";





function Home() {
  const {data,featuresOnBarChart}=useData()
  const { approvedColor, notApprovedColor} = useIdentifiers();
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
                    <i className="bi bi-person-fill fs-1"></i>
                    <div>
                      <h2 className="text-muted small-text">Applicants</h2>
                      <h2>
                        {data["Loan Status"]["Approved"] +
                          data["Loan Status"]["Not Approved"]}
                      </h2>
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
                  <div
                    className="d-flex justify-content-between p1-md align-items-center bg-white"
                    style={{ color: approvedColor }}
                  >
                    <i className="bi bi-person-fill fs-1"></i>
                    <div>
                      <h2 className="small-text">Approved</h2>
                      <h2>{data["Loan Status"]["Approved"]}</h2>
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
                  <div
                    className="d-flex justify-content-between p1-md align-items-center bg-white"
                    style={{ color: notApprovedColor }}
                  >
                    <i className="bi bi-person-fill fs-1"></i>
                    <div>
                      <h2 className="small-text">Not approved</h2>
                      <h2>{data["Loan Status"]["Not Approved"]}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-lg-none">
          <TargetButtons/>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 p-4">
            <DonutChartWithImage
              genderIcon={femaleIcon}
              gender={"Female"}
              title={"Female and Loan"}
            />
          </div>

          <div className="col-12 col-md-6 p-4">
            <DonutChartWithImage
              genderIcon={maleIcon}
              gender={"Male"}
              title={"Male and Loan"}
            />
          </div>




          <div className="col-12 col-md-6 p-4">
            <ApexPie />
          </div>

          
          {featuresOnBarChart.map((feature, index)=>{
            return (
              <div key={index} className="col-12 col-md-6 p-3">
            <ApexBar
              ref={childRef}
              feature={feature['feature']}
              icons={feature['icons']}

            />
          </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
