import React, { useState, useContext, useEffect } from "react";
import Stars from "../Stars";
import Age from "../Age";
import FavHeart from "../FavHeart";
import { Link } from "react-router-dom";
import MyContext from "../Mycontext";
import { findMatchingGenresByProps } from "../../functions/filtering";

export default function Moviecard(props) {
  const context = useContext(MyContext);

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setGenres(findMatchingGenresByProps(context.genres, props.genres));
  }, [props]);

  const { img, adult, reviews, stars, id, title, release } = props;

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="cardContainer">
      <div className="upperPart">
        <div className="upperPart__imagecontainer">
          <Link
            className="upperPart__imagecontainer__link"
            to={`/movies/${id}`}
          >
            <img
              alt="poster"
              className="upperPart__imagecontainer__image"
              src={`https://image.tmdb.org/t/p/w500/${img}`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "./noimage.png";
              }}
            ></img>
          </Link>
          <div className="upperPart__bottom">
            <span className="upperPart__bottom__genre">{genres}</span>
            <div className="upperPart__bottom__flex">
              <Stars stars={stars}></Stars>
              <span className="upperPart__bottom__flex__reviews">
                {reviews} Reviews
              </span>
            </div>
          </div>
          <div className="upperPart__top">
            <Age boolean={adult}></Age>
            <FavHeart></FavHeart>
          </div>
        </div>
      </div>
      <div className="lowerPart">
        <h4 className="lowerPart__title">{title}</h4>
        <p className="lowerPart__duration">{release}</p>
      </div>
    </div>
  );
}
