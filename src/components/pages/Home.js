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
import SliderSection from "../home/SliderSection";

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
      <div className="h-two"></div>
      <Navbar />
      <Main />
      <div className="full-section">
        <OurCategories />

        <SliderSection />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Home;
