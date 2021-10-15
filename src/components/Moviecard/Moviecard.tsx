import React, { useState, useContext, useEffect } from "react";
import Stars from "../Stars";
import Age from "../Age";
import FavHeart from "../FavHeart";
import { Link } from "react-router-dom";
import MyContext from "../Mycontext";
import { findMatchingGenres } from "../../functions/filtering";
import {
  addMovieToFavs,
  deleteMovieFromFavs,
  favList,
  isMovieFav,
} from "../Favlist";

interface PropsInterface {
  img: String;
  adult: boolean;
  reviews: number;
  stars: number;
  id: number;
  title: String;
  release: string;
  genresids: number[];
}

const Moviecard: React.FC<PropsInterface> = ({
  img,
  adult,
  reviews,
  stars,
  id,
  title,
  release,
  genresids,
}) => {
  const context = useContext(MyContext);

  const [genres, setGenres] = useState<string[]>([""]);

  const [faved, setFaved] = useState<boolean>(false);

  useEffect(() => {
    setGenres(findMatchingGenres(context.genres, genresids));
  }, []);

  useEffect(() => {
    if (isMovieFav(id)) {
      setFaved(true);
      console.log(favList);
    } else {
      setFaved(false);
    }
  }, []);

  const fav = () => {
    addMovieToFavs(id);
    setFaved(true);
  };

  const unfav = () => {
    deleteMovieFromFavs(id);
    setFaved(false);
  };

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="cardContainer">
      <div className="upperPart">
        <div className="upperPart__imagecontainer">
          <div>
            <div className="upperPart__top">
              <Age boolean={adult}></Age>
              <div
                onClick={() => {
                  faved ? unfav() : fav();
                }}
              >
                <FavHeart isfav={faved ? true : false}></FavHeart>
              </div>
            </div>
            <Link
              className="upperPart__imagecontainer__link"
              to={`/movies/${id}`}
            ></Link>
            <img
              alt="poster"
              className="upperPart__imagecontainer__image"
              src={`https://image.tmdb.org/t/p/w500/${img}`}
              onError={(e) => {
                (e.target as HTMLImageElement).onerror = null;
                (e.target as HTMLImageElement).src = "./noimage.png";
              }}
            ></img>
          </div>
          <div className="upperPart__bottom">
            <span className="upperPart__bottom__genre">{genres}</span>
            <div className="upperPart__bottom__flex">
              <Stars stars={stars}></Stars>
              <span className="upperPart__bottom__flex__reviews">
                {reviews} Reviews
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerPart">
        <h4 className="lowerPart__title">{title}</h4>
        <p className="lowerPart__duration">{release}</p>
      </div>
    </div>
  );
};

export default Moviecard;
