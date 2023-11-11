import React, { useState, useEffect } from "react";

import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";

function MainLayout({ children }) {
  const [toggle, setToggle] = useState(window.innerWidth < 992);

  const updateWindowSize = () => {
    setToggle(window.innerWidth < 992);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div>
        <div className="d-flex">
          <div className="w-auto">
            <SideBar toggle={toggle} />
          </div>
          <div className="col">
            <NavBar toggle={() => setToggle(!toggle)} />
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default MainLayout;
