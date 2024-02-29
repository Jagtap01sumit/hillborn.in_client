import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../css/admin.css";
import Dashboard from "./Admin/Dashboard";
import AdminProducts from "./Admin/AdminProducts";
import CreateTheme from "./Admin/CreateTheme";
import Productlist from "./Admin/Productlist.js";
import Navbar from "./Navbar";
import AddCategory from "./Admin/AddCategory";
import Orders from "./Admin/Orders.js";
import { FcBusinessman } from "react-icons/fc";

const Admin = () => {
  const [adminDisplay, setAdminDisplay] = useState("Dashboard");
  function displayAdmin(value) {
    setAdminDisplay(value);
  }

  const [showdiv, setShowDiv] = useState(<Dashboard />);

  return (
    <>
      {/* <Navbar /> */}
      <div className="adm-one">
        <div className="adm-sidebar">
          <div className="adm-s-one">
            <div className="adm-s-one1">
              <FcBusinessman />
            </div>
            <div className="adm-s-one2">
              <p className="adm-p1">Leston Aaron Salis</p>
              <p className="adm-p3">lestonaaron321@gmail.com</p>
            </div>
          </div>
          <div
            className="adm-child"
            onClick={() => {
              setShowDiv(<Dashboard />);
            }}
          >
            <i className="bi bi-bar-chart-fill adm-icon2"></i>{" "}
            <p className="adm-p2">Dashboard</p>
          </div>
          <div
            className="adm-child"
            onClick={() => {
              setShowDiv(<CreateTheme />);
            }}
          >
            <i className="bi bi-bag-plus-fill adm-icon2"></i>{" "}
            <p className="adm-p2">Add Product</p>
          </div>
          <div
            className="adm-child"
            onClick={() => {
              setShowDiv(<AddCategory />);
            }}
          >
            <i class="bi bi-card-list adm-icon2"></i>
            <p className="adm-p2">Add Category</p>
          </div>
          <div
            className="adm-child"
            onClick={() => {
              setShowDiv(<Orders />);
            }}
          >
            <i className="bi bi-bookmark-plus-fill adm-icon2"></i>
            <p className="adm-p2">Orders</p>
          </div>
          {/* <div className="adm-child" onClick={()=>{
            setShowDiv(<AdminProducts/>)
          }}> */}
          <div
            className="adm-child"
            onClick={() => {
              setShowDiv(<Productlist />);
            }}
          >
            <i className="bi bi-handbag-fill adm-icon2"></i>{" "}
            <p className="adm-p2">Products</p>
          </div>
          <div className="adm-child">
            <i className="bi bi-people-fill adm-icon2"></i>{" "}
            <p className="adm-p2">Cusotmers</p>
          </div>
          <div className="adm-child">
            <i className="bi bi-chat-dots-fill adm-icon2"></i>
            <p className="adm-p2">Reviews</p>
          </div>
          <div className="adm-child">
            <i className="bi bi-person-video2 adm-icon2"></i>
            <p className="adm-p2">Profile</p>
          </div>
        </div>
        <div className="adm-two">{showdiv}</div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Admin;
