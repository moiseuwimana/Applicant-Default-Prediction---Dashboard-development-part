import React from "react";
import CoefficientBarChart from "./CoefficientBarChart";
import "./Report.css";
import CoefficientBarChartMobile from "./CoefficientBarChartMobile";
import creditImg from "./credit_score.jpg";
import educationImg from "./graduation.jpg";
import familyImg from "./family.jpg";
import marriageImg from "./marriage.jpg";
import incomeImg from "./income.jpeg";
import neighborhoodImg from './neighborhood.jpg'

const Report = () => {
  return (
    <div className="container bg-light p-4">
      <div className="row">
        <div className="col">
          <h2 className="text-center display-2 my-2">Report</h2>
          <h2 className="text-center text-muted text-lg-start my-4">
            Introduction
          </h2>
          <p>
            In the ever-evolving landscape of finance and lending, the ability
            to accurately predict loan defaults plays a crucial role in risk
            management and decision-making for financial institutions. This Loan
            default prediction involves leveraging machine learning algorithms
            to analyze historical data and create models that can assess the
            likelihood of a borrower defaulting on a loan.{" "}
          </p>
        </div>
      </div>

      <div className="row">
        <h2 className="text-center text-muted text-lg-start my-4">Objective</h2>
        <p>
          The primary goal of this project is to develop a robust and accurate
          predictive model that helps financial institutions identify potential
          defaulters before approving a loan. By doing so, lenders can mitigate
          risks, minimize financial losses, and make informed lending decisions
        </p>
      </div>

      <div className="row ustify-content-center g-2">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"></h5>
              <div className="d-md-none">
                <CoefficientBarChartMobile />
              </div>
              <div className="d-none d-md-block">
                <CoefficientBarChart />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-hover-shadow p-3 mb-5 bg-body rounded card-equal-height">
            <div className="card-body">
              <h5 className="card-title">About chart</h5>
              <p>
                The bar chart displays the influence of various features. When a
                bar points up, it means that the corresponding feature has a
                positive effect on getting a loan. On the other hand, if a bar
                points down, it indicates that the feature has a negative impact
                on being approved for a loan.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-5 ">
        <h2 className="text-center text-muted text-lg-start my-4">
          Interpretation & Recommendations
        </h2>
        <p>
          Based on the coefficients, prioritize features with higher positive
          coefficients as they contribute more positively to the target
          variable. Similarly, consider addressing features with higher negative
          coefficients to mitigate their impact on the target.
        </p>
      </div>

      <div className="row ustify-content-center g-2">
        <div className="col-md-6 col-lg-5 col-xl-4">
          <div className="card card-hover-shadow p mb-5 bg-body rounded card-equal-height">
            <div className="inner">
              <img className="card-img-top" src={creditImg} />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">1. Credit History</h5>
              <p>
                Focus attention on applicants with a lower 'Credit History,' as
                this factor carries a substantial negative influence on the
                prediction. Applicants with a less robust credit history may
                pose a higher risk.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-5 col-xl-4">
          <div className="card card-hover-shadow mb-5 bg-body rounded card-equal-height">
            <div className="inner">
              <img className="card-img-top" src={educationImg} />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">
                2. Educational background
              </h5>
              <p>
                Applicants with higher educational levels, indicated by a
                positive influence, may have a lower risk of default.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-5 col-xl-4">
          <div className="card card-hover-shadow mb-5 bg-body rounded card-equal-height">
            <div className="inner">
              <img className="card-img-top" src={familyImg} />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">3. Dependents</h5>
              <p>
                The number of dependents someone has is a big factor in our
                prediction. If an applicant has more dependents, it seems to
                increase the chances of defaulting on a loan. This means that
                family size is an important factor to consider when assessing
                the risk of lending to someone.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-5 col-xl-4">
          <div className="card card-hover-shadow mb-5 bg-body rounded card-equal-height">
            <div className="inner">
              <img className="card-img-top" src={marriageImg} />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">4. Marital Status</h5>
              <p>
                Consider the 'Married' status of applicants, as it exhibits a
                noteworthy negative influence. Married individuals, according to
                the model, might be associated with a higher risk of default
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-5 col-xl-4">
          <div className="card card-hover-shadow mb-5 bg-body rounded card-equal-height">
            <div className="inner">
              <img className="card-img-top" src={incomeImg} />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">5. Financial Metrics</h5>
              <p>
                Pay close attention to financial metrics such as 'Applicant
                Income,' 'Coapplicant Income,' 'Loan Amount,' and 'Loan Amount
                Term.'
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-5 col-xl-4">
          <div className="card card-hover-shadow mb-5 bg-body rounded card-equal-height">
            <div className="inner">
              <img className="card-img-top" src={neighborhoodImg} />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">6. Property Area</h5>
              <p>
                While 'Property Area' exhibits a positive influence, it's a
                relatively minor factor in comparison to the others.
                Nevertheless, considering this factor could provide an
                additional layer of insight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
