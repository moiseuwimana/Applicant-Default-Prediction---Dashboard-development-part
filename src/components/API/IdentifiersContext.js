import React, { createContext, useContext, useState } from 'react';


// Create a context
const IdentifiersContext = createContext();



// Create a provider component
export function IdentifiersProvider({ children }) {
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


  

  const breakPoint = 576;
  const extraSmallBreakPoint = 285;
  const [isMobile, setMobile] = React.useState(window.innerWidth<breakPoint);
  const [isExtraSmall, setExtraSmall] = React.useState(window.innerWidth<extraSmallBreakPoint)
  React.useEffect(()=>{
    const handleResize=()=>{
      setMobile(window.innerWidth<breakPoint);
      setExtraSmall(window.innerWidth<extraSmallBreakPoint);
    }
    window.addEventListener('resize',handleResize);
    return ()=>{
      window.removeEventListener('resize',handleResize)
    }
  },[])

  return (
    <IdentifiersContext.Provider value={{ seriesVisibility, toggleDataSeries, resetBar, selected, approvedColor, notApprovedColor, isMobile, isExtraSmall }}>
      {children}
    </IdentifiersContext.Provider>
  );
}



// Create a custom hook to easily access the context
export function useIdentifiers() {
  return useContext(IdentifiersContext);
}
