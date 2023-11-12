import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import "./ApexPie.css";

import { useData } from "../API/DataContext";
import { useMyContext } from "../API/MyContext";

function ApexPie() {
  const { data, loading, error } = useData();
  const { selected } =
    useMyContext();

  let approvedColor = "rgba(0,150,0,1)";
  let notApprovedColor = "rgba(200,0,0,1)";
  if (selected) {
    approvedColor =
      selected === "Approved" ? "rgba(0,150,0,1)" : "rgba(0,150,0,0.1)";
    notApprovedColor =
      selected === "Not Approved" ? "rgba(200,0,0,1)" : "rgba(200,0,0,0.1)";
  }

  const [isSticky, setSticky] = useState(false);
  const [initialOffset, setInitialOffset] = useState(0);
  const stickyDivRef = React.createRef();

  useEffect(() => {
    const handleScroll = () => {
      if (stickyDivRef.current) {
        const offset = stickyDivRef.current.offsetTop;
        const isScrolledPast = window.scrollY >= offset;
  
        if (!isSticky && isScrolledPast) {
          setSticky(true);
          setInitialOffset(offset);
        } else if (isSticky && window.scrollY < initialOffset) {
          setSticky(false);
        }
      }
    };
  
    // Register event listeners for scrolling
    const registerScrollEvents = () => {
      if (stickyDivRef.current) {
        setInitialOffset(stickyDivRef.current.offsetTop);
        window.addEventListener("scroll", handleScroll);
      }
    };
  
    // Deregister the event listener when the component unmounts
    const deregisterScrollEvents = () => {
      window.removeEventListener("scroll", handleScroll);
    };
  
    registerScrollEvents(); // Register events
  
    return deregisterScrollEvents; // Deregister events on unmount
  }, [stickyDivRef, isSticky, initialOffset]);

  if (data) {
    const options = {
      chart: {
        type: "pie",
      },
      labels: Object.keys(data["Loan Status"]),
      title: {
        text: "Loan Status",
        align: "center",
        offsetY: 0,
      },
      fill: {
        colors: [approvedColor, notApprovedColor],
      },
      legend: {
        show: false,
      },
    };
    const series = Object.values(data["Loan Status"]);

    return (
      <div className="row">
        <div className="col-12">
          <div>
            <ReactApexChart
              options={options}
              series={series}
              type="pie"
              height={300}
            />
          </div>
        </div>
      </div>
    );
  }
  if (error) {
    return <div>Erro: {error.message}</div>;
  }
  if (loading) {
    return <div>Loading data...</div>;
  }
}

export default ApexPie;
