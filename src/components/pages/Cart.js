import React, { useEffect, useState } from "react";
import Navbar from "../home/Navbar";
import "../css/cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const [cartitem, setCartItem] = useState();
  const userID = localStorage.getItem("userID");

  function getCartItems() {
    try {
      fetch("http://localhost/api/cart/getcartitems", {
        // fetch("http://65.0.19.30:3001/api/cart/getcartitems",{
        // fetch("https://myknot-official.herokuapp.com/api/cart/getcartitems",{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          userID: userID,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data.cartitems)
          setCartItem(data.cartitems);
          return data;
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  function emptyCart() {
    try {
      fetch("http://localhost/api/cart/deleteallfromcart", {
        // fetch("http://65.0.19.30:3001/api/cart/deleteallfromcart",{
        // fetch("https://myknot-official.herokuapp.com/api/cart/deleteallfromcart",{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          userID: userID,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data.cartitems)
          // setCartItem(data.cartitems)
          if (data.success == true) {
            getCartItems();
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

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <>
      <Navbar />
      <div className="cart-one">
        <h1 className="cart-h1">Your cartitems</h1>
        <button
          className="cart-btnone"
          onClick={() => {
            emptyCart();
          }}
        >
          <i className="fa-solid fa-trash-can cart-icon1"></i>Empty cart
        </button>
        {cartitem
          ? cartitem.map((ele, index) => {
              return <CartItem data={ele} key={index} />;
            })
          : undefined}
      </div>
    </>
  );
};

export default Cart;
