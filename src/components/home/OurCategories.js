import React from "react";

export default function OurCategories() {
  const scrollToCategory = (categoryName) => {
    const categoryElement = document.getElementById(categoryName);

    if (categoryElement) {
      window.scrollTo({
        top: categoryElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div>
        <p className="h-pmain">Our categories</p>
        <div className="h-three">
          <div className="h-three-flexer bg-white p-4 rounded-lg sm:m-2 lg:m-0">
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
      </div>
    </div>
  );
}
