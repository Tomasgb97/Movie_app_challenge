import React, { useState, useContext, useEffect } from "react";
import Stars from "../Stars";
import Age from "../Age";
import FavHeart from "../FavHeart";
import { Link } from "react-router-dom";
import MyContext from "../Mycontext";
import { findMatchingGenres } from "../../utils/filtering";
import {
  addMovieToFavs,
  deleteMovieFromFavs,
  favList,
  isMovieFav,
} from "../Favlist";

interface PropsInterface {
  movie: {
    title: string;
    id: number;
    vote_count: number;
    vote_average: number;
    poster_path: string;
    overview: string;
    adult: boolean;
    genre_ids: number[];
    genres?: number[] | undefined;
    release_date?: string | undefined;
  };
}

const Moviecard: React.FC<PropsInterface> = ({ movie }) => {
  const {
    title,
    id,
    vote_average,
    vote_count,
    poster_path,
    release_date,
    adult,
    genre_ids,
  } = movie;

  const context = useContext(MyContext);

  const [genres, setGenres] = useState<string>("");

  const [faved, setFaved] = useState<boolean>(false);

  useEffect(() => {
    setGenres(findMatchingGenres(context.genres, genre_ids));
  }, [context.genres, genre_ids]);

  useEffect(() => {
    if (isMovieFav(id)) {
      setFaved(true);
      console.log(favList);
    } else {
      setFaved(false);
    }
  }, [id]);

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
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              onError={(e) => {
                (e.target as HTMLImageElement).onerror = null;
                (e.target as HTMLImageElement).src = "./noimage.png";
              }}
            ></img>
          </div>
          <div className="upperPart__bottom">
            <span className="upperPart__bottom__genre">{genres}</span>
            <div className="upperPart__bottom__flex">
              <Stars stars={vote_average}></Stars>
              <span className="upperPart__bottom__flex__reviews">
                {vote_count} Reviews
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerPart">
        <h4 className="lowerPart__title">{title}</h4>
        <p className="lowerPart__duration">{release_date}</p>
      </div>
    </div>
  );
};

export default Moviecard;
