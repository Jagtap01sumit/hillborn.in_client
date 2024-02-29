import React, { useEffect, useState } from "react";
import "../../css/admin/createtheme.css";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState();

  async function getAllCategories() {
    // await fetch("http://65.0.19.30:3001/api/category/getallcategories",{
    await fetch("http://localhost/api/category/getallcategories", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setCategories(data.categories);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  async function handelSubmit() {
    try {
      if (category) {
        // await fetch("http://65.0.19.30:3001/api/category/createcategory",{
        await fetch("http://localhost/api/category/createcategory", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            name: category,
          }),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.success === true) {
              setCategory("");
              getAllCategories();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteHandler(catID) {
    try {
      await fetch("http://localhost/api/category/deletecategory", {
        // await fetch("http://localhost/api/category/deletecategory",{
        method: "DELETE",
        headers: { "Content-type": "application/json", catID },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.success === true) {
            getAllCategories();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="ctheme-one">
        <h1 className="ctheme-h1">Add Category</h1>
        <div className="ctheme-two">
          <div className="ctheme-two-child1">
            <input
              type="text"
              className="ctheme-input1 over"
              placeholder="Theme Title"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <button
              className="submit-categorybtn"
              onClick={(e) => {
                handelSubmit(e);
              }}
            >
              Submit
            </button>
          </div>

          <div className="ctheme-two-child1">
            <div className="over2">
              {categories
                ? categories.map((ele, index) => {
                    return (
                      <div className="over2childs" key={index}>
                        {ele.name}{" "}
                        <i
                          class="fa-solid fa-trash-can"
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={() => {
                            deleteHandler(ele._id);
                          }}
                        ></i>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
