import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
import Appcontext from "../context/Appcontext";

const Footer = () => {
  const mainstate = useContext(Appcontext);

  async function fullthemes() {
    try {
      //  await fetch("http://65.0.19.30:3001/api/themes/getallthemes",{
      await fetch("http://localhost/api/themes/getallthemes", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.success === true) {
            console.log(data);
            mainstate.setThemes(data.themes);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllCategories() {
    try {
      // await fetch("http://65.0.19.30:3001/api/category/getallcategories",{
      await fetch("http://localhost/api/category/getallcategories", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.success === true) {
            mainstate.setCategories(data.categories);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fullthemes();
    getAllCategories();
  }, []);

  return (
    <>
      <div className="f-one bg-gray-900">
        <div className="f-two">
          {/* <p className="f-p1">ShopX</p> */}
          <p className="f-p2">
            <Link to="/contact">Visit help center</Link>
          </p>

          <div className="f-three">
            <div className="f-three-child">
              <ul className="f-list">
                <li className="list-head">Company</li>
                <li className="f-list-ele">
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li className="f-list-ele">
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li className="f-list-ele">
                  <Link to="/login">Login</Link>
                </li>
                <li className="f-list-ele">
                  <Link to="/register">SignUp</Link>
                </li>
                {/* <li className="f-list-ele"></li>
                    <li className="f-list-ele"></li>
                    <li className="f-list-ele"></li> */}
              </ul>
            </div>
            <div className="f-three-child">
              <ul className="f-list">
                <li className="list-head">Products</li>
                <li className="f-list-ele">Ecommerce</li>
                <li className="f-list-ele">Sports</li>
                <li className="f-list-ele">Services</li>
                <li className="f-list-ele">Healthcare</li>
                <li className="f-list-ele">Heavy Industry</li>
              </ul>
            </div>
            <div className="f-three-child">
              <ul className="f-list f-list-lastone ">
                <li className="list-head">Contact Us</li>
                {/* <li className="f-list-ele cutoff">&nbsp;</li> */}
                <li className="f-list-ele"></li>
                <li className="f-list-ele f-l-e-over">
                  <Link to="https://instagram.com/hillborn_technologies?igshid=OGQ5ZDc2ODk2ZA==">
                    <i className="fa-brands fa-instagram f-icon"></i>
                  </Link>
                </li>
                {/* <li className="f-list-ele cutoff">&nbsp;</li> */}
                <li className="f-list-ele f-l-e-over">
                  <Link to="https://www.linkedin.com/company/hillborn-technologies-private-limited/">
                    <i className="fa-brands fa-linkedin f-icon"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="f-three-child">
              <ul className="f-list f-list-lastone">
                <li className="list-head cutoff">&nbsp;</li>
                {/* <li className="f-list-ele cutoff">&nbsp;</li> */}
                <li className="f-list-ele cutoff"></li>
                <li className="f-list-ele f-l-e-over">
                  <Link to="https://www.facebook.com/profile.php?id=100092124730505">
                    <i className="fa-brands fa-facebook f-icon"></i>
                  </Link>
                </li>
                {/* <li className="f-list-ele cutoff">&nbsp;</li> */}
                <li className="f-list-ele f-l-e-over">
                  <Link to="mailto:hillborntechnologies@gmail.com">
                    <i className="fa-solid fa-envelope f-icon"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="f-last-p">&#169; 2022 Myknot.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
