import React, { Component } from "react";
import { favList, setNewFavList } from "../../components/Favlist";
import FavMovieCard from "../../components/FavMovieCard";

export default class Favourites extends Component {
  constructor(props){
    super(props)

    this.state = {movies: []};
  }

  componentDidMount(){

    this.setState({movies: favList})

  }

  componentWillUnmount(){

    setNewFavList(this.state.movies)
  }
  render() {
    return (
      <div className="favourites__container">
        <div className="favourites__topflex">
          <p>{"<"}</p>
          <h2>Favourites</h2>
        </div>
        <div className="favourites__moviescontainer">
          {this.state.movies.map(movieid => <FavMovieCard movieid={movieid}></FavMovieCard>)}
        </div>
      </div>
    );
  }
}
