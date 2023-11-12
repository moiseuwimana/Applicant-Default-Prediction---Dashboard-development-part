import React, { createContext, useContext, useState } from 'react';

// Create a context
const MyContext = createContext();

// Create a custom hook to easily access the context
export function useMyContext() {
  return useContext(MyContext);
}


// Create a provider component
export function MyContextProvider({ children }) {
  const [selected, setSelected] = useState('');
  const [seriesVisibility, setSeriesVisibility] = useState({
    'Approved': true,
    'Not Approved': true,
  });
  
  const toggleDataSeries = (seriesName) => {
    setSelected(seriesName)
    setSeriesVisibility((prevVisibility) => ({
      'Approved': false,
      'Not Approved': false,
      [seriesName]: true,
    }));
  };
  const resetBar = ()=>{
    setSelected('')
    setSeriesVisibility({
      'Approved': true,
      'Not Approved': true,
    })
  }
  let approvedColor = "rgba(0,150,0,1)";
  let notApprovedColor = "rgba(200,0,0,1)";
  if (selected) {
    approvedColor =
      selected === "Approved" ? "rgba(0,150,0,1)" : "rgba(0,150,0,0.1)";
    notApprovedColor =
      selected === "Not Approved" ? "rgba(200,0,0,1)" : "rgba(200,0,0,0.1)";
  }

  return (
    <MyContext.Provider value={{ seriesVisibility, toggleDataSeries, resetBar, selected, approvedColor, notApprovedColor }}>
      {children}
    </MyContext.Provider>
  );
}
