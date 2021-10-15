import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getMovie } from "../../functions/fetching";
import { findMatchingGenres } from "../../functions/filtering";
import Age from "../Age";
import FavHeart from "../FavHeart";
import MyContext from "../Mycontext";
import Stars from "../Stars";

interface PropsInterface {
  movieid: number;
  removeMovie: (arg0: number) => void;
}

interface ThisMovieInterface {
  id: number;
  overview: string;
  title: string;
  poster_path: string;
  adult: boolean;
  vote_count: number;
  vote_average: number;
  runtime: number;
  genres: { name: string; id: number }[];
}

const FavMovieCard: React.FC<PropsInterface> = ({ movieid, removeMovie }) => {
  const [thisMovie, setThisMovie] = useState({
    id: 0,
    overview: "",
    title: "",
    poster_path: "",
    adult: false,
    vote_count: 0,
    vote_average: 0,
    runtime: 0,
    genres: [{ name: "", id: 0 }],
  });
  const [thisGenres, setThisGenres] = useState<string>("");

  const context: { genres: number[] } = useContext(MyContext);

  useEffect(() => {
    const bringInfo = async () => {
      const movie: ThisMovieInterface = await getMovie(movieid);

      await setThisMovie(movie);

      const genresids: number[] = movie.genres.map(
        (genre: { name: string; id: number }) => genre.id
      );

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
  }: ThisMovieInterface = thisMovie;

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
            (e.target as HTMLImageElement).onerror = null;
            (e.target as HTMLImageElement).src = "./noimage.png";
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
          <p>{runtime} minutes</p>
        </div>

        <p className="favCard__textcontainer__overview">{overview}</p>

        <button className="favCard__textcontainer__bookbttn">
          Book Your Ticket
        </button>
      </div>
    </div>
  );
};

export default FavMovieCard;
