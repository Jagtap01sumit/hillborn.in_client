import React, { useEffect, useState } from "react";

import "../../css/details.css";
import "../../css/login.css";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEdit } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import Navbar from "../../home/Navbar";

const Details = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [price, setPrice] = useState();

  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(false);
  const [s3, setS3] = useState(false);

  const toastoptions = {
    position: "top-center",
    autoClose: 1000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  let userID = localStorage.getItem("userID");
  const { id } = useParams();

  function updateHandler() {
    setS1(false);
    setS2(false);
    setS3(false);
  }

  async function getuserdetails() {
    await fetch(
      `https://myknot-intern-kuvc.vercel.app/api/auth/getuserdetails`,
      {
        // await fetch(`http://65.0.19.30:3001/api/auth/getuserdetails`, {
        // await fetch(`https://myknot-official.herokuapp.com/api/auth/getuserdetails`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          userID: userID,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setName(data.user.name);
        setEmail(data.user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getuserdetails();
  }, []);

  useEffect(() => {
    fetch(`http://localhost/api/themes/getonetheme`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        themeID: id,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success == true) {
          // console.log(data)
          setPrice(data.theme.price);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function proceedHandler() {
    if (!phone) {
      toast.warning("Please enter you phone number", toastoptions);
    } else {
      try {
        await fetch("http://localhost/api/payement/getclientdetails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            price,
            email,
            phone,
            name,
            customerId: userID,
          }),
        })
          .then((res) => {
            return res.json();
          })
          .then(async (data) => {
            // console.log(data)
            if (data.success == true) {
              // console.log(data.data)
              try {
                await fetch("http://localhost/api/orders/createorder", {
                  // await fetch("http://65.0.19.30:3001/api/orders/createorder", {
                  // await fetch("https://myknot-official.herokuapp.com/api/orders/createorder", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    client_id: userID,
                    name,
                    email,
                    phone,
                    amount: price,
                    created_at: data.data.data.created_at,
                    cf_orderid: data.data.data.cf_order_id,
                    my_orderid: data.data.data.order_id,
                  }),
                })
                  .then((res) => {
                    return res.json();
                  })
                  .then((data) => {
                    return data;
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              } catch (error) {
                console.log(error);
              }

              window.location.href = `${data.data.data.payment_link}`;
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

  return (
    <>
      <Navbar />
      <div className="details-section mt-20">
        <div className="d-one">
          <div className="d-two">
            <h1 className="d-h1">Check your details</h1>
          </div>
          <div className="d-three">
            <div className="d-three-childone">
              <h2 className="d-h2">
                Please check your details before you proceed to payement
              </h2>
            </div>
            <div className="d-three-childtwo">
              <div className="d-tc-one">
                <div className="details">
                  <AiFillEdit className="icons" />
                </div>
                <h4> {name}</h4>
                <button
                  onClick={() => {
                    {
                      updateHandler();
                      setShow(true);
                      setS1(true);
                    }
                  }}
                  className="d-button-update p-2 flex items-center justify-center"
                >
                  Update
                </button>
              </div>
              <div className="d-tc-one">
                <div className="details">
                  <MdEmail className="icons" />
                  <h4>{email}</h4>
                </div>
                <button
                  onClick={() => {
                    {
                      updateHandler();
                      setShow(true);
                      setS2(true);
                    }
                  }}
                  className="d-button-update p-2 flex items-center justify-center"
                >
                  Update
                </button>
              </div>
              <div className="d-tc-one">
                <div className="details">
                  <BsFillTelephoneFill className="icons" />
                  <h4> {phone}</h4>
                </div>
                <button
                  onClick={() => {
                    {
                      updateHandler();
                      setShow(true);
                      setS3(true);
                    }
                  }}
                  className="d-button-update p-2 flex items-center justify-center"
                >
                  Update
                </button>
              </div>
              <div className="d-btn2-area">
                <button
                  className="d-btn2"
                  onClick={() => {
                    proceedHandler();
                  }}
                >
                  Proceed to payement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {show ? (
        <div className="w-full flex justify-center  items-center">
          <div className="bg-blue-900 absolute top-20 flex justify-center m-3 rounded-lg">
            <div className="">
              <div className=" flex items-center justify-center text-white font-bold">
                {s1 === true ? "Name" : s2 === true ? "Email" : "Phone"}
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <textarea
                  className="w-4/5"
                  name=""
                  id=""
                  cols="40"
                  rows="10"
                  value={s1 === true ? name : s2 === true ? email : phone}
                  onChange={(e) => {
                    s1 === true
                      ? setName(e.target.value)
                      : s2 === true
                      ? setEmail(e.target.value)
                      : setPhone(e.target.value);
                  }}
                ></textarea>
                <button
                  onClick={() => {
                    setShow(false);
                    updateHandler();
                  }}
                  className="flex bg-white p-2 m-2 rounded-xl"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <ToastContainer />
    </>
  );
};

export default Details;
