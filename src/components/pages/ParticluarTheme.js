import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/particulartheme.css";
import Navbar from "./Navbar";
import Review from "./Review";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ParticluarTheme = () => {
  const [show, setShow] = useState(false);
  const [themedata, setThemeData] = useState();
  const [rating, setRating] = useState();
  const [comment, setComment] = useState();

  const { id } = useParams();

  const userID = localStorage.getItem("userID");
  useEffect(() => {
    // fetch(`https://myknot-official.herokuapp.com/api/themes/getonetheme`, {
    // fetch(`http://65.0.19.30:3001/api/themes/getonetheme`, {
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
        console.log(data.theme);
        setThemeData(data.theme);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toastoptions = {
    position: "top-center",
    autoClose: 1000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  async function submitHandler() {
    if (!rating || !comment) {
      toast.warning("Please fill all the fields", toastoptions);
      return;
    } else {
      if (!userID) {
        toast.warning("Please login to rate product", toastoptions);
        return;
      } else {
        if (rating > 5 || rating < 0) {
          toast.warning("Please rate in range of 5", toastoptions);
          return;
        } else {
          setShow(false);
          try {
            await fetch(`http://localhost/api/auth/getuserdetails`, {
              // await fetch(`http://65.0.19.30:3001/api/auth/getuserdetails`, {
              // await fetch(`https://myknot-official.herokuapp.com/api/auth/getuserdetails`, {
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
                if (data.success == true) {
                  // console.log("data",data.user.name)

                  setTimeout(() => {
                    fetch(`http://localhost/api/themes/createreview`, {
                      // fetch(`http://65.0.19.30:3001/api/themes/createreview`, {
                      // fetch(`https://myknot-official.herokuapp.com/api/themes/createreview`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        themeID: id,
                        userID: userID,
                        // userName:username
                        userName: data.user.name,
                      },
                      body: JSON.stringify({
                        rating: rating,
                        comment: comment,
                      }),
                    })
                      .then((res) => {
                        return res.json();
                      })
                      .then((data2) => {
                        window.location.reload(true);
                        return data2;
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }, 1000);
                }
              })
              .catch((error) => {
                console.log(error);
              });
          } catch (error) {
            console.log("error", error);
          }
        }
      }
    }
  }

  function addtoCart() {
    try {
      if (userID) {
        fetch("http://localhost/api/cart/addtocart", {
          // fetch("http://65.0.19.30:3001/api/cart/addtocart", {
          // fetch("https://myknot-official.herokuapp.com/api/cart/addtocart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            themeID: id,
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

  return (
    <>
      <Navbar />
      {themedata ? (
        <>
          <h3 className="ptc-h3">{themedata.title}</h3>
          <p className="ptc-pone">By Myknot</p>
          <div className="ptc-one">
            <div className="ptc-two">
              <div className="ptc-two-child">
                <img src={themedata.img} alt="" className="ptc-imgone" />
              </div>
              <h3 className="ptc-h3-three">Description</h3>
              <p className="ptc-pfive">{themedata.description}</p>
              <a
                className="ptc-btnone overcut"
                href={themedata.siteurl}
                target="_blank"
              >
                Live Preview
              </a>
            </div>
            <div className="ptc-two">
              <div className="ptc-boxone">
                <h2 className="ptc-h2">Price : &#8377;{themedata.price}</h2>
                <p className="ptc-ptwo">&#10003; Quality checked by Myknot</p>
                <p className="ptc-ptwo">
                  &#10003; Included:6 months support from Myknot
                </p>
                <p className="ptc-ptwo">&#10003; Well Documented</p>
                <button className="ptc-btntwo">Buy Now</button>
                <button
                  className="ptc-btntwo"
                  onClick={() => {
                    addtoCart();
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="ptc-three">
            <h3 className="ptc-h3-two">Reviews</h3>
            <button
              className="ptc-btnfive"
              onClick={() => {
                show == false ? setShow(true) : setShow(false);
              }}
            >
              Rate product
            </button>
            {show == true ? (
              <div className="ptc-four">
                <input
                  type="number"
                  placeholder="Rating"
                  className="ptc-inputone"
                  value={rating}
                  onChange={(e) => {
                    setRating(e.target.value);
                  }}
                />
                <textarea
                  placeholder="Write your review here"
                  className="ptc-textareaone"
                  cols="30"
                  rows="5"
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                ></textarea>
                <button
                  className="ptc-btnfour"
                  onClick={() => {
                    submitHandler();
                  }}
                >
                  Submit
                </button>
              </div>
            ) : null}
            {themedata
              ? themedata.reviews.map((ele, index) => {
                  return <Review data={ele} />;
                })
              : null}
          </div>
        </>
      ) : null}
      <ToastContainer />
    </>
  );
};

export default ParticluarTheme;
