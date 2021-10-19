import React from "react";
import { Link } from "react-router-dom";
import FavHeart from "../FavHeart";

const FavsBttn = () => {
  return (
    <Link to={`/favourites`}>
      <div className="Favsbttn">
        <FavHeart />
      </div>
    </Link>
  );
};

export default FavsBttn;
