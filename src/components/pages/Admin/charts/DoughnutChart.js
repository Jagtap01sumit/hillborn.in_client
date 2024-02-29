import React from 'react'
import {Pie,Doughnut} from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"
import "../../../css/admin/dashboard.css"

const DoughnutChart = ({chartData}) => {
  return (
    
    <>
    <div className="chart-wrap">
    <Doughnut data={chartData} />
    </div>
   
    
    </>
    
  )
}

export default DoughnutChart
