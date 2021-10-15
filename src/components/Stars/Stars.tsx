import React, { useState, useEffect, ReactNode } from "react";
import { BsStarFill } from "react-icons/bs";

interface PropsInterface {
  stars: number;
  big?: boolean;
}

const Stars: React.FC<PropsInterface> = ({ stars, big }) => {
  const [array, setArray] = useState<ReactNode[]>([]);

  useEffect(() => {
    let starsArray: ReactNode[] = [];
    let starsAmount: number = Math.floor(stars) / 2; //gets rating from props and turns it into integer divided by two (ratings were 1-10 and we needed 1-5 stars);

    for (let i = 0; i < 5; i++) {
      //goes throught 1-5 and if the rating amount is higher or equal on each iteration it pushes a filled star component to  starsArray, else it pushes an empty star
      if (starsAmount > i) {
        starsArray.push(<BsStarFill className="star--filled" key={i} />);
      } else {
        starsArray.push(<BsStarFill className="star--unfilled" key={i} />);
      }
    }

    setArray(starsArray);
  }, [stars]);

  return (
    <div className={big ? "stars --bigstars" : "stars"}>
      {Object.values(array).map((each) => each)}
    </div>
  );
};

export default Stars;
