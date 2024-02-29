import React from 'react'
import "../css/card.css"

const Card = ({data}) => {
  console.log("DATA",data)
  return (
  <>

<div class="card-one-two">
      <div class="card-two">
        <img src={data.img} alt="" class="card-img1" />
      </div>
      <div class="card-three">
        <div class="card-three-child1">
          <p class="card-p1">{data.title}</p>
          <p class="card-p2">{data.description}</p>
        </div>
        <div class="card-three-child2">
          <p class="card-p3"><a href={data.siteurl}  target="_blank" class="card-anchor">Live Preview</a></p>
          <p class="card-p4"><a href="" class="card-anchor">Buy at &#8377; {data.price}</a></p>
        </div>
      </div>
    </div>
  
  </>
  )
}

export default Card
