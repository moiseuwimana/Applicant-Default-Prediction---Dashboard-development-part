// DataContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}




export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the URL of the API you want to fetch data from
    const apiUrl = 'https://moiseuwimana.github.io/Loan-approval-prediction---dataAPI-part/data.json';

    // Use the fetch function to make the API request
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
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

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
}
