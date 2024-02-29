import React from 'react'
import {Pie} from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"
import "../../../css/admin/dashboard.css"

const DoughnutChart = ({chartData}) => {
  return (
    
    <>
    <div className="chart-wrap">
    <Pie data={chartData} />
    </div>
   
    
    </>
    
  )
}

export default DoughnutChart
