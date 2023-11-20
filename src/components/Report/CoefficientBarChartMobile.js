import React from 'react'
import { useData } from '../API/DataContext';
import ReactApexChart from 'react-apexcharts';

function CoefficientBarChartMobile() {
  const {data} = useData()

  // Determine colors based on positive (green) and negative (red) values
  const colors = Object.values(data['standardized feature importance']).map(value => (value < 0 ? '#FF0000' : '#00FF00'));

  console.log('colorscolors',colors)

  const chartData = {
    options: {
      chart: {
        id: 'bar',
      },
      xaxis: {
        categories: Object.keys(data['standardized feature importance']),
        labels: {
          rotate: -70, // Adjust the rotation angle as needed
        },
      },
      
      yaxis:{
        title:{
          text: 'Feature Importance'
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          dataLabels: {
            position: 'top'
          }
        },
      },
      dataLabels: {
        enabled: false,
        offsetY: -20,
        style: {
          fonstSize:'12px',
          colors: ["#304758"]
        }
      },
      title: {
        text: "Influencer features",
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
      colors:['#00D000']
      

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

export default CoefficientBarChartMobile
