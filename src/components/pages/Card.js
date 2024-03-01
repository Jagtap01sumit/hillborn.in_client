import React from "react";
import Rating from "./Rating";
import "../css/card.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const userID = localStorage.getItem("userID");
  const themeID = data._id;

  const toastoptions = {
    position: "top-center",
    autoClose: 1000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  function addtoCart() {
    try {
      if (userID) {
        fetch("http://localhost/api/cart/addtocart", {
          // fetch("http://65.0.19.30:3001/api/cart/addtocart", {
          // fetch("https://myknot-official.herokuapp.com/api/cart/addtocart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            themeID: themeID,
            userID: userID,
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data.success);
            if (data.success === true) {
              toast.success("Added to cart successfully", toastoptions);
            } else {
              toast.error("Not added to cart", toastoptions);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        toast.warning("Please login to add to cart", toastoptions);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function paymentstatusCheck() {
    if (userID) {
      navigate(`/payement/clientdetails/${data._id}`);
    } else {
      toast.warning("You need to login to proceed", toastoptions);
      setTimeout(() => {
        navigate("login");
      }, 2000);
    }
  }
  return (
    <>
      <div className="card-one  ">
        <div className="card-two ">
          <img
            src={data.img}
            alt=""
            className="card-img1"
            onClick={() => {
              navigate(`/getparticulartheme/${data._id}`);
            }}
          />
        </div>
        <div className="card-three">
          <div className="card-three-child1">
            <p className="card-p1">{data.title}</p>
            {/* <p className="card-p2">{data.description}</p> */}
            <Rating value={4.5} review={2} />
            <div
              className="addtocart"
              onClick={() => {
                addtoCart();
              }}
            >
              <i className="fa-solid fa-cart-shopping cart-icon"></i>
            </div>
          </div>
          <div className="card-three-child2">
            <p className="card-p3">
              <a href={data.siteurl} target="_blank" className="card-anchor">
                Live Preview
              </a>
            </p>
            <p className="card-p4">
              {/* <Link to={`/payement/clientdetails/${data._id}`} className="card-anchor" >
                Buy at &#8377; {data.price}
              </Link> */}
              <p
                onClick={() => {
                  paymentstatusCheck();
                }}
                className="card-anchor-override"
              >
                Buy at &#8377; {data.price}
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
