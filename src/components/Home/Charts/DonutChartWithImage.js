import React from "react";
import Chart from "react-apexcharts";
import "./DonutChartWithImage.css";
import { useData } from "../../API/DataContext";
import { useIdentifiers } from "../../API/IdentifiersContext";

const ExampleChart = ({ genderIcon, title, gender }) => {
  const { data } = useData();
  const { approvedColor, notApprovedColor } = useIdentifiers();


  const chartData = {
    series: Object.values(data["Gender-dependent loan status"][gender]),

    options: {
      chart: {
        type: "donut",
      },
      labels: Object.keys(data["Gender-dependent loan status"][gender]),
      legend: {
        show: false,
      },
      title: {
        text: title,
        align: "center",
        offsetY: 0,
      },
      fill: {
        colors: [approvedColor, notApprovedColor],
      },
      colors: [approvedColor, notApprovedColor], // tooltip background color
    },
  };

  const style = {
    top: 80,
    left: 60,
    position: "absolute",
    width: "100px",
  };

  return (
    <div className="container custom-container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 d-flex justify-content-center">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="donut"
            width="300"
          />
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center">
          <img src={genderIcon} alt="genderIcon" className="d-flex" style={style} />
        </div>
      </div>
    </div>
  );
};

export default ExampleChart;
