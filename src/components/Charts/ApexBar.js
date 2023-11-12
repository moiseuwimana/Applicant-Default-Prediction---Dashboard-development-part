import React, { forwardRef, useImperativeHandle } from "react";
import ReactApexChart from "react-apexcharts";
import { useData } from "../API/DataContext";
import "./ApexBar.css";
import { useMyContext } from "../API/MyContext";

const ApexBar = forwardRef((props, ref) => {
  const { data, loading, error } = useData();
  const { seriesVisibility, toggleDataSeries, resetBar } =
    useMyContext();

  // Expose the childFunction to the parent component through the ref
  useImperativeHandle(ref, () => ({
    toggleDataSeries,
    resetBar,
  }));

  if (data) {
    const categories = Object.keys(data["Property Area and Loan Status"]);
    const updatedSeries = [
      {
        name: "Approved",
        data: Object.values(
          data["Loan Status Based on Property Area"]["Approved"]
        ),
        color: seriesVisibility["Approved"]
          ? "rgba(0,150,0,1)"
          : "rgba(0,150,0,0.1)",
      },
      {
        name: "Not Approved",
        data: Object.values(
          data["Loan Status Based on Property Area"]["Not Approved"]
        ),
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
        max: 200,
      },
      fill: {
        colors: updatedSeries.map((series) => series.color),
      },
      legend: {
        show: false,
        // showForSingleSeries: true,
        // customLegendItems: ["Approved","Not Approved"],
        // markers: {
        //   fillColors: [
        //     seriesVisibility['Approved'] ? 'rgba(0,150,0,1)' : 'gray',
        //     seriesVisibility['Not Approved'] ? 'rgba(200,0,0,1)' : 'gray',
        //   ],
        // },
      },
      plotOptions: {
        bar: {
          columnWidth: "30",
        },
      },
      title: {
        text: "Loan Status Based on the Property Area",
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
  }
  if (error) {
    return <div>Erro: {error.message}</div>;
  }
  if (loading) {
    return <div>Loading data...</div>;
  }
});

export default ApexBar;
