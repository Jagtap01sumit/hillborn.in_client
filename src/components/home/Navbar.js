import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [showDropdown, setShowDropdown] = useState(false);
  const [drop, setDrop] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  console.log(localStorage.getItem("useID"));
  function userLogout() {
    localStorage.removeItem("userID");
    window.location.reload();
  }

  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navelement = [
    {
      title: "Home",
      route: "/",
    },
    {
      title: "Services",
      subtitle: [
        {
          title: "Sports",
          route: "category-Sports",
        },
        {
          title: "E-Commerce",
          route: "category-Ecommerce",
        },
        {
          title: "Portfolio",
          route: "category-Portfolio",
        },
        {
          title: "Non Profit",
          route: "category-Non Profit",
        },
        {
          title: "Services",
          route: "category-Services",
        },
        {
          title: "Aerospace",
          route: "category-Aerospace",
        },
        {
          title: "Chemical",
          route: "category-Chemical",
        },
        {
          title: "Transport",
          route: "category-Transport",
        },
        {
          title: "Manufacturing",
          route: "category-Manufacturing",
        },
        {
          title: "Heavy",
          route: "category-Heavy",
        },
        {
          title: "Electric",
          route: "category-Electric",
        },
        {
          title: "Healthcare",
          route: "category-Healthcare",
        },
        {
          title: "Yoga",
          route: "category-Yoga",
        },
        {
          title: "Spa",
          route: "category-Spa",
        },
      ],
    },
    {
      title: "About us",
      route: "/aboutus",
    },
    {
      title: "Contact us",
      route: "/contact",
    },
  ];
  const scrollToCategory = (categoryName) => {
    const categoryElement = document.getElementById(categoryName);

    if (categoryElement) {
      window.scrollTo({
        top: categoryElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const dropdown = () => {
    setDrop(!drop);
  };
  return (
    // <nav className=" bg-white font-serif border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <nav
      className={`${
        isSticky ? "bg-gray-900 text-white" : "bg-transparent"
      } p-4 fixed w-full top-0 z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span
            className={`${
              isSticky ? "dark:text-white light:text-black" : "text:black"
            } self-center text-2xl font-semibold whitespace-nowrap `}
          >
            Hillborn
          </span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
          onClick={toggleDropdown}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            showDropdown ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-multi-level"
        >
          <ul
            className={`${
              (isSticky ? "text-white   " : "text-black",
              showDropdown ? "mb-2 text-white bg-gray-900" : "mb-0 text-black")
            } flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700`}
          >
            {/* showDropdown ? "text-white bg-gray-900 " : "text-black") */}
            {navelement.map((nav, index) => (
              <li
                key={index}
                className={`${
                  showDropdown
                    ? "mb-2 text-white bg-gray-700"
                    : "mb-0 text-black"
                }`}
              >
                {nav.subtitle ? (
                  <button
                    onClick={dropdown}
                    className={`${
                      (isSticky && showDropdown
                        ? "mb-2 text-white bg-gray-700"
                        : "mb-0 text-white",
                      isSticky ? "text-white" : "text-black")
                    } flex items-center justify-between w-full py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto `}
                  >
                    {nav.title}
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    to={nav.route}
                    className={`block py-2 px-3 ${
                      isSticky ? "bg-gray-900 text-white" : "text-black"
                    } rounded md:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent `}
                  >
                    {nav.title}
                  </Link>
                )}

                {drop && nav.subtitle && (
                  <div
                    className={`absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${
                      drop ? "block" : "hidden"
                    }`}
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownLargeButton"
                    >
                      {nav.subtitle.map((subNavItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => scrollToCategory(subNavItem.route)}
                          >
                            {subNavItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            {localStorage.getItem("userID") ? (
              <button
                className={`block py-2 px-3 mb-2  ${
                  (showDropdown
                    ? "mb-2 text-white bg-gray-700"
                    : "mb-0 text-white",
                  isSticky ? "text-white" : "text-gray-700")
                } rounded md:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent`}
              >
                <Link to="/cart">Cart</Link>
              </button>
            ) : (
              <button
                className={`block py-2 px-3 mb-2  ${
                  (showDropdown
                    ? "mb-2 text-white bg-gray-700"
                    : "mb-0 text-white",
                  isSticky ? "text-white" : "text-gray-700")
                } rounded md:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent`}
              >
                <Link to="/register">Register</Link>
              </button>
            )}
            {localStorage.getItem("userID") ? (
              <button
                className={`block py-2 px-3 mb-2  ${
                  (showDropdown
                    ? "mb-2 text-white bg-gray-700"
                    : "mb-0 text-white",
                  isSticky ? "text-white" : "text-gray-700")
                } rounded md:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent`}
                onClick={userLogout}
              >
                Logout
              </button>
            ) : (
              <button
                className={`block py-2 px-3 mb-2  ${
                  (showDropdown
                    ? "mb-2 text-white bg-gray-700"
                    : "mb-0 text-white",
                  isSticky ? "text-white" : "text-gray-700")
                } rounded md:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent`}
              >
                <Link to="/login">Login</Link>
              </button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
