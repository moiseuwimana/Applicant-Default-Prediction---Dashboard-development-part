import React from "react";

import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Report from "./components/Report/Report";




import Records from "./components/Records/Records";



import MainLayout from "./layout/MainLayout/MainLayout";

import { DataProvider } from "./components/API/DataContext";

import { IdentifiersProvider } from "./components/API/IdentifiersContext";



function App() {
  return (
    <IdentifiersProvider>
      <DataProvider>
        <MainLayout>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            ></Route>
            <Route
              path="/report"
              element={
                <>
                  <Report />
                </>
              }
            ></Route>
            <Route
              path="/records"
              element={
                <>
                  <Records />
                </>
              }
            ></Route>
          </Routes>
        </MainLayout>
      </DataProvider>
    </IdentifiersProvider>
  );
}

export default App;
