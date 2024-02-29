import React, { useRef, useEffect, useState } from "react";
import Card from "../Card";
import { motion, useInView } from "framer-motion";
import "./cardlist.css";

const themes = [
  {
    _id: "635559de876e5125031301cb",
    title: "EduHub",
    description: " Education Community",
    img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666537949/bkg9zhz1zblvujiesmps.png",
    price: 9999,
    category: "Educational",
    siteurl: "https://goutham4391.github.io/education-eduhub/",
    __v: 0,
    numOfReviews: 0,
    reviews: [],
  },
  {
    _id: "63555a88876e5125031301cd",
    title: "Perfect Learn",
    description: "College website.",
    img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666538119/f2nnls9pyfd2bjlunos5.png",
    price: 9999,
    category: "Educational",
    siteurl: "https://goutham4391.github.io/education-perfect-learn/",
    __v: 0,
    numOfReviews: 0,
    reviews: [],
  },

  {
    _id: "63557c962c6b7aaf8fbbad87",
    title: "EduHub",
    description: "Education Community",
    img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666546836/dqmpej8e1ia6vgo6ho0t.png",
    price: 9999,
    category: "Educational",
    siteurl: "https://goutham4391.github.io/education-eduhub/",
    __v: 0,
    numOfReviews: 0,
    reviews: [],
  },
  {
    _id: "63557c962c6b7aaf8fbbad87",
    title: "EduHub",
    description: "Education Community",
    img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666546836/dqmpej8e1ia6vgo6ho0t.png",
    price: 9999,
    category: "Educational",
    siteurl: "https://goutham4391.github.io/education-eduhub/",
    __v: 0,
    numOfReviews: 0,
    reviews: [],
  },
  {
    _id: "63557c962c6b7aaf8fbbad87",
    title: "EduHub",
    description: "Education Community",
    img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666546836/dqmpej8e1ia6vgo6ho0t.png",
    price: 9999,
    category: "Educational",
    siteurl: "https://goutham4391.github.io/education-eduhub/",
    __v: 0,
    numOfReviews: 0,
    reviews: [],
  },
  {
    _id: "63557c962c6b7aaf8fbbad87",
    title: "EduHub",
    description: "Education Community",
    img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666546836/dqmpej8e1ia6vgo6ho0t.png",
    price: 9999,
    category: "Educational",
    siteurl: "https://goutham4391.github.io/education-eduhub/",
    __v: 0,
    numOfReviews: 0,
    reviews: [],
  },
];
export default function Cart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const uniqueCategories = [...new Set(themes.map((theme) => theme.category))];
  const [cardsVisible, setCardsVisible] = useState(0);
  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCardsVisible((prev) => prev + 1);
      }, 8000); // Adjust the delay between card animations (400ms in this example)

      return () => {
        clearInterval(timer);
      };
    }
  }, [isInView]);
  return (
    <>
      <div id="categories">
        <motion.li
          ref={ref}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3 }}
        >
          {uniqueCategories.map((category, index) => (
            <div key={index} className="card-container">
              <h3 className="category-title">{category}</h3>
              <div className="card-list">
                {themes
                  .filter((theme) => theme.category === category)
                  .map((theme, themeIndex) => (
                    <Card data={theme} key={themeIndex} />
                  ))}
              </div>
            </div>
          ))}
        </motion.li>
      </div>
    </>
  );
}
