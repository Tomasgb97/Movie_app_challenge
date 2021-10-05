import React, { useState, useEffect } from "react";
import { BsStarFill } from "react-icons/bs";

export default function Stars(props) {
  const [array, setArray] = useState([]);

  const { stars, big } = props;

  useEffect(() => {
    let starsArray = [];
    let starsAmount = parseInt(Math.round(stars) / 2); //gets rating from props and turns it into integer divided by two (ratings were 1-10 and we needed 1-5 stars);

    for (let i = 0; i < 5; i++) {
      //goes throught 1-5 and if the rating amount is higher or equal on each iteration it pushes a filled star component to  starsArray, else it pushes an empty star
      if (starsAmount > i) {
        starsArray.push(<BsStarFill className="star--filled" key={i} />);
      } else {
        starsArray.push(<BsStarFill className="star--unfilled" key={i} />);
      }
    }

    setArray(starsArray);
  }, [props]);

  return (
    <div className={big ? "stars--big" : "stars"}>
      {Object.values(array).map((each) => each)}
    </div>
  );
}
