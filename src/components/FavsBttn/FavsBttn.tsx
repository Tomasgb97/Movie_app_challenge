import React from "react";
import { Link } from "react-router-dom";
import FavHeart from "../FavHeart";

const FavsBttn: React.FC = () => {
  return (
    <Link to={`/favourites`}>
      <div className="Favsbttn">
        <FavHeart />
      </div>
    </Link>
  );
};

export default FavsBttn;
