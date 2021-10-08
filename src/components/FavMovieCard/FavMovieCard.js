import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovie } from "../../functions/fetching";
import Age from "../Age";
import FavHeart from "../FavHeart";
import Stars from "../Stars";

export default function FavMovieCard({movieid}) {

  const[thisMovie, setThisMovie] = useState({})

  useEffect(() => {
    
    const bringInfo = async()=>{

     const movie = await getMovie(movieid);

     await setThisMovie(movie)
    }

    bringInfo();

  }, [])

  const {id, overview, title, poster_path, adult, genres, vote_count, vote_average, runtime} = thisMovie;

  return (
    <div className="favCard__container">
      <div className="favCard__imagecontainer">
        <Link className="favCard__imagecontainer__link" to={`/movies/${id}`}>
          <div className="favCard__top">
            <Age boolean={adult}></Age>
            <FavHeart isfav={true}></FavHeart>
          </div>
          <img
            alt="poster"
            className="favCard__imagecontainer__image"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "./noimage.png";
            }}
          ></img>
        </Link>
        <div className="favCard__bottom">
          <span className="favCard__bottom__genre">
            {"Action, Drama, Thriller"}
          </span>
          <div className="favCard__bottom__flex">
            <Stars stars={vote_average}></Stars>
            <span className="favCard__bottom__flex__reviews">
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

        <p className="favCard__textcontainer__overview">
          {overview}
        </p>

        <button class="favCard__textcontainer__bookbttn">
          Book Your Ticket
        </button>
      </div>
    </div>
  );
}
