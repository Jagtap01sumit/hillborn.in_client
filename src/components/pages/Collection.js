import React, { useState } from "react";
import "../css/collection.css";
import {useSelector} from "react-redux"
import Card2 from "./Card2";
import Navbar from "./Navbar";
import Card from "./Card2";

const Collection = () => {
  // let themes= [
  //   {
  //     _id: "635254527a167c80ee93dd86",
  //     title: "Gym",
  //     description: "A website for all needs",
  //     img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666339922/vhjualfkfnffgca5ishw.png",
  //     price: 9999,
  //     category: "Sports",
  //     siteurl: "https://www.myknot.club/",
  //     __v: 0,
  //   },
  //   {
  //     _id: "6355576e876e5125031301c9",
  //     title: "Known Education",
  //     description: "Online Education website.",
  //     img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666537325/wbewjlfmsk27m3our1ef.png",
  //     price: 9999,
  //     category: "Educational",
  //     siteurl: "https://goutham4391.github.io/education-know-edu/",
  //     __v: 0,
  //   },
  //   {
  //     _id: "635559de876e5125031301cb",
  //     title: "EduHub",
  //     description: " Education Community",
  //     img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666537949/bkg9zhz1zblvujiesmps.png",
  //     price: 9999,
  //     category: "Educational",
  //     siteurl: "https://goutham4391.github.io/education-eduhub/",
  //     __v: 0,
  //   },
  //   {
  //     _id: "63555a88876e5125031301cd",
  //     title: "Perfect Learn",
  //     description: "College website.",
  //     img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666538119/f2nnls9pyfd2bjlunos5.png",
  //     price: 9999,
  //     category: "Educational",
  //     siteurl: "https://goutham4391.github.io/education-perfect-learn/",
  //     __v: 0,
  //   },
  //   {
  //     _id: "635572a42c6b7aaf8fbbad7d",
  //     title: "EduWell",
  //     description: "Graphics Education website",
  //     img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666544291/oesoyed4rnkjapoh4hpy.png",
  //     price: 9999,
  //     category: "Educational",
  //     siteurl: "https://goutham4391.github.io/education-eduwell/",
  //     __v: 0,
  //   },
  //   {
  //     _id: "635578fb2c6b7aaf8fbbad7f",
  //     title: "Online Study",
  //     description: "Online Education website.",
  //     img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666545914/oviwjyx22g50vp7ro8eh.png",
  //     price: 9999,
  //     category: "Educational",
  //     siteurl: "https://goutham4391.github.io/education-online-study/",
  //     __v: 0,
  //   },
  //   {
  //     _id: "6355799a2c6b7aaf8fbbad81",
  //     title: "Online Study",
  //     description: "Online Education website.",
  //     img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666546073/ptemrtabcmv376rhjefj.png",
  //     price: 9999,
  //     category: "Educational",
  //     siteurl: "https://goutham4391.github.io/education-online-study/",
  //     __v: 0,
  //   },
  //   {
  //     _id: "63557a322c6b7aaf8fbbad83",
  //     title: "Known Education",
  //     description: "Online Education website.",
  //     img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666546225/mghakbhtwzljozsrx7mp.png",
  //     price: 9999,
  //     category: "Educational",
  //     siteurl: "https://goutham4391.github.io/education-know-edu/",
  //     __v: 0,
  //   },
  //   {
  //     _id: "63557ac42c6b7aaf8fbbad85",
  //     title: "WebUni",
  //     description: "Online Course website.",
  //     img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666546371/qj2ahppsvlgfv7y1oxuf.png",
  //     price: 9999,
  //     category: "Educational",
  //     siteurl: "https://goutham4391.github.io/education-webuni/",
  //     __v: 0,
  //   },
  //   {
  //     _id: "63557c962c6b7aaf8fbbad87",
  //     title: "EduHub",
  //     description: "Education Community",
  //     img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666546836/dqmpej8e1ia6vgo6ho0t.png",
  //     price: 9999,
  //     category: "Educational",
  //     siteurl: "https://goutham4391.github.io/education-eduhub/",
  //     __v: 0,
  //   },
  //   {
  //     _id: "63557cf32c6b7aaf8fbbad89",
  //     title: "Lincoln  ",
  //     description: "High school website. ",
  //     img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666546930/xvnuqew1aqp0pgfbewvz.png",
  //     price: 9999,
  //     category: "Educational",
  //     siteurl: "https://goutham4391.github.io/education-lincoln/",
  //     __v: 0,
  //   },
  //   {
  //     _id: "63557d3a2c6b7aaf8fbbad8b",
  //     title: "Grad School",
  //     description: "Graduation school website.",
  //     img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666547001/faljhvt6tacwqxv47wak.png",
  //     price: 9999,
  //     category: "Educational",
  //     siteurl: "https://goutham4391.github.io/education-grad-school/",
  //     __v: 0,
  //   },
  //   {
  //     _id: "63557d762c6b7aaf8fbbad8d",
  //     title: "Education74  ",
  //     description: "Graduation college website. ",
  //     img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666547061/x1vamdpycgfdhudod83g.png",
  //     price: 9999,
  //     category: "Educational",
  //     siteurl: "https://goutham4391.github.io/education-university-edu74/",
  //     __v: 0,
  //   },
  //   {
  //     _id: "63557de72c6b7aaf8fbbad8f",
  //     title: "Charity  ",
  //     description: "Non profit Donation website.",
  //     img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666547174/rpoylflkgchewstjpee4.png",
  //     price: 9999,
  //     category: "Non Profit",
  //     siteurl: "https://goutham4391.github.io/nonprofit-charity/",
  //     __v: 0,
  //   },
  // ];

// let themes=[]


  let [theme,setTheme]=useState()
 
  
  const { themes, loading } = useSelector((state) => {
    return state.themes;
  });

  let [allThemes,setAllThemes]=useState(themes)

  function themeDisplayer(id){
    setAllThemes(null)
      for(let k of themes){
        if(k._id==id){
          setTheme(k)
        }
      }
  }

  return (
    <>
      <Navbar />
      <h1 style={{"textAlign":"center"}}>Our Categories</h1>
      <ul className="collection-listcontrol">
        <li className="collection-list-item dropdown">
          Educational
          <div className="dropdown-content">
           {
            themes && themes.map((ele,index)=>{
              if(ele.category==="Educational"){
                return  <p className="collection-p1" key={ele._id} onClick={()=>{
                  themeDisplayer(ele._id)
                }} >{ele.title}</p>
              }
            })
           }
          </div>
        </li>
        <li className="collection-list-item dropdown">Ecommerce
        <div className="dropdown-content">
        {
            themes && themes.map((ele,index)=>{
              if(ele.category==="Ecommerce"){
                return  <p className="collection-p1" key={ele._id} onClick={()=>{
                  themeDisplayer(ele._id)
                }} >{ele.title}</p>
              }
            })
           }
          </div></li>
        <li className="collection-list-item dropdown">Sports
        <div className="dropdown-content">
        {
            themes && themes.map((ele,index)=>{
              if(ele.category==="Sports"){
                return  <p className="collection-p1" key={ele._id} onClick={()=>{
                  themeDisplayer(ele._id)
                }} >{ele.title}</p>
              }
            })
           }
          </div></li>
        <li className="collection-list-item dropdown">Non Profit
        <div className="dropdown-content">
        {
            themes && themes.map((ele,index)=>{
              if(ele.category==="Non Profit"){
                return  <p className="collection-p1" key={ele._id} onClick={()=>{
                  themeDisplayer(ele._id)
                }} >{ele.title}</p>
              }
            })
           }
          </div></li>
        <li className="collection-list-item dropdown">Portfolio
        <div className="dropdown-content">
        {
            themes && themes.map((ele,index)=>{
              if(ele.category==="Portfolio"){
                return  <p className="collection-p1"  key={ele._id} onClick={()=>{
                  themeDisplayer(ele._id)
                }} >{ele.title}</p>
              }
            })
           }
          </div></li>
        <li className="collection-list-item dropdown">Services
        <div className="dropdown-content">
        {
            themes && themes.map((ele,index)=>{
              if(ele.category==="Services"){
                return  <p className="collection-p1"  key={ele._id} onClick={()=>{
                  themeDisplayer(ele._id)
                }} >{ele.title}</p>
              }
            })
           }
          </div></li>
      </ul>
      <div className="collection-one">
        {allThemes &&
          allThemes.map((ele, index) => {
            return <Card2 data={ele} />;
          })}
      {
        theme &&   <Card2 data={theme} />
      }
          
      </div>
    </>
  );
};

export default Collection;
