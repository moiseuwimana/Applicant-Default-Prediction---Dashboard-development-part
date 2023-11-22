import React from "react";
import CoefficientBarChart from "./CoefficientBarChart";
import "./Report.css";
import creditImg from "./Images/credit_score.jpg";
import educationImg from "./Images/graduation.jpg";
import familyImg from "./Images/family.jpg";
import marriageImg from "./Images/marriage.jpg";
import incomeImg from "./Images/income.jpeg";
import neighborhoodImg from './Images/neighborhood.jpg'



const Report = () => {
  return (
    <div className="container bg-light p-4">
      <div className="row">
        <div className="col">
          <h2 className="text-center display-2 my-2">Report</h2>
          <h2 className="text-center text-muted text-lg-start my-4">
          Executive Summary
          </h2>
          <p>
            In the ever-evolving landscape of finance and lending, the ability
            to accurately predict loan defaults plays a crucial role in risk
            management and decision-making for financial institutions. This Loan
            default prediction involves leveraging machine learning algorithms
            to analyze historical data and create models that can assess the
            likelihood of a borrower defaulting on a loan.
          </p>
        </div>
      </div>


      <div className="row">
        <h2 className="text-center text-muted text-lg-start my-4">Introduction</h2>
        <p>
        The finance and lending landscape is constantly evolving, demanding precise tools for anticipating loan defaults to facilitate effective risk management. Predicting loan defaults involves utilizing advanced machine learning algorithms to analyze historical data, creating models that can gauge the probability of a borrower defaulting on a loan
        </p>
      </div>

      <div className="row">
        <h2 className="text-center text-muted text-lg-start my-4">Objective</h2>
        <p>
          The primary goal of this project is to develop a robust and accurate
          predictive model that helps financial institutions automatically identify potential
          defaulters before approving a loan. By doing so, lenders can mitigate
          risks, minimize financial losses, and make informed lending decisions
        </p>
      </div>

      <div className="row">
        <h2 className="text-center text-muted text-lg-start my-4">Methodology Overview</h2>
        <p>
        The methodology employed in this project revolves around leveraging machine learning algorithms to analyze historical data. By identifying patterns and trends within this data, the goal is to create predictive models that can effectively evaluate the likelihood of loan default.
        </p>
      </div>

      <div className="row">
        <h2 className="text-center text-muted text-lg-start my-4">Data Collection </h2>
        <p>
        The project utilizes historical data relevant to loans, encompassing a variety of factors that could influence the likelihood of default. The selection and quality of this data are critical in training the machine learning model for accurate predictions.
        </p>
      </div>

      <div className="row">
        <h2 className="text-center text-muted text-lg-start my-4">Model Development & Experimentation </h2>
        <p>
        The core of the project involves the development of a sophisticated machine learning model that integrates historical data to predict the likelihood of loan default. The model aims to be robust and accurate, providing financial institutions with a valuable tool for risk assessment.
        </p>
      </div>


      <div className="row">
        <h2 className="text-center text-muted text-lg-start my-4">Results </h2>
        <p>
        The outcomes of this project are centered around providing financial institutions with actionable insights into potential loan defaults. The diagram below illustrates various factors and their impact levels on an applicant's ability to repay a loan. These outcomes were derived through the utilization of a machine learning model.
        </p>
      </div>






      <div className="row justify-content-center g-2">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"></h5>
                <CoefficientBarChart />          
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-0 mt-3 bg-transparent">
            <div className="card-body">
              <h5 className="card-title text-center mb-3 text-muted">About chart</h5>
              <p>
                The bar chart displays the influence of various features scaled in standard deviation. When a
                bar points up, it means that the corresponding feature has a
                positive effect on getting a loan. On the other hand, if a bar
                points down, it indicates that the feature has a negative impact
                on being approved for a loan.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3 ">
        <h2 className="text-center text-muted text-lg-start my-4">
          Interpretation & Recommendations
        </h2>
        <p>
        Following model results, it is recommended to give precedence to features (criteria) with higher positive coefficients, as they positively influence loan repayment. Simultaneously, it is advisable to address features with higher negative coefficients to diminish their impact on the loan. The following is the detailed recommandation on every criteria.
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
              The possession of a credit history is a highly determining factor in loan approval. Consequently, it is essential to concentrate on applicants with a lower credit history, as it significantly negatively influences the prediction. Individuals with a less robust credit history may present a higher level of risk
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
              Applicants demonstrating higher educational levels, as evidenced by a positive influence, may present a reduced risk of default. This correlation suggests that individuals with advanced education are potentially more financially resilient, providing lenders with an additional factor to consider in assessing and mitigating default risks within their applicant evaluations.
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
              If an applicant has more dependents, it appears to increase the likelihood of defaulting on a loan. This indicates that family size cannot be neglected when assessing the risk of lending to someone.
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
              Take note of applicants' marital status, as it holds a notable influence. The model suggests that married individuals might be linked to a slightly moderately risk of default. This insight emphasizes the importance of considering marital status as a factor in assessing the potential risk associated with lending to individuals.
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
              Closely monitor financial metrics like applicant income, coapplicant income, loan amount, and loan amount term. Higher loan amounts correspond to a slight increase in associated risk. This underscores the importance of scrutinizing these metrics to gauge and manage the potential risks linked to loans, allowing for informed decision-making in the lending process.
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
                While property area exhibits a positive influence, it's a
                relatively minor factor in comparison to the others.
                Nevertheless, considering this factor could provide an
                additional layer of insight.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3 ">
        <h2 className="text-center text-muted text-lg-start my-4">
        Conclusion
        </h2>
        <p>
        In conclusion, this project endeavors to empower financial institutions with a cutting-edge predictive model for automatic loan default assessment. By providing a proactive tool for risk management, the project aims to contribute to sound decision-making, ultimately minimizing financial losses and enhancing the overall stability of lending operations
        </p>
      </div>
    </div>
  );
};

export default Report;
