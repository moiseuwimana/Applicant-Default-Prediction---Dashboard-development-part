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

  


  return (
    <MyContext.Provider value={{ seriesVisibility, toggleDataSeries, resetBar, selected }}>
      {children}
    </MyContext.Provider>
  );
}
