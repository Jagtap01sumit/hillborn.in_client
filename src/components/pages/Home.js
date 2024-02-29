import React, { useContext, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllThemes } from "../../state/actions/themeActions.js";
import Appcontext from "../context/Appcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Img from "../utils/img/bg-img.png";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";
import Navbar from "../home/Navbar";
import Main from "../home/Main";
import OurCategories from "../home/OurCategories";

const Home = () => {
  const navigate = useNavigate();
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

  const mainstate = useContext(Appcontext);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [themes, setThemes] = useState();
  const [isOpen, setIsOpen] = useState(true);
  function getScreenWidth() {
    let a = window.screen.width;
    return a;
  }
  useEffect(() => {
    let swidth = getScreenWidth();

    if (swidth > 501) {
      setShow1(true);
      setShow2(false);
    } else {
      setShow1(false);
      setShow2(true);
    }
  }, []);

  function overlayset() {
    if (mainstate.overlay === true) {
      mainstate.setOverlay(false);
    } else {
      mainstate.setOverlay(true);
    }
  }

  function userLogout() {
    localStorage.removeItem("userID");
  }
  const scrollToCategory = (categoryName) => {
    const categoryElement = document.getElementById(categoryName);

    if (categoryElement) {
      window.scrollTo({
        top: categoryElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const handleSearch = (query) => {
    setSearchTerm(query);

    // Filter categories based on the search query
    const filtered = mainstate.categories.filter((ele) =>
      ele.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCategories(filtered);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredCategories([]);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  const popupClasses = isOpen
    ? "fixed top-0 left-0 w-full h-12 bg-blue-500 text-white transform translate-y-0 transition-transform"
    : "fixed top-0 left-0 w-full h-0 bg-blue-500 text-white transform -translate-y-32 transition-transform";

  return (
    <div className="bg-gray-100">
      {/* <div className="h-one"> */}
      {/* <img
          src="https://cdn.pixabay.com/photo/2015/03/13/17/39/road-672036_960_720.jpg"
          alt=""
          className="h-img1"
          onClick={() => {
            navigate("/");
          }}
        /> */}
      <div className="h-two"></div>
      <Navbar />
      <Main />
      <div className="full-section">
        {/* <p className="h-pmain">Our categories</p>

        <div className="h-three">
          <div className="h-three-flexer">
            <div className="h-flex-childs" data-aos="fade-out">
              <i
                className="fa-solid fa-graduation-cap h-icon1"
                onClick={() => scrollToCategory("category-Educational")}
              ></i>
              <p className="h-p1">education</p>
            </div>
            <div className="h-flex-childs" data-aos="fade-out">
              <i className="fa-solid fa-baseball-bat-ball h-icon1"></i>
              <p
                className="h-p1"
                onClick={() => scrollToCategory("category-Sports")}
              >
                Sports
              </p>
            </div>
            <div className="h-flex-childs" data-aos="fade-out">
              <i
                className="fa-solid fa-cart-shopping h-icon1"
                onClick={() => scrollToCategory("category-Ecommerce")}
              ></i>

              <p className="h-p1">Ecommerce</p>
            </div>
            <div className="h-flex-childs" data-aos="fade-out">
              <i
                className="fa-solid fa-user-tag h-icon1"
                onClick={() => scrollToCategory("category-Portfolio")}
              ></i>
              <p className="h-p1">Portfolio</p>
            </div>
            <div className="h-flex-childs" data-aos="fade-out">
              <i
                className="fa-solid fa-circle-dollar-to-slot h-icon1"
                onClick={() => scrollToCategory("category-Non Profit")}
              ></i>
              <p className="h-p1">Non Profit</p>
            </div>
            <div className="h-flex-childs" data-aos="fade-out">
              <i
                className="fa-solid fa-bell-concierge h-icon1"
                onClick={() => scrollToCategory("category-Services")}
              ></i>
              <p className="h-p1">Services</p>
            </div>
            <div className="h-flex-childs" data-aos="fade-out">
              <i
                className="fa-solid fa-plane-departure h-icon1"
                onClick={() => scrollToCategory("category-Aerospace")}
              ></i>
              <p className="h-p1">Aerospace</p>
            </div>
            <div className="h-flex-childs" data-aos="fade-out">
              <i
                className="fa-solid fa-flask-vial h-icon1"
                onClick={() => scrollToCategory("category-Chemical")}
              ></i>
              <p className="h-p1">chemical</p>
            </div>
            <div className="h-flex-childs" data-aos="fade-out">
              <i
                className="fa-solid fa-car-side h-icon1"
                onClick={() => scrollToCategory("category-Transport")}
              ></i>
              <p className="h-p1">Transport</p>
            </div>
            <div className="h-flex-childs" data-aos="fade-out">
              <i
                className="fa-solid fa-industry h-icon1"
                onClick={() => scrollToCategory("category-Manufacturing")}
              ></i>
              <p className="h-p1">Manufacturing</p>
            </div>
            <div className="h-flex-childs" data-aos="fade-out">
              <i
                className="fa-solid fa-tractor h-icon1"
                onClick={() => scrollToCategory("category-Heavy")}
              ></i>
              <p className="h-p1">Heavy</p>
            </div>
            <div className="h-flex-childs" data-aos="fade-out">
              <i
                className="fa-solid fa-plug h-icon1"
                onClick={() => scrollToCategory("category-Electric")}
              ></i>
              <p className="h-p1">Electric</p>
            </div>
            <div className="h-flex-childs" data-aos="fade-out">
              <i
                className="fa-solid fa-suitcase-medical h-icon1"
                onClick={() => scrollToCategory("category-Healthcare")}
              ></i>
              <p className="h-p1">Healthcare</p>
            </div>
            <div className="h-flex-childs" data-aos="fade-out">
              <i
                className="fa-solid fa-arrow-trend-up h-icon1"
                onClick={() => scrollToCategory("category-Economic")}
              ></i>
              <p className="h-p1">Economic</p>
            </div>
            <div className="h-flex-childs" data-aos="fade-out">
              <i
                class="fa-solid fa-spa h-icon1"
                onClick={() => scrollToCategory("category-Spa")}
              ></i>
              <p className="h-p1">Spa</p>
            </div>
            <div className="h-flex-childs" data-aos="fade-out">
              <i
                class="fa-solid fa-leaf h-icon1"
                onClick={() => scrollToCategory("category-Yoga")}
              ></i>
              <p className="h-p1">Yoga</p>
            </div>
          </div>
        </div> */}
        <OurCategories />
        <div id="categories">
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Home;
