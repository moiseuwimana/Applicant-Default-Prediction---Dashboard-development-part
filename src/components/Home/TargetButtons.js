import React, { useState, useEffect, useRef } from "react";
import "./TargetButtons.css"; // Import your CSS file

import { useMyContext } from "../API/MyContext";

const TargetButtons = () => {
  const [isSticky, setSticky] = useState(false);
  const initialOffset = useRef(0); // Use useRef for initialOffset
  const stickyDivRef = useRef(null);
  const { seriesVisibility, toggleDataSeries, resetBar, selected } =
    useMyContext();

  useEffect(() => {
    const handleScroll = () => {
      if (stickyDivRef.current) {
        const offset = stickyDivRef.current.offsetTop;
        const isScrolledPast = window.scrollY >= offset;

        if (!isSticky && isScrolledPast) {
          setSticky(true);
          initialOffset.current = offset; // Update the useRef value
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
    <div className="row">
      <div className="col-12">
        <div
          ref={stickyDivRef}
          className={`d-flex justify-content-center ${isSticky ? "sticky" : "my-4"}`}
        >
          {["Approved", "Not Approved"].map((seriesName) => {
            const borderColor =
              seriesName === "Approved"
                ? "2px solid rgb(0,150,0,0.2)"
                : "2px solid rgb(200,0,0,0.2)";

            const style = {
              cursor: "pointer",
              border: borderColor,
              marginRight: "5px",
              textDecoration: seriesVisibility[seriesName]
                ? ""
                : "line-through",
              color: seriesVisibility[seriesName] ? "black" : "rgba(0,0,0,0.2)",
            };

            return (
              <span
                key={seriesName}
                onClick={() => toggleDataSeries(seriesName)}
              >
                <div className="btn btn-sm bg-light" style={style}>
                  {seriesName}
                </div>
              </span>
            );
          })}
          <div
            className="btn btn-sm bg-light"
            style={{ border: "2px solid rgba(0,0,0,0.2)" }}
            onClick={resetBar}
          >
            All
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetButtons;
