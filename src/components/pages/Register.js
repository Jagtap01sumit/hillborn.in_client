import React, { useState } from "react";
import Navbar from "../home/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");

  const toastoptions = {
    position: "top-center",
    autoClose: 1000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  async function registerHandler() {
    if (!email || !password || !name || !confirmpass) {
      toast.error("Please fill all the fields", toastoptions);
      return;
    } else {
      if (password !== confirmpass) {
        toast.error("Please check passwords", toastoptions);
        return;
      } else {
        try {
          // await fetch("https://myknot-official.herokuapp.com/api/auth/register",{
          // await fetch("http://65.0.19.30:3001/api/auth/register", {
          await fetch("http://localhost/api/auth/register", {
            method: "POST",
            body: JSON.stringify({
              email,
              password,
              name,
              confirmpassword: confirmpass,
            }),
            // withCredentials:true,
            // credentials:"include",
            headers: {
              "Content-type": "application/json",
              "Access-Control-Allow-Credentials": true,
            },
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              if (data.success === false) {
                if (data.error === "Duplicate key error") {
                  toast.error(
                    "User already exists. Please login to access",
                    toastoptions
                  );
                  return;
                }
                toast.error("", toastoptions);
                return;
              } else {
                localStorage.setItem("userID", data.user._id);
                toast.success("Signed in successfully", toastoptions);
                navigate("/");
                return data;
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  return (
    <>
      <Navbar />

      <div className="l-one">
        <div className="l-two"></div>
        <div className="l-three su-three">
          <div className="heading">
            <h1>SignUp</h1>
          </div>
          <div className="l-form">
            <div className="l-input-control">
              <input
                type="text"
                placeholder="Full Name"
                className="l-input-common"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Email"
                className="l-input-common"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                className="l-input-common"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="l-input-common"
                value={confirmpass}
                onChange={(e) => {
                  setConfirmpass(e.target.value);
                }}
              />
            </div>
            <div className="l-formbtn">
              <button
                type="submit"
                className="l-formbtn-1"
                onClick={(e) => {
                  e.preventDefault();
                  registerHandler();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Register;
