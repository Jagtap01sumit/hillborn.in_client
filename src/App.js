import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appstate from "./components/context/Appstate";
import AboutUs from "./components/pages/AboutUs";
import Admin from "./components/pages/Admin";
import Cart from "./components/pages/Cart";
import Collection from "./components/pages/Collection";
import ContactUs from "./components/pages/ContactUs";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";

import Overlaynav from "./components/pages/Overlaynav";
import ParticluarTheme from "./components/pages/ParticluarTheme";
import Details from "./components/pages/Payement/Details";
import Register from "./components/pages/Register";
import CardList from "../src/components/pages/cart/CardList";
import ThemesForm from "../src/components/pages/cart/ThemesForm";
import "./index.css";
import Protected from "./components/Protected";
const App = () => {
  return (
    <div>
      <Appstate>
        <Router>
          <Overlaynav />
          <Routes>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route
              path="/admin"
              element={
                <Protected>
                  <Admin />
                </Protected>
              }
            ></Route>
            <Route path="/collection" element={<Collection />}></Route>
            <Route
              path="/cart"
              element={
                <Protected>
                  <Cart />
                </Protected>
              }
            ></Route>

            <Route
              path="/getparticulartheme/:id"
              element={<ParticluarTheme />}
            ></Route>

            <Route
              path="/payement/clientdetails/:id"
              element={<Details />}
            ></Route>
            <Route path="/" exact={true} element={<Home />}></Route>
            <Route path="/cardlist" exact={true} element={<CardList />}></Route>
            <Route
              path="/themesform"
              exact={true}
              element={
                <Protected>
                  <ThemesForm />
                </Protected>
              }
            ></Route>
          </Routes>
          <Footer />
        </Router>
      </Appstate>
    </div>
  );
};

export default App;
