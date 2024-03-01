import React, { useContext } from "react";
import Slider from "react-slick";
import Appcontext from "../context/Appcontext";
import Card from "../pages/Card";
export default function SliderSection() {
  const mainstate = useContext(Appcontext);
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      {" "}
      <div id="categories" className="mt-24">
        {mainstate.categories ? (
          <>
            {mainstate.categories.map((ele, index) => {
              return (
                <>
                  <div className="card-container-title">
                    <p className="h-p-mainone" id={`category-${ele.name}`}>
                      {ele.name}
                    </p>
                  </div>
                  <div className="lg:mx-40 m-10 sm:px-8 bg-white py-10 rounded-lg">
                    <Slider {...settings}>
                      {mainstate.themes &&
                        mainstate.themes.map((eles, indexs) => {
                          if (eles.category === `${ele.name}`) {
                            return <Card data={eles} key={indexs} />;
                          }
                        })}
                    </Slider>
                  </div>
                </>
              );
            })}
          </>
        ) : null}
      </div>
    </div>
  );
}
