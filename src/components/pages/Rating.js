import React from 'react'


const Rating = ({value,review}) => {
    // console.log( typeof value)
    // console.log( value)
  return (

    //Rating css is rendered from showcase.css 

    <div className='rating'>
      <span className='rating-span' >
        <i className={value>=1 ? "fa-solid fa-star":value>=0.5 ?"fa-solid fa-star-half":"" }></i>
      </span>
      <span  className='rating-span'>
        <i className={value>=2 ? "fa-solid fa-star":value>=1.5 ?"fa-solid fa-star-half":"" }></i>
      </span>
      <span className='rating-span'>
        <i className={value>=3 ? "fa-solid fa-star":value>=2.5 ?"fa-solid fa-star-half":"" }></i>
      </span>
      <span className='rating-span'>
        <i className={value>=4 ? "fa-solid fa-star":value>=3.5 ?"fa-solid fa-star-half":"" }></i>
      </span>
      <span className='rating-span'>
        <i className={value>=5 ? "fa-solid fa-star":value>=4.5 ?"fa-solid fa-star-half":"" }></i>
      </span>
      <span>({4.5})</span>
    </div>
  )
}

export default Rating
