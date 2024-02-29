import React from "react";
import "../css/particulartheme.css";

const Review = ({data}) => {
  // console.log(data)
  return (
    <>
      <div className="ptc-three-child">
        <p className="ptc-pthree">
          <i class="fa-solid fa-comment ptc-icon1"></i> {data.name}
          <p className="ptc-pthree-child">{data.rating}</p>
        </p>
        <p className=" ptc-pfour">
          {data.comment}
        </p>
      </div>
    </>
  );
};

export default Review;
