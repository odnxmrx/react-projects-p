import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./StarRating.module.css";

//receiving # of stars from props; 5 is default
function StarRating({ numberOfStars = 5 }) {

  //track number os stars
  const [rating, setRating] = useState(0);
  //current item (star) being hovered
  const [hover, setHover] = useState(0);

  //handler, receives the index of item (star) clicked
  function handleClick(currentIndex) {
    // console.log("index en handle Click", currentIndex);
    setRating(currentIndex);
  }

  function handleMouseMove(currentIndex) {
    // console.log("index en handle Move - hover: ", currentIndex);
    setHover(currentIndex);
  }

  function handleMouseLeave() {
    // console.log("index en handle Leave - rating current val: ", rating);
    setHover(rating);
    //Mientras esté en hover, jugar con la alternación de colores.
    //prevalece el valor en 'rating' pues es el que ocurre al hacer clic
  }

  return (
    <>
      {
        [...Array(numberOfStars)].map((_, index) => {
          //set index count start at 1
          index += 1;

          return <FaStar
            key={index}
            className={index <= (hover || rating) ? styles.active : styles.inactive}
            size={40}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        })
      }
    </>
  )
}

export default StarRating;