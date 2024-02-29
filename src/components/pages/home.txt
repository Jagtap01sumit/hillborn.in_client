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

const Home = () => {
  const navigate = useNavigate();
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
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
    <div>
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
      {/* </div> */}

      <nav className="n-one">
        <div className="nav-emp">
          {/* <div className="n-one-one"> */}
          {/* <div className="n-two"> */}
          {/* <img
              src="https://www.myknot.club/images/logo%20black.png"
              alt=""
              className="n-img1"
            /> */}
          {/* </div> */}
          <div className="popup">
            <div className={popupClasses}>
              {isOpen && (
                <div className=" top-0 left-0 w-full h-12 bg-red-500 text-white flex items-center justify-center z-50">
                  <p className="popupText">Experience seamless accessibility on both web and mobile platforms, where our service unfolds at your fingertips</p>
                  <button
                    className="absolute  right-1 p-2 text-white hover:text-red-500"
                    onClick={closePopup}
                  >
                    X
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="nav-c">
            {show1 === true ? (
              <div className="nav-d">
                {/* <div className="n-three"> */}
                <ul className="h-listcontrol">
                  {/* </div> */}
                  <div className="logo">
                    <li className="list-ele nav-heading">
                      <Link to="/">Hillborn</Link>
                    </li>
                  </div>
                  <div className="nav-btn">
                    {" "}
                    <li className="h-list-item nav-extra">
                      {localStorage.getItem("userID") ? (
                        <Link
                          onClick={() => {
                            userLogout();
                          }}
                        >
                          Logout
                        </Link>
                      ) : (
                        <Link to="/login">Login</Link>
                      )}
                    </li>
                    <li className="h-list-item nav-extra">
                      {localStorage.getItem("userID") ? (
                        <Link to="/cart">Cart</Link>
                      ) : (
                        <Link to="/register">Signup</Link>
                      )}
                    </li>
                    {/* </ul> */}
                  </div>
                </ul>
              </div>
            ) : // </div>
            undefined}
            {/* </div>  */}
          </div>

          {show2 === true ? (
            <>
              <li className="list-ele m-nav-overrider1"></li>
              <div className="menu-btn">
                <li
                  className="list-ele m-nav-overrider2"
                  onClick={() => {
                    overlayset();
                  }}
                >
                  Menu
                </li>
              </div>
            </>
          ) : undefined}
          {/* </div> */}
          <div className="list-nav">
            <>
              <li className="h-list-item">
                <Link to="/">Home</Link>
              </li>
              <li className="h-list-item">
                <Link to="/aboutus">About Us</Link>
              </li>
              <li className="h-list-item">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="h-list-item">
                {localStorage.getItem("userID") ? (
                  <Link to="/cart">Cart</Link>
                ) : (
                  <Link to="/register">Signup</Link>
                )}
              </li>
              <li className="h-list-item">
                <Link to="admin" smooth={true}>
                  Other Services
                </Link>
              </li>
            </>
          </div>
          <div className="last-nav">
            <div className="list-nav">
              <>
                <li className="h-list-item">
                  <p
                    className="h-p1"
                    onClick={() => scrollToCategory("category-Educational")}
                  >
                    Education
                  </p>
                </li>
                <li className="h-list-item">
                  <p
                    className="h-p1"
                    onClick={() => scrollToCategory("category-Services")}
                  >
                    Services
                  </p>
                </li>
                <li className="h-list-item">
                  <p
                    className="h-p1"
                    onClick={() => scrollToCategory("category-Manufacturing")}
                  >
                    Manufacturing
                  </p>
                </li>
                <li className="h-list-item">
                  <p
                    className="h-p1"
                    onClick={() => scrollToCategory("category-Healthcare")}
                  >
                    Healthcare
                  </p>
                </li>
                <li className="h-list-item">
                  <p
                    className="h-p1"
                    onClick={() => scrollToCategory("category-Spa")}
                  >
                    Spa
                  </p>
                </li>
                <li className="h-list-item">
                  <p
                    className="h-p1"
                    onClick={() => scrollToCategory("category-Non Profit")}
                  >
                    Non Profit
                  </p>
                </li>
              </>
            </div>
          </div>
        </div>
      </nav>

      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="content"
        >
          <div className="text-content">
            <h1 className="h-h1">
              <p className="text">Discover, Explore, Connect, Thrive</p>
            </h1>
            {/* <p className="h-p2">Select your dream website from our rich collection</p> */}
            <p className="h-p2">
              Welcome to our new collection of websites and apps for all your
              projects. We hope you discover the website or instant app of your
              dreams here. Begin your journey with our carefully curated
              selections
            </p>
            <div className="search">
              <form action="" className="search-form">
                <input
                  type="text"
                  placeholder="ex. yoga"
                  name="search-bar"
                ></input>
                <button type="submit">
                  <BsSearch />{" "}
                </button>
              </form>
            </div>
            <div className="h-four">
              <button
                className="h-btn1"
                onClick={() => {
                  navigate("/collection");
                }}
              >
                View Collection
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="img"
        >
          <img src={Img}></img>
        </motion.div>
      </div>
      <div className="full-section">
        <p className="h-pmain">Our categories</p>

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
        </div>
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
                    <Slider {...settings}>
                      {mainstate.themes &&
                        mainstate.themes.map((eles, indexs) => {
                          if (eles.category === `${ele.name}`) {
                            return <Card data={eles} key={indexs} />;
                          }
                        })}
                    </Slider>
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
