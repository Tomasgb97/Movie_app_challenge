import React from "react";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import MyContext from "../../components/Mycontext";
import { AiFillPlayCircle } from "react-icons/ai";
import Stars from "../../components/Stars";
import Age from "../../components/Age";
import FavHeart from "../../components/FavHeart";
import Cast from "../../components/Cast";
import { findMatchingGenres } from "../../utils/filtering";
import { getCast, getMovie } from "../../utils/fetching";
import {
  isMovieFav,
  deleteMovieFromFavs,
  addMovieToFavs,
} from "../../components/Favlist";

import { CastInterface, MoviePageMovie } from "../../interfaces";

interface StateInterface {
  adult: boolean;
  cast: CastInterface[];
  vote_count: number;
  vote_average: number;
  fetchedgenres: number[];
  movie: MoviePageMovie;
  genres: string;
  isfav: boolean;
}

class MoviePage extends React.Component<
  RouteComponentProps<{ id: string }>,
  StateInterface
> {
  static contextType = MyContext;
  context!: React.ContextType<typeof MyContext>;

  state = {
    adult: false,
    cast: [{ id: 0, name: " ", profile_path: " " }],
    vote_count: 0,
    vote_average: 0,
    fetchedgenres: [0],
    movie: {
      title: "",
      id: 0,
      vote_count: 0,
      vote_average: 0,
      poster_path: "",
      overview: "",
      adult: false,
      genres: [0],
      genre_ids: [0],
    },
    genres: "",
    isfav: false,
  };

  favAction = () => {
    if (this.state.isfav) {
      this.setState({ isfav: false });
      deleteMovieFromFavs(this.state.movie.id);
    } else {
      this.setState({ isfav: true });
      addMovieToFavs(this.state.movie.id);
    }
  };

  componentDidMount() {
    let idNumber: number = parseInt(this.props.match.params.id); //gets id of the movie and formats it;

    const fetchedMovies: MoviePageMovie[] = Object.values(this.context.fetched);

    let movieIsFetched = fetchedMovies.find((movie) => movie.id === idNumber);

    const setmovie = async () => {
      if (movieIsFetched !== undefined) {
        this.setState({
          movie: movieIsFetched,
          fetchedgenres: movieIsFetched.genre_ids,
        });
        await this.setState({
          genres: findMatchingGenres(
            this.context.genres,
            movieIsFetched.genre_ids
          ),
        });
      } else {
        const movie = await getMovie(idNumber);
        let genres: number[] = movie.genres.map(
          (one: { id: number }) => one.id
        );
        this.setState({
          movie: {
            title: movie.title,
            poster_path: movie.poster_path,
            adult: movie.adult,
            vote_count: movie.vote_count,
            overview: movie.overview,
            vote_average: movie.vote_average,
            id: movie.id,
            genre_ids: [0],
          },
          fetchedgenres: genres,
        });
      }

      this.setState({
        genres: findMatchingGenres(
          this.context.genres,
          this.state.fetchedgenres
        ),
      });
    };

    if (isMovieFav(idNumber)) {
      this.setState({ isfav: true });
    }

    setmovie();

    const setCast = async () => {
      const cast = await getCast(idNumber);
      this.setState({ cast: cast });
    };

    setCast();

    this.context.setActualPage(idNumber);
  }

  render() {
    const { movie, isfav, genres, cast } = this.state;

    return (
      <div className="body">
        <div className="imgcontainer">
          <img
            alt={`${movie.title} poster`}
            className="imgcontainer__img"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          ></img>
        </div>

        <div className="main">
          <div className="main__upper">
            <div className="main__upper__topflex">
              <Link to={"/"} className="main__upper__topflex__backbttn">
                Back
              </Link>
              <div style={{ cursor: `pointer` }} onClick={this.favAction}>
                <FavHeart isfav={isfav}></FavHeart>
              </div>
            </div>
            <AiFillPlayCircle className="main__upper__playicon"></AiFillPlayCircle>
            <Age big={true} boolean={movie.adult}></Age>
          </div>

          <div className="main__meta">
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="main__meta__title"
            >
              {movie.title}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="main__meta__genres"
            >
              {genres}
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="main__meta__flex"
            >
              <Stars big={true} stars={movie.vote_average}></Stars>
              <span className="main__meta__flex__reviews">
                {movie.vote_count} Reviews
              </span>
            </div>
          </div>

          <section className="main__description">
            <h3 className="main__description__storyline">Storyline</h3>
            <p className="main__description__overview">{movie.overview}</p>
          </section>

          <div className="castcontainer">
            <div className="castcontainer__uppperflex">
              <h3>Cast</h3>
              <p>see all</p>
            </div>
            <div className="castcontainer__cards">
              {cast.map((castmember) => (
                <Cast
                  key={castmember.id}
                  id={castmember.id}
                  actorname={castmember.name}
                  img={`https://image.tmdb.org/t/p/w500/${castmember.profile_path}`}
                ></Cast>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoviePage;
