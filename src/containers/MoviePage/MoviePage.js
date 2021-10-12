import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../components/Mycontext";
import { AiFillPlayCircle } from "react-icons/ai";
import Stars from "../../components/Stars";
import Age from "../../components/Age";
import FavHeart from "../../components/FavHeart";
import CastComponent from "../../components/CastComponent";
import { findMatchingGenres } from "../../functions/filtering";
import { getCast, getMovie } from "../../functions/fetching";
import {
  isMovieFav,
  deleteMovieFromFavs,
  addMovieToFavs,
} from "../../components/Favlist";

export default class MoviePage extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);

    this.state = {
      adult: "",
      cast: [""],
      vote_count: "",
      fetchedgenres: "",
      movie: {},
      genres: "",
      isfav: false,
    };

    this.favAction = this.favAction.bind(this);
  }

  favAction() {
    if (this.state.isfav) {
      this.setState({ isfav: false });
      deleteMovieFromFavs(this.state.movie.id);
    } else {
      this.setState({ isfav: true });
      addMovieToFavs(this.state.movie.id);
    }
  }

  componentDidMount() {
    let idNumber = parseInt(this.props.match.params.id); //gets id of the movie and formats it;

    let movieIsFetched = Object.values(this.context.fetched).find(
      (movie) => movie.id === idNumber
    );

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
        let genres = movie.genres.map((one) => one.id);
        this.setState({
          movie: {
            title: movie.title,
            poster_path: movie.poster_path,
            adult: movie.adult,
            vote_count: movie.vote_count,
            overview: movie.overview,
            vote_average: movie.vote_average,
            id: movie.id,
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
                <CastComponent
                  key={castmember.id}
                  id={castmember.id}
                  actorname={castmember.name}
                  img={`https://image.tmdb.org/t/p/w500/${castmember.profile_path}`}
                ></CastComponent>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
