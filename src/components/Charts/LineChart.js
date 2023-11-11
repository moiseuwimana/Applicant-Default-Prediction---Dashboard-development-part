import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Line, Pie } from 'react-chartjs-2'

import { useData } from '../API/DataContext';


function LineChart() {
  const {data, loading, error} = useData();
 
  
  if (data){
    const data_ = {
      labels: Object.keys(data['Loan Status']),
      datasets: [{
        data: Object.values(data['Loan Status']),
        backgroundColor: ['#36A0EB', '#FF6384']
      }]
    }

    const options = {
      // parsing: {
      //   yAxisKey: 'Gender'
      // }
    }





    return (
      <div className='bg-white border border-secondary'>
        <Pie 
        data={data_} 
        options={options}
        ></Pie>
      </div>
    )
  }
}

export default LineChart
