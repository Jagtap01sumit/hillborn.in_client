import React, { useContext, useState } from "react";
import "../../css/admin/productlist.css";
import Appcontext from "../../context/Appcontext";

const Productlist = () => {
  const mainstate = useContext(Appcontext);
  let count = 0;

  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [themeid, setThemeid] = useState();
  const [upscreen, setUpscreen] = useState(false);

  async function themeUpdater(theme) {
    setUpscreen(true);
    setTitle(theme.title);
    setPrice(theme.price);
    setCategory(theme.category);
    setDescription(theme.description);
    setThemeid(theme._id);
  }
  const [searchQuery, setSearchQuery] = useState("");
  async function updateTheme(themeID) {
    try {
      // await fetch(`http://localhost/api/themes/getonetheme`, {
      await fetch(`http://localhost/api/themes/getonetheme`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          themeID: themeID,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data.theme);
          if (data.success === true) {
            themeUpdater(data.theme);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTheme(themeID) {
    try {
      if (!themeID) {
        console.warn("Theme not selected");
        return;
      }
      console.log(themeID);
      const response = await fetch(
        `http://localhost/api/themes/deletetheme/${themeID}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            themeID,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function submitHandlerUpdate() {
    try {
      await fetch(`http://localhost/api/themes/updatetheme`, {
        // await fetch(`http://65.0.19.30:3001/api/themes/updatetheme`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          themeID: themeid,
        },
        body: JSON.stringify({
          title,
          price,
          description,
          category,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          if (data.success == true) {
            setUpscreen(false);
            setCategory(null);
            setDescription(null);
            setPrice(null);
            setThemeid(null);
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
      <div className="o-one m-2">
        <div className="o-two">
          {upscreen ? (
            <div className="up-screen">
              <input
                type="text"
                placeholder="Title"
                className="up-input"
                value={title}
                style={{ marginTop: "61px" }}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Description"
                className="up-input"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Category"
                className="up-input"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
              <input
                type="number"
                placeholder="Price"
                className="up-input"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
              <button
                className="up-btn"
                onClick={() => {
                  submitHandlerUpdate();
                }}
              >
                Submit
              </button>
              <button
                className="up-btn"
                style={{ marginLeft: "49px" }}
                onClick={() => {
                  setUpscreen(false);
                }}
              >
                Cancel
              </button>
            </div>
          ) : null}

          <div class="max-w-4xl mx-auto">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div class="p-4">
                <label for="table-search" class="sr-only">
                  Search
                </label>
                <div class="relative mt-1">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="table-search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500  block w-80 pl-10 p-2.5  dark:bg-gray-300 placeholder-gray-400 text-black  focus:border-black"
                    placeholder="Search for Title.."
                  ></input>
                </div>
              </div>
              {upscreen ? null : (
                <table className="w-full border-none">
                  <thead class="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-500 border-none dark:text-gray-400">
                    <tr className="bg-gray-400 text-white">
                      <th scope="col" class="p-4"></th>
                      <th scope="col" class="px-6 py-3 text-white">
                        Title
                      </th>
                      <th scope="col" class="px-6 py-3 text-white">
                        Category
                      </th>
                      <th scope="col" class="px-6 py-3 text-white">
                        Price
                      </th>
                      <th scope="col" class="px-6 py-3 text-white">
                        View
                      </th>
                      <th scope="col" class="px-6 py-3 text-white">
                        Delete
                      </th>
                      <th scope="col" class="px-6 py-3 text-white">
                        Update
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-none text-base">
                    <>
                      {mainstate.themes
                        ? mainstate.themes
                            .filter((ele) =>
                              ele.title
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase())
                            )

                            .map((ele, index) => {
                              return (
                                <tr class="text-black bg-slate-100 hover:bg-slate-200">
                                  <td class="w-4 p-4">{++count}</td>
                                  <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                  >
                                    {ele.title}
                                  </th>
                                  <td class="px-6 py-4">{ele.category}</td>
                                  <td class="px-6 py-4">{ele.price}</td>
                                  <td class="px-6 py-4 ">
                                    <a
                                      href={`${ele.siteurl}`}
                                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                      View
                                    </a>
                                  </td>
                                  <td class="px-6 py-4">
                                    <button
                                      onClick={() => {
                                        deleteTheme(ele._id);
                                      }}
                                      className="p-2"
                                    >
                                      Delete
                                    </button>
                                  </td>
                                  <td class="px-6 py-4">
                                    <button
                                      onClick={() => {
                                        updateTheme(ele._id);
                                      }}
                                      className="p-2"
                                    >
                                      update
                                    </button>
                                  </td>
                                </tr>
                              );
                            })
                        : null}
                    </>
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productlist;
