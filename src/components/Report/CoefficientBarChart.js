import React from 'react'
import { useData } from '../API/DataContext';
import ReactApexChart from 'react-apexcharts';

function CoefficientBarChart() {
  const {data} = useData()
  console.log('gggggg',Object.values(data['standardized feature importance']))

  const chartData = {
    options: {
      chart: {
        id: 'bar',
      },
      xaxis: {
        categories: Object.keys(data['standardized feature importance']),
      },
      yaxis:{
        title:{
          text: 'Feature Importance (standardized)'
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
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
          colors: ["#304758"]
        }
      },
      title: {
        text: "Influencer features for Loan Approval",
        align: 'center',
        style: {
          color: '#444'
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

    },
    series: [
      {
        name: 'Series 1',
        data: Object.values(data['standardized feature importance']),
      },
    ],
  };


  return (
    <div>
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
    </div>
  )
}

export default CoefficientBarChart
