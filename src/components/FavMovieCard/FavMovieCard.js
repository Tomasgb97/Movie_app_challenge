import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getMovie } from "../../functions/fetching";
import { findMatchingGenres } from "../../functions/filtering";
import Age from "../Age";
import FavHeart from "../FavHeart";
import MyContext from "../Mycontext";
import Stars from "../Stars";

export default function FavMovieCard({ movieid, removeMovie }) {
  const [thisMovie, setThisMovie] = useState({});
  const [thisGenres, setThisGenres] = useState("");

  const context = useContext(MyContext);

  useEffect(() => {
    const bringInfo = async () => {
      const movie = await getMovie(movieid);

      await setThisMovie(movie);

      const genresids = movie.genres.map((genre) => genre.id);

      await setThisGenres(findMatchingGenres(context.genres, genresids));
    };

    bringInfo();
  }, []);

  const {
    id,
    overview,
    title,
    poster_path,
    adult,
    vote_count,
    vote_average,
    runtime,
  } = thisMovie;

  return (
    <div className="favCard__container">
      <div className="favCard__imagecontainer">
        <div className="favCard__imagecontainer__top">
          <Age boolean={adult}></Age>
          <div
            onClick={() => {
              removeMovie(movieid);
            }}
          >
            <FavHeart isfav={true}></FavHeart>
          </div>
        </div>
        <Link
          className="favCard__imagecontainer__link"
          to={`/movies/${id}`}
        ></Link>
        <img
          alt="poster"
          className="favCard__imagecontainer__image"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "./noimage.png";
          }}
        ></img>
        <div className="favCard__imagecontainer__bottom">
          <span className="favCard__imagecontainer__bottom__genre">
            {thisGenres}
          </span>
          <div className="favCard__imagecontainer__bottom__flex">
            <Stars stars={vote_average}></Stars>
            <span className="favCard__imagecontainer__bottom__flex__reviews">
              {vote_count} Reviews
            </span>
          </div>
        </div>
      </div>
      <div className="favCard__textcontainer">
        <div className="favCard__textcontainer__titleflex">
          <h2>{title}</h2>
          <p>{runtime}</p>
        </div>

        <p className="favCard__textcontainer__overview">{overview}</p>

        <button class="favCard__textcontainer__bookbttn">
          Book Your Ticket
        </button>
      </div>
    </div>
  );
}
