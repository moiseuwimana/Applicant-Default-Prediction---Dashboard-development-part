import React from "react";
import ReactApexChart from "react-apexcharts";
import "./ApexPie.css";

import { useData } from "../API/DataContext";
import { useMyContext } from "../API/MyContext";

function ApexPie() {
  const { data, loading, error } = useData();

  const {approvedColor,notApprovedColor} = useMyContext();



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
      colors: [approvedColor,notApprovedColor] // tooltip background color
      
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
