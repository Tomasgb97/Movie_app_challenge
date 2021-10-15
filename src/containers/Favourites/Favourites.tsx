import React, { Component } from "react";
import { Link } from "react-router-dom";
import { favList, setNewFavList } from "../../components/Favlist";
import FavMovieCard from "../../components/FavMovieCard";
import { IoIosArrowBack } from "react-icons/io";

interface StateInterface {
  movies: number[];
}

interface PropsInterface {}

class Favourites extends Component<PropsInterface, StateInterface> {
  removeMovie = (id: number) => {
    const movies: number[] = this.state.movies;

    const newMovies: number[] = movies.filter((movie: number) => movie !== id);

    this.setState({ movies: newMovies });
  };

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
          {movies.length === 0 ? (
            <h1 className="favourites__nomovie">
              There are no favourite movies to display
            </h1>
          ) : (
            movies.map((movieid) => (
              <FavMovieCard
                key={movieid}
                removeMovie={this.removeMovie}
                movieid={movieid}
              ></FavMovieCard>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Favourites;
