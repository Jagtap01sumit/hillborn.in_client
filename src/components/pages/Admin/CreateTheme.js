// import React, { useEffect, useState } from "react";
// import "../../css/admin/createtheme.css";

// const CreateTheme = () => {
//   const [fileInputState, setFileInputState] = useState("");
//   const [previewSource, setPreviewSource] = useState();
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState(9999);
//   const [category, setCategory] = useState("");
//   const [siteurl, setSiteUrl] = useState("");
//   const [categoryarray,setCategoryarray]=useState()

//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     previewFile(file);
//   };

//   const previewFile = (file) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => [setPreviewSource(reader.result)];
//   };

//   const handelSubmitFile = (e) => {
//     console.log("submitting");
//     e.preventDefault();
//     if (!previewSource) {
//       return;
//     }
//     uploadImage(previewSource);
//   };

//   async function createTheme(imgurl) {
//     try {
//       await fetch(
//         "http://localhost/api/themes/createtheme",
//         {
//           method: "POST",
//           body: JSON.stringify({
//             img: imgurl,
//             title,
//             description,
//             category,
//             price,
//             siteurl,
//           }),
//           headers: { "Content-type": "application/json" },
//         }
//       )
//         .then((res) => {
//           return res.json();
//         })
//         .then((data) => {
//           console.log(data);
//           return data;
//         })
//         .catch((error) => {
//           return error;
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const uploadImage = async (base64EncodedImage) => {
//     try {
//       await fetch("http://localhost/api/img/upload", {
//         method: "POST",
//         body: JSON.stringify({ data: base64EncodedImage }),
//         headers: { "Content-type": "application/json" },
//       })
//         .then((res) => {
//           return res.json();
//         })
//         .then((data) => {
//           console.log("is url", data);
//           createTheme(data.uploadedResponse);
//         })
//         .catch((error) => [console.log(error)]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   async function getAllCategories(){
//     await fetch("http://localhost/api/category/getallcategories",{
//       method:"GET",
//       headers: { "Content-type": "application/json" }
//     }).then((res)=>{
//       return res.json()
//     }).then((data)=>{
//       if(data.success===true){
//         setCategoryarray(data.categories)
//         console.log(categoryarray)
//       }
//     }).catch((error)=>{
//       console.log(error)
//     })
//   }

//   useEffect(()=>{
//     getAllCategories()
//   },[])

//   return (
//     <>
//       <div className="ctheme-one">
//         <h1 className="ctheme-h1">Add Theme</h1>
//         <div className="ctheme-two">
//           <div className="ctheme-two-child1">
//             <input
//               type="text"
//               className="ctheme-input1"
//               placeholder="Theme Title"
//               value={title}
//               onChange={(e) => {
//                 setTitle(e.target.value);
//               }}
//             />
//             <input
//               type="text"
//               className="ctheme-input1"
//               placeholder="Description"
//               value={description}
//               onChange={(e) => {
//                 setDescription(e.target.value);
//               }}
//             />
//             <input
//               type="text"
//               className="ctheme-input1"
//               placeholder="Price"
//               value={price}
//               onChange={(e) => {
//                 setPrice(e.target.value);
//               }}
//             />
//             <input
//               type="text"
//               className="ctheme-input1"
//               placeholder="Theme Url"
//               value={siteurl}
//               onChange={(e) => {
//                 setSiteUrl(e.target.value);
//               }}
//             />
//             <div className="ctheme-dropdown">
//               <button className="ctheme-btn">Category</button>
//               <div className="ctheme-dropdown-content">
//                 {categoryarray?categoryarray.map((ele, index) => {
//                   return (
//                     <>
//                       <p
//                         className="ctheme-p1"
//                         onClick={() => {
//                           setCategory(`${ele.name}`);
//                         }} key={index}
//                       >
//                         {ele.name}
//                       </p>
//                     </>
//                   );
//                 }):null}

//               </div>
//             </div>
//             <p
//               style={{
//                 textAlign: "center",
//                 marginBottom: "0",
//                 marginTop: "29px",
//               }}
//             >
//               Choosen Category : {category}
//             </p>
//             <input
//               type="file"
//               className="ctheme-input2"
//               value={fileInputState}
//               onChange={(e) => {
//                 handleFileInputChange(e);
//               }}
//             />
//           </div>
//           <div className="ctheme-two-child1">
//             {previewSource && (
//               <img
//                 src={previewSource}
//                 alt="Please choose file to preview"
//                 className="ctheme-img1"
//               />
//             )}
//           </div>
//         </div>
//         <button
//           className="ctheme-btn2"
//           onClick={(e) => {
//             handelSubmitFile(e);
//           }}
//         >
//           Submit
//         </button>
//       </div>
//     </>
//   );
// };

// export default CreateTheme;

import React, { useState, useEffect } from "react";
import axios from "axios";
export default function ThemesForm() {
  const [category, setCategory] = useState("");
  const [theme, setTheme] = useState({
    title: "",
    description: "",
    price: "",
    siteurl: "",
    img: "",
    category: "",
    reviewCount: "",
  });

  const [categoryarray, setCategoryarray] = useState([]);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setTheme({ ...theme, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost/sendThemesData",
        theme
      );
      console.log("Data sent successfully:", response.data);

      setTheme({
        title: "",
        description: "",
        price: "",
        siteurl: "",
        img: "",
        category: "",
        reviewCount: "",
      });
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  useEffect(() => {
    async function getAllCategories() {
      try {
        const response = await fetch(
          "http://localhost/api/category/getallcategories",
          {
            method: "GET",
            headers: { "Content-type": "application/json" },
          }
        );

        if (response.ok) {
          const data = await response.json();
          if (data.success === true) {
            setCategoryarray(data.categories);
            console.log(data.categories); // Log the fetched categories
          }
        } else {
          console.error("Failed to fetch categories");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    getAllCategories();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="p-4">
      <form method="POST">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Title
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      name
                    </span>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={theme.title}
                      onChange={handleForm}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="janesmith"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    value={theme.description}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleForm}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Price
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    value={theme.price}
                    onChange={handleForm}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="category"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div class="mt-2">
                  <select
                    id="category"
                    name="category"
                    value={theme.category}
                    onChange={handleForm}
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {categoryarray
                      ? categoryarray.map((ele, index) => (
                          <option
                            className="ctheme-p1"
                            onClick={() => {
                              setCategory(`${ele.name}`);
                            }}
                            key={index}
                          >
                            {ele.name}
                          </option>
                        ))
                      : null}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Rating
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="rating"
                    id="rating"
                    value={theme.rating}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleForm}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  siteurl
                </label>
                <div className="mt-2">
                  <input
                    id="siteurl"
                    name="siteurl"
                    value={theme.siteurl}
                    type="text"
                    onChange={handleForm}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="img"
                    value={theme.img}
                    id="img"
                    onChange={handleForm}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  No. of Reviews
                </label>
                <div className="mt-2">
                  <input
                    value={theme.reviewCount}
                    type="text"
                    name="reviewCount"
                    id="reviewCount"
                    onChange={handleForm}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
