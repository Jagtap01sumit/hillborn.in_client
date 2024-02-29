import React, { useEffect, useState } from "react";
import "../css/cart.css";

const CartItem = ({ data }) => {
  const userID = localStorage.getItem("userID");

  // console.log(data)
  const [theme, setTheme] = useState([]);

  function getThisTheme() {
    try {
      //  fetch(`https://myknot-official.herokuapp.com/api/themes/getonetheme`, {
      // fetch(`http://65.0.19.30:3001/api/themes/getonetheme`, {
      fetch(`http://localhost/api/themes/getonetheme`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          themeID: data.themeID,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data.theme);
          setTheme(data.theme);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  function removeOneTheme() {
    try {
      fetch("http://localhost/api/cart/deletefromcart", {
        // fetch("http://65.0.19.30:3001/api/cart/deletefromcart",{
        // fetch("https://myknot-official.herokuapp.com/api/cart/deletefromcart",{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          userID: userID,
          cartitemID: data._id,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data)

          if (data.success == true) {
            // console.log("deleted successfully")
            window.location.reload(true);
          }
          return data;
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }
  function getScreenWidth() {
    let a = window.screen.width;
    return a;
  }
  let swidth = getScreenWidth();

  useEffect(() => {
    getThisTheme();
  }, []);

  return (
    <>
      <div className="cart-two">
        {theme ? (
          <>
            <div className="cart-twocone">
              <img src={theme.img} alt="" className="cart-imgone" />
            </div>
            <div className="cart-twoctwo">
              <h3 className="cart-h3">{theme.title}</h3>
              <h4 className="cart-h4">Price : {theme.price}</h4>
              <p className="cart-buttons buy-btn">
                <i className="fa-solid fa-indian-rupee-sign cart-icon1"></i> Buy
                now
              </p>
              <p
                className="cart-buttons remove-btn"
                onClick={() => {
                  removeOneTheme();
                }}
              >
                <i className="fa-solid fa-trash-can cart-icon1"></i>{" "}
                {swidth > 501 ? "Remove from cart" : "Remove"}
              </p>
            </div>
          </>
        ) : undefined}
      </div>
    </>
  );
};

export default CartItem;
