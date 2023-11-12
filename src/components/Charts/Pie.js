import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const data = [44, 55, 41, 17, 15];
  const chartOptions = {
    plotOptions: {
      pie: {
        customScale: 1,
        offsetX: 0,
        offsetY: 0,
        dataLabels: {
          offset: 0,
        },
        donut: {
          size: '75%', // Adjust the size of the pie here
        },
      },
    },
    tooltip: {
      x: {
        show: true,
      },
      y: {
        formatter: function (val) {
          return val + '%';
        },
      },
    },
    colors: ['#00800B', '#00E396', '#FEB019', '#FF4560', '#775DD0'],
  };

  return (
    <div id="chart">
      <ReactApexChart options={chartOptions} series={data} type="donut" height="350" />
    </div>
  );
};

export default PieChart;
