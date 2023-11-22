// DataContext.js
import { createContext, useContext, useState, useEffect } from "react";

import creditHistorySvg from "../../svg/0reservation-completed-icon.svg";
import noCreditHistorySvg from "../../svg/0remove-date-calendar-icon.svg";
import ruralSvg from '../../svg/0nature-landscape-icon.svg';
import semiurbanSvg from '../../svg/0village-icon.svg';
import urbanSvg from '../../svg/town-city-icon.svg';
import mariedSvg from '../../svg/hugging-romance-icon.svg';
import notMarriedSvg from '../../svg/0man-woman-toilet-icon.svg'
import graduateSvg from '../../svg/student-boy-icon.svg';
import notGraduateSvg from '../../svg/0young-icon.svg';
import selfEmployed from '../../svg/businessman-task-time-icon.svg';
import notSelfEmployed from '../../svg/0construction-engineer-icon.svg'



const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the URL of the API you want to fetch data from
    const apiUrl =
      "https://moiseuwimana.github.io/Loan-approval-prediction---dataAPI-part/data.json";

    // Use the fetch function to make the API request
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((fetchedData) => {
        // Update the data state with the fetched data
        setData(fetchedData);
        setLoading(false);
      })
      .catch((fetchError) => {
        setError(fetchError);
        setLoading(false);
      });
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  if (error) {
    console.log("Erro: ");
  }
  if (loading) {
    console.log("Loading data...");
  }
  if (data) {
    const featuresOnBarChart = [
      {
        feature: "Loan Approval & Credit History",
        icons:[creditHistorySvg,noCreditHistorySvg]
      },
      {
        feature:"Property Area & Loan Approval",
        icons:[ruralSvg,semiurbanSvg,urbanSvg]
      },
      {
        feature:"Marital Status & Loan Status",
        icons:[mariedSvg,notMarriedSvg]
      },
      {
        feature:"Applicant Education & Loan Status",
        icons:[graduateSvg,notGraduateSvg]
      },
      {
        feature:"Loan Approval & Employment Status",
        icons:[notSelfEmployed,selfEmployed]
      }
    ]
    return (
      <DataContext.Provider value={{ data, featuresOnBarChart}}>
        {children}
      </DataContext.Provider>
    );
  }
}


export function useData() {
  return useContext(DataContext);
}
