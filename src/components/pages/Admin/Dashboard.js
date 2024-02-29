import React, { useState } from 'react'
import { Pie } from 'react-chartjs-2'
import "../../css/admin/dashboard.css"
import DoughnutChart from './charts/DoughnutChart'
import PieChart from "./charts/PieChart"
import {orderStatus,stock} from "./Dummydata"

const Dashboard = () => {
  console.log(orderStatus[0].name)

  const [ordesdata,setOrdersData]=useState({
    // type: 'doughnut',
    labels:orderStatus.map((data2,index)=>{
      return data2.name
    }),
    datasets:[{
      label:"Order Status",
      data:orderStatus.map((data3,index)=>{
        return data3.num
      }),
      backgroundColor:["#74db74","#be61e8","#ff8888"]
        }]
  })

  const [stockdata,setStockData]=useState({
    labels:stock.map((data4,index)=>{
      return data4.name
    }),
    datasets:[{
      label:"Stock",
      data:stock.map((data5,index)=>{
        return data5.num
      }),
      backgroundColor:["#74db74","#be61e8","#ff8888"]
      
    }]
  })

  return (
   <div className="dash-one">
    <div className="dash-two">
      <div className="dash-two-child">
        <div className="dash-t-c-super">
        <div className="dash-circle1"><p className='dash-p1'><i className="bi bi-cash-coin dash-icon-c1"></i></p></div>
        </div>
        <div className="dash-t-c-super1">
          <p className="dash-p2">Total sales amount</p>
          <p className="dash-p3">&#8377;  986532</p>
        </div>
      
      </div>
      <div className="dash-two-child">
      <div className="dash-t-c-super">
      <div className="dash-circle2"><p className='dash-p1'><i className="bi bi-truck dash-icon-c1" ></i></p></div>
      </div>
        <div className="dash-t-c-super1">
        <p className="dash-p2">Total ordres delivered</p>
          <p className="dash-p3">56</p>
        </div>
      </div>
      <div className="dash-two-child">
      <div className="dash-t-c-super">
      <div className="dash-circle3"><p className='dash-p1'><i className="bi bi-handbag dash-icon-c1"></i></p></div>
      </div>
        <div className="dash-t-c-super1">
        <p className="dash-p2">Total products</p>
          <p className="dash-p3">34</p>
        </div>
      </div>
    </div>


    <div className="dash-three">
      <div className="dash-three-child1">
      <p className="chart-title">ORDER STATUS</p>
        <DoughnutChart  chartData={ordesdata}/>

      </div>
      <div className="dash-three-child1">
      <p className="chart-title">STOCK DATA</p>
      <PieChart chartData={stockdata}/>
      </div>
    </div>

   </div>
  )
}

export default Dashboard
