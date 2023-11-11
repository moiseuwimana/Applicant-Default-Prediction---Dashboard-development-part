import React from "react";

import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import User from "./components/User/user";
import Order from "./components/Order/Order";
import MainLayout from "./layout/MainLayout/MainLayout";

import { DataProvider } from "./components/API/DataContext";

import { MyContextProvider } from "./components/API/MyContext";

function App() {
  return (
    <MyContextProvider>
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
              path="/users"
              element={
                <>
                  <User />
                </>
              }
            ></Route>
            <Route
              path="/orders"
              element={
                <>
                  <Order />
                </>
              }
            ></Route>
          </Routes>
        </MainLayout>
      </DataProvider>
    </MyContextProvider>
  );
}

export default App;
