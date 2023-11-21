import React from 'react'
import { useData } from '../API/DataContext';
import ReactApexChart from 'react-apexcharts';

import incomeSvg from '../../svg/hand-money-dollar-coin-icon.svg';
import loanAmountSvg from '../../svg/debt-icon.svg';
import loanTermSvg from '../../svg/alarm-icon.svg';
import genderSvg from '../../svg/gender.svg';
import marriedSvg from '../../svg/hugging-romance-icon.svg';
import dependentsSvg from '../../svg/kids-children-icon.svg'
import educationSvg from '../../svg/student-boy-icon.svg'
import selfEmployedSvg from '../../svg/businessman-task-time-icon.svg';
import creditHistorySvg from '../../svg/payday-icon.svg';
import propertyAreaSvg from '../../svg/town-city-icon.svg'
import { useIdentifiers } from '../API/IdentifiersContext';





function CoefficientBarChart() {
  const {isMobile} = useIdentifiers()
  const {data} = useData()
  
  const colors = Object.values(data['standardized feature importance']).map(value => (value < 0 ? '#D00000' : '#00D000'));
  const labelColors = Object.values(data['standardized feature importance']).map(value => (value < 0 ? '#500000' : '#009000'));


  const svgs = [incomeSvg,incomeSvg,loanAmountSvg,loanTermSvg,genderSvg,marriedSvg,dependentsSvg,educationSvg,selfEmployedSvg,creditHistorySvg,propertyAreaSvg];
  const categories = Object.keys(data['standardized feature importance'])
  const yData = Object.values(data['standardized feature importance'])
  // const offsetY = Object.values(data['standardized feature importance']).map(value => (value < 0 ? 0 : -20));
  const y = Object.values(data['standardized feature importance']).map(value=>(value<0?0:value))

  

  const annotationSvg = categories.map((categories, index) => (
    {
      x: categories,
      y:y[index],
      marker: {
        size:0
      },
      image: {
        width: isMobile?10:35, 
        path: svgs[index], 
        offsetY: isMobile?-15:-27, 
      },
    }
  ));


  const chartData = {
    options: {
      chart: {
        id: 'bar',
        toolbar: {
          show: false,
          tools: {
            download: false,
          },
        },
      },
      xaxis: {
        categories,
        labels: {
          rotate: isMobile?-70:-45,
          maxHeight:150,
          style: {
            colors : labelColors,
            fontSize: isMobile?'9.5px':'11.5px'
          }
        },
      },
      yaxis:{
        // min: -2,
        // max: 4,
        title:{
          text: isMobile?'Feature Importance':'Feature Importance (standardized)'
        },
      },
      annotations : {
        points : annotationSvg
      },
      plotOptions: {
        bar: {
          distributed: true,
          borderRadius: isMobile?5:10,
          dataLabels: {
            position: 'top'
          }
        }
      },
      dataLabels: {
        enabled: isMobile?false:true,
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
          color: '#444',
          fontSize: isMobile?'10px':'20px'
        }
      },
      colors,
      legend: {
        show: false
      }

    },
    series: [
      {
        name: 'Series 1',
        data: yData,
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
