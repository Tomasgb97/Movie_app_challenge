import React, { Component } from "react";
import { Link } from "react-router-dom";
import { favList, setNewFavList } from "../../components/Favlist";
import FavMovieCard from "../../components/FavMovieCard";
import { IoIosArrowBack } from "react-icons/io";

export default class Favourites extends Component {
  constructor(props) {
    super(props);

    this.state = { movies: [] };

    this.removeMovie = this.removeMovie.bind(this);
  }

  removeMovie(id) {
    const movies = this.state.movies;

    const newMovies = movies.filter((movie) => movie !== id);

    this.setState({ movies: newMovies });
  }

  componentDidMount() {
    this.setState({ movies: favList });
    setNewFavList(this.state.movies);
  }

  componentDidUpdate() {
    setNewFavList(this.state.movies);
  }

  componentWillUnmount() {
    this.setState({ movies: favList });
    setNewFavList(this.state.movies);
  }
  render() {
    const { movies } = this.state;
    return (
      <div className="favourites__container">
        <div className="favourites__topflex">
          <Link to={`/`}>
            <IoIosArrowBack />
          </Link>
          <h2>Favourite Movies</h2>
        </div>
        <div className="favourites__moviescontainer">
          {movies.map((movieid) => (
            <FavMovieCard
              key={movieid}
              removeMovie={this.removeMovie}
              movieid={movieid}
            ></FavMovieCard>
          ))}
        </div>
      </div>
    );
  }
}
