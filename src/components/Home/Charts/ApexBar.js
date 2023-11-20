import React, { forwardRef, useImperativeHandle } from "react";
import ReactApexChart from "react-apexcharts";
import { useData } from "../../API/DataContext";
import "./ApexBar.css";
import { useIdentifiers } from "../../API/IdentifiersContext";

const ApexBar = forwardRef(({feature}, ref) => {
  const { data } = useData();
  const { seriesVisibility, toggleDataSeries, resetBar } = useIdentifiers();

  // Expose the childFunction to the parent component through the ref
  useImperativeHandle(ref, () => ({
    toggleDataSeries,
    resetBar,
  }));



  const categories = Object.keys(data[feature]);
  const updatedSeries = [
    {
      name: "Approved",
      data: Object.values(
        data[feature]).map(item=>item['Approved']),
      color: seriesVisibility["Approved"]
        ? "rgba(0,150,0,1)"
        : "rgba(0,150,0,0.1)",
    },
    {
      name: "Not Approved",
      data: Object.values(
        data[feature]).map(item=>item['Not Approved']),
      color: seriesVisibility["Not Approved"]
        ? "rgba(200,0,0,1)"
        : "rgba(200,0,0,0.1)",
    },
  ];

 
  const options = {
    xaxis: {
      categories: categories,
    },
    yaxis: {
      min: 0,
      max: 450,
      title:{
        text: 'Applicants'
    },},
    fill: {
      colors: updatedSeries.map((series) => series.color),
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "30",
        borderRadius: 5,
        dataLabels: {
          position: 'top'
        }
      }
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fonstSize:'12px',
        colors: updatedSeries.map((series) => series.color)
      }
    },
    title: {
      text: `${feature}`,
      align: "center",
      offsetY: 0,
    },
    chart: {
      toolbar: {
        show: true,
        tools: {
          download: false,
        },
      },
    },
    grid: {
      borderColor: "rgba(100,0,0,0.1)",
      strokeDashArray: 4,
    },
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <ReactApexChart
            options={options}
            series={updatedSeries}
            type="bar"
            height={300}
          />
        </div>
      </div>
    </div>
  );
});

export default ApexBar;
