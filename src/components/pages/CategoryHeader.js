import React from 'react'
import { Link } from 'react-router-dom'
import "../css/categoryheader.css"

const CategoryHeader = () => {
  return (
   <>
   
   <div className="ch-one">
    <ul className='ch-list-controller'>
         <li className="ch-list-child"><Link className='ch-li-link'>Mobiles</Link></li>
         <li className="ch-list-child"><Link  className='ch-li-link'>Fashion</Link></li>
         <li className="ch-list-child"><Link className='ch-li-link'>Electronics</Link></li>
         <li className="ch-list-child"><Link className='ch-li-link'>Kitchen</Link></li>
         <li className="ch-list-child"><Link className='ch-li-link'>Home & furniture</Link></li>
         <li className="ch-list-child"><Link className='ch-li-link'>Applicances</Link></li>
         <li className="ch-list-child"><Link className='ch-li-link'>Beauty</Link></li>
    </ul>
   </div>

   </>
  )
}

export default CategoryHeader
