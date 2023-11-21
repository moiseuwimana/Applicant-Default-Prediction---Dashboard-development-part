import React, { forwardRef, useImperativeHandle } from "react";
import ReactApexChart from "react-apexcharts";
import { useData } from "../../API/DataContext";
import "./ApexBar.css";
import { useIdentifiers } from "../../API/IdentifiersContext";

const ApexBar = forwardRef(({feature,icons}, ref) => {
  const { data } = useData();
  const { seriesVisibility, toggleDataSeries, resetBar, isMobile, isExtraSmall } = useIdentifiers();

  // Expose the childFunction to the parent component through the ref
  useImperativeHandle(ref, () => ({
    toggleDataSeries,
    resetBar,
  }));



  // const y = 
  const categories = Object.keys(data[feature]);

  const annotationSvg = categories.map((categories, index) => (
    {
      x: categories,
      y:0,
      marker: {
        size:0
      },
      image: {
        width: 40, 
        path: icons[index], 
        offsetY: isMobile?15:15, 
      },
    }
  ));


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
      labels: {
        rotate: isMobile?-70:-45,
        // maxHeight:50,
        offsetY:6,
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#00f000',
        height: 9,
        offsetX: 0,
        offsetY: 17
    },
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
        columnWidth: isMobile?"20":"30",
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
      style:{
          fontSize: isMobile?'10px':'15px'
        }
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
    annotations : {
      points : isExtraSmall?undefined:annotationSvg
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
