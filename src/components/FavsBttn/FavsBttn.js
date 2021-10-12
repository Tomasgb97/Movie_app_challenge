import React from "react";
import { Link } from "react-router-dom";
import FavHeart from "../FavHeart";

export default function FavsBttn() {
  return (
    <Link to={`/favourites`}>
      <div className="Favsbttn">
        Favs
        <FavHeart />
      </div>
    </Link>
  );
}
