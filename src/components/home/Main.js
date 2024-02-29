import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Img from "../utils/img/bg-img.png";
import { BsSearch } from "react-icons/bs";
export default function Main() {
  const navigate = useNavigate();
  return (
    <div className=" flex items-center">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-32 sm:px-8 px-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center"
        >
          <div className=" lg:my-40 my-20 w-full">
            <div className="flex items-center justify-center font-bold sm:my-20 text-xl mb-10 lg:text-4xl">
              <p className="sm:flex sm:items-center sm:justify-center ">
                Discover, Explore, Connect, Thrive
              </p>
            </div>

            <p className="sm:flex items-center justify-start">
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
    </div>
  );
}
