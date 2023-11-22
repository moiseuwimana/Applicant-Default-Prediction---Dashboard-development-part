import React, { useState, useEffect, useRef } from "react";
import "./TargetButtons.css";

import { useIdentifiers } from "../API/IdentifiersContext";

const TargetButtons = () => {
  const [isSticky, setSticky] = useState(false);
  const initialOffset = useRef(0); // Using useRef for initialOffset. PURPOSE: holding numerical offset data
  const stickyDivRef = useRef(null); // initiate to point to any DOM element is prepared to reference a DOM element later when the component renders. PURPOSE: Referencing a DOM element.
  const { seriesVisibility, toggleDataSeries, resetBar, approvedColor, notApprovedColor, isMobile} = useIdentifiers();

  useEffect(() => {
    const handleScroll = () => {
      const navBarHeight = 58;
      if (stickyDivRef.current) {
        const offset = stickyDivRef.current.offsetTop - navBarHeight;

        const isScrolledPast = window.scrollY >= offset;

        if (!isSticky && isScrolledPast) {
          setSticky(true);
          initialOffset.current = offset; // Update the useRef value (i.e set the position of where there is sticky div)
        } else if (isSticky && window.scrollY < initialOffset.current) {
          setSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky, initialOffset]);

  return (
    <div className="container-fluid">
      <div className="container-fluid ">
        <div
          ref={stickyDivRef}
          className={`row bg-light justify-content-center not-sticky  ${
            isSticky ? "sticky" : "mt-4"
          }`}
        >
          <div className="col-4 p-0 justify-content-center d-flex">
            <div
              className={`btn btn-sm  bg-light text-center ${
                isSticky ? "sticky-custom-width-btn" : "custom-width-btn"
              } ${isMobile?"mobile-extra":""}`}
              style={{ border: "2px solid rgba(0,0,0,0.2)",height: '50px' }}
              onClick={resetBar}
            >
              All
            </div>
          </div>


          {["Approved", "Not Approved"].map((seriesName) => {
            const borderColor =
              seriesName === "Approved"
                ? `2px solid ${approvedColor}`
                : `2px solid ${notApprovedColor}`;

            const style = {
              cursor: "pointer",
              border: borderColor,
              marginRight: "5px",
              textDecoration: seriesVisibility[seriesName]
                ? ""
                : "line-through",
              color: seriesVisibility[seriesName] ? "black" : "rgba(0,0,0,0.2)",
              height: '50px'             
            };

            return (
              <div
                className="col-4 p-0 d-flex justify-content-center"
                key={seriesName}
                onClick={() => toggleDataSeries(seriesName)}
              >
                <div 
                className={`btn btn-sm  bg-light text-center ${
                  isSticky ? "sticky-custom-width-btn" : "custom-width-btn"
                } ${isMobile?"mobile-extra":""}`}
                style={style}>
                  {seriesName}
                </div>
              </div>
            );
          })}

          
        </div>

        {/**div to take place of button when sticks */}


        <div className="row">
          <div className={`${isSticky ? "replace-sticky" : ""}`}></div>
        </div>
      </div>
    </div>
  );
};

export default TargetButtons;
